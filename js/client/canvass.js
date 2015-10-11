
CurrentTool = Tools[Session.get('currentTool')];

var isMousedown = false;

Template.canvass.onCreated(function() {
  var ctx = this;

  this.autorun(function() {
    console.log(Session.get('currentTool'))
    ctx.CurrentTool = Tools[Session.get('currentTool')];
  });
})

Template.canvass.events({

  'mouseup': function (event, template) {
    isMousedown = false;
    console.log("mouseup!!!!!!");
    template.CurrentTool.mouseUp(event, template);
  },

  'mousedown': function (event, template) {
    isMousedown = true;
    console.log("mousedown!!!!!!!");
    template.CurrentTool.mouseDown(event, template);
  },

  'mousemove': function (event, template) {
    if (isMousedown) {
      // count++;
      template.CurrentTool.mouseDragged(event, template);
      // console.log("mousedrag!!!!!!!" + count);

    }
    else {
      // console.log("mousemove!!!", template);
      template.CurrentTool.mouseMoved(event, template);
    }
  }
});
