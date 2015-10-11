// TODO there should be plugin architecture allowing for 3rd party packages for specific tools

Template.palette.onRendered(function() {
  $('.demo2').colorpicker({
    // inline: true,
  });

  $('.demo2').colorpicker().on('changeColor', function(event) {
    console.log(event.color.toHex())
    Session.set('colorChoice', event.color.toHex());
  });

  Session.set('colorChoice', 'black')
})

Template.palette.events({

    'click #toolPolyline': function (event, template) {
       console.log ("111111111");
       Session.set('currentTool', 'Polyline');
    },

    'click #toolPencil': function (event, template) {
        console.log ("22222222222");
        Session.set('currentTool', 'Pencil');
    },

    'click #toolEclilpse': function (event, template) {
        console.log ("22222222222");
        Session.set('currentTool', 'Ellipse');
    },

    'click .demo2': function(e,t) {
      $('.demo2').colorpicker('show');
    }

});

// Template.palette.helpers({
//   activeColor: function() {
//     return Session.get('colorChoice');
//   }
// });

Template.registerHelper('activeColor', function() {
  if(!Session.get('colorChoice')) {
    return 'black';
  }
  return Session.get('colorChoice');
})
