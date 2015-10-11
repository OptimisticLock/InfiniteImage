Tools = {}; // TODO

Tools.Polyline = {
  toolSelected: function(canvass) {
    canvass.style.cursor="crosshair";
  },

  toolUnselected: function(canvass) {
    canvass.style.cursor="auto";
  },

  mouseUp: function(event, template) {
    console.log("Ellipse mouse up");
  },

  mouseDown: function(event, template) {
    console.log("Ellipse mouse down");
    var x = event.offsetX;
    var y = event.offsetY;
    var polyline = Session.get("polyline");

    if (polyline === undefined )
    {
      polyline = "";
    }
    polyline = polyline + " " + x + "," + y;

    Session.set("polyline", polyline);
    Session.set("last", {x: x, y: y});
  },

  mouseMoved: function(event, template) {
    console.log("Ellipse mouse moved");
    var x = event.offsetX;
    var y = event.offsetY;
    Session.set("current", {x: x, y: y});
  },

  mouseDragged: function(event, template) {
    console.log("Ellipse mouse dragged");
  }
};

//--------------------------------------------------------------------------
Template.polyline.helpers({
  points: function() {
    return Session.get("polyline");
//        return "20,20 40,40 60,0 80,120 120,140 200,180 20, 20";
  },

  tentative: function() {
    var last = Session.get("last");
    var current = Session.get("current");

    // User has not clicked anywhere yet
    if (last === undefined)
      return {};
    else
      return {x1 : last.x, y1: last.y, x2: current.x, y2: current.y};
  }
});

