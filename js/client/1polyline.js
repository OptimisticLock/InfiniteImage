Tools = {}; // TODO

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
    },

    mouseMoved: function(event, template) {
        console.log("Polyline mouse moved");
    },

    mouseDragged: function(event, template) {
        console.log("Polyline mouse dragged");
    }
};


