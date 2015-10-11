Tools.Ellipse = {
    toolSelected: function
        (canvass) {
        canvass.style.cursor = "crosshair";
    }
    ,

    toolUnselected: function (canvass) {
        canvass.style.cursor = "auto";
    }
    ,

    mouseUp: function (event, template) {
        console.log("Ellipse mouse up");
    }
    ,

    mouseDown: function (event, template) {
        console.log("Ellipse mouse down");
        var x = event.offsetX;
        var y = event.offsetY;

        if (center === undefined) {
            center = {x: x, y: y};
        }

        else {
            var dx = x - center.x;
            var dy = y - center.y;
            r = dx * dx + dy * dy;
        }

        isDrawing = !isDrawing;

        var polyline = Session.get("polyline");

        if (polyline === undefined) {
            polyline = "";
        }
        polyline = polyline + " " + x + "," + y;

        Session.set("polyline", polyline);
        Session.set("last", {x: x, y: y});
    },

    mouseMoved: function (event, template) {
        console.log("Ellipse mouse moved");
        //   var x = event.offsetX;
        //   var y = event.offsetY;
        //   Session.set("current", {x: x, y: y});
    }
    ,

    mouseDragged: function (event, template) {
        console.log("Ellipse mouse dragged");
    }
}
;


