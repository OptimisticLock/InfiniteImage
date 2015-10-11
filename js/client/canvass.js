
Tools.CurrentTool = Tools.Polyline;


var count = 0;

// counter starts at 0
Session.setDefault('counter', 0);
//Session.setDefault('tool', undefined);
//Session.setDefault('polyline', "");



var isMousedown = false;


Template.canvass.events({

    'mouseup': function (event, template) {
        isMousedown = false;
        console.log("mouseup!!!!!!");
        Tools.CurrentTool.mouseUp(event, template);
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
