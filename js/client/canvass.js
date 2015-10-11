
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
    isMousedown = false;
    console.log("mouseup!!!!!!");
    template.CurrentTool.mouseUp(event, template);
  },

  'mousedown, touchstart': function (event, template) {

    isMousedown = true;
    console.log("mousedown!!!!!!!");
    template.CurrentTool.mouseDown(event, template);


  },

  'mousemove, touchmove': function (event, template) {

    if(event.type === 'touchmove' && event.originalEvent.touches.length === 1) {
      event.moveX = event.originalEvent.touches[0].pageX;
      event.moveY = event.originalEvent.touches[0].pageY - event.currentTarget.offsetTop;
      event.touchType = 'single'
    } else if (event.type === 'touchmove' && event.originalEvent.touches.length === > 1) {
      event.moveX = event.originalEvent.touches[0].pageX;
      event.moveY = event.originalEvent.touches[0].pageY - event.currentTarget.offsetTop;
      event.touchType = 'multi'
    } else {
      event.moveX = event.offsetX;
      event.moveY = event.offsetY;
    }

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

  isEllipse: function() {
    if(this.elem === 'ellipse'){
      return true;
    }
  }
})
