
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

  'mouseup, touchend': function (event, template) {
    // event.preventDefault();

    isMousedown = false;
    console.log("mouseup!!!!!!");
    template.CurrentTool.mouseUp(event, template);
  },

  'mousedown, touchstart': function (event, template) {
    // event.preventDefault();

    isMousedown = true;
    console.log("mousedown!!!!!!!");
    template.CurrentTool.mouseDown(event, template);


  },

  'mousemove, touchmove': function (event, template) {
    // event.preventDefault();

    if (isMousedown) {
      template.CurrentTool.mouseDragged(event, template);
    }
    else {
      template.CurrentTool.mouseMoved(event, template);
    }
  }
});

Template.canvass.helpers({
  items: function() {
    return SVGCommands.find({}, {sort: {order: 1}});
  },
  isPolyline: function(){
    if(this.elem === 'polyline') {
      return true;
    }
  },
  isElipse: function() {
    if(this.elem === 'circle'){
      return true;
    }
  }
})
