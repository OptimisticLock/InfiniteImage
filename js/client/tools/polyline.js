
Tools.Polyline = {
  toolSelected: function(canvass) {
    canvass.style.cursor="crosshair";
  },

  toolUnselected: function(canvass) {
    canvass.style.cursor="auto";
  },

  mouseUp: function(event, template) {
    console.log("Polyline mouse up");
  },

  mouseDown: function(event, template) {
    console.log("Polyline mouse down");
    var x = event.offsetX;
    var y = event.offsetY;
    var polyline = Session.get("polyline");

    if (polyline == null)
    {
      polyline = "";
    }

    polyline = polyline + " " + x + "," + y;

    if(polyline.split(',').length === 4) {
      SVGCommands.insert({
        tool: 'Polyline',
        elem: 'polyline',
        svgPoints: polyline,
        style: 'fill:red;stroke:black;stroke-width:3',
        order: SVGCommands.find().count() + 1,
      });

      Session.set('polyline', null);
      Session.set('last', null);

      return;
    }

    Session.set("polyline", polyline);
    Session.set("last", {x: x, y: y});
  },

  mouseMoved: function(event, template) {
    console.log("Polyline mouse moved");
    var x = event.offsetX;
    var y = event.offsetY;
    Session.set("current", {x: x, y: y});
  },

  mouseDragged: function(event, template) {
    console.log("Polyline mouse dragged");
  }
};

//--------------------------------------------------------------------------
Template.polyline.helpers({
  polylines: function() {
    return SVGCommands.find({
      tool: 'Polyline',
    })
    // return Session.get("polyline");
  },

  currPoints: function() {
    return Session.get('polyline');
  },

  tentative: function() {
    var last = Session.get("last");
    var current = Session.get("current");

    if (last === undefined)
      return {};
    else
      return {x1 : last.x, y1: last.y, x2: current.x, y2: current.y};
  }
});

