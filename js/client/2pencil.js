
var allPencilLines = new ReactiveVar([]);

Tools.Pencil = {
  toolSelected: function(canvass) {
    canvass.style.cursor='crosshair';
  },

  toolUnselected: function(canvass) {
    canvass.style.cursor="auto";
  },

  mouseUp: function(event, template) {
    // console.log("Pencil mouse up");

    Session.set('isMousedown', false);

    var _aPl = allPencilLines.get();

    _aPl.push(Session.get('pencil-current'));
    allPencilLines.set(_aPl);


    SVGCommands.insert({
      tool: 'Pencil',
      elem: 'polyline',
      svgPoints: Session.get('pencil-current'),
      style: 'fill:none;stroke:black;stroke-width:3',
      order: SVGCommands.find().count() + 1,
    });

    Session.set('pencil-current', null);
  },

  mouseDown: function(event, template) {
    // console.log("Pencil mouse down");
    Session.set('isMousedown', true);
  },

  mouseMoved: function(event, template) {

  },

  mouseDragged: function(event, template) {

    if(!Session.get('pencil-current')) {
      Session.set('pencil-current', event.offsetX + ',' + event.offsetY);
    }

    Session.set('pencil-current', Session.get('pencil-current') + " " + event.offsetX + ',' + event.offsetY);
  },
  allPencilLines: function() {

  }
};

Template.pencil.onCreated(function() {
  this.data = this.data || {};
  this.allPencilLines = [];
});

Template.pencil.helpers({
  allPencilLines: function() {
    return SVGCommands.find({
      'tool': 'Pencil'
    });
  },
  points: function() {
    return Session.get("polyline");
  },

  currentLine: function() {
    var current = Session.get('pencil-current');

    return current;
  }
});

