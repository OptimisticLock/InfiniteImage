var allPencilLines = new ReactiveVar([]);

Tools.Pencil = {
    toolSelected: function (canvass) {
        canvass.style.cursor = 'crosshair';
    },

    toolUnselected: function (canvass) {
        canvass.style.cursor = "auto";
    },

    mouseUp: function (event, template) {
        // console.log("Pencil mouse up");

        Session.set('isMousedown', false);

        var _aPl = allPencilLines.get();

        _aPl.push(Session.get('pencil-current'));
        allPencilLines.set(_aPl);

        Tracker.nonreactive(function() {
          Session.set('pencil-current', null);
          Session.set('currentDrawing', null);
        });
    },

    mouseDown: function (event, template) {
        // console.log("Pencil mouse down");
        Session.set('isMousedown', true);
        console.log("current cv", Session.get('CV'));

        SVGCommands.insert({
            CV: Session.get('CV'),
            tool: 'Pencil',
            elem: 'polyline',
            // svgPoints: Session.get('pencil-current'),
            style: 'fill:none;stroke:' + Session.get('colorChoice') + ';stroke-width:' + Session.get('currentLineWidth'),
            order: SVGCommands.find().count() + 1,
        }, function(error, result) {
          Session.set('currentDrawing', result);

        });
    },

    mouseMoved: function (event, template) {

    },

    mouseDragged: function (event, template) {
    //  console.log('do i even')
   //   console.log('what is my currentDrawing', Session.get('currentDrawing'))
        var moveX, moveY;


        if (event.type === 'touchmove' && event.originalEvent.touches.length === 1) {
            event.preventDefault();
            moveX = event.originalEvent.touches[0].pageX;
            moveY = event.originalEvent.touches[0].pageY - event.currentTarget.offsetTop;
        } else {
            moveX = event.offsetX;
            moveY = event.offsetY;
        }

        if(event.touchType === 'single') {
          event.preventDefault();
        }

        if (!Session.get('pencil-current')) {
            Session.set('pencil-current', moveX + ',' + moveY);
        }

        Session.set('pencil-current', Session.get('pencil-current') + " " + moveX + ',' + moveY);

        SVGCommands.update({_id: Session.get('currentDrawing')}, {$set: {
          svgPoints: Session.get('pencil-current')
        }});
    }
};

Template.pencil.onCreated(function () {
    this.data = this.data || {};
    this.allPencilLines = [];
});

Template.pencil.helpers({
    allPencilLines: function () {
        return SVGCommands.find({
            'tool': 'Pencil',
            'CV': Session.get('CV'),
        });
    },
    points: function () {
        return Session.get("polyline");
    },

    currentLine: function () {
        var current = Session.get('pencil-current');

        return current;
    }
});

