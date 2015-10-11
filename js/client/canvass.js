Tools = {};
Tools.CurrentTool = Tools.Polyline;


var count = 0;

// counter starts at 0
Session.setDefault('counter', 0);
//Session.setDefault('tool', undefined);
//Session.setDefault('polyline', "");



var isMousedown = false;

Template.polyline.helpers({
    points: function() {
        return Session.get("polyline");
//        return "20,20 40,40 60,0 80,120 120,140 200,180 20, 20";
    },

    tentative: function() {
        var last = Session.get("last");
        var current = Session.get("current");
        return {x1 : last.x, y1: last.y, x2: current.x, y2: current.y};
    }
});


Template.canvass.events({

    'mouseup': function (event, template) {
        isMousedown = false;
        console.log("mouseup!!!!!!");
        Tools.currentTool.mouseUp(event, template);
    },

    'mousedown': function (event, template) {
        isMousedown = true;
        console.log("mousedown!!!!!!!");
        Tools.CurrentTool.mouseDown(event, template);
    },

    'mousemove': function (event, template) {
        if (isMousedown) {
            count++;
            Tools.CurrentTool.mouseDragged(event, template);
            console.log("mousedrag!!!!!!!" + count);

        }
        else {
            console.log("mousemove!!!");
            Tools.CurrentTool.mouseMoved(event, template);
        }
    }
});
