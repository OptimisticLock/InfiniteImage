// TODO there should be plugin architecture allowing for 3rd party packages for specific tools

Session.setDefault("scale", 1.);

Template.palette.onRendered(function () {
    $('.colorPicker').colorpicker({
        // inline: true,
    });

    $('.colorPicker').colorpicker().on('changeColor', function (event) {
        console.log(event.color.toHex())
        Session.set('colorChoice', event.color.toHex());
    });

    Session.set('colorChoice', 'black');
    Session.set('currentLineWidth', 2);

    $('#toolPencil').click();
})

Template.palette.events({

    'click #toolPolyline': function (event, template) {
        console.log("111111111");
        Session.set('currentTool', 'Polyline');
    },

    'click #toolPencil': function (event, template) {
        console.log("22222222222");
        Session.set('currentTool', 'Pencil');
    },

    'click #toolEllipse': function (event, template) {
        console.log("333333333");
        Session.set('currentTool', 'Ellipse');
    },

    'click .colorPicker': function (e, t) {
        $('.colorPicker').colorpicker('show');
    },

    'click #clearBoard': function (e, t) {
        SVGCommands.find().forEach(function (cmd) {
            SVGCommands.remove({_id: cmd._id});
        })
    },

    'click .lineWidthChoice': function(e,t) {
      console.log('got here?')
      var elem = e.currentTarget;
      console.log($(elem).attr('linewidth'))

      Session.set('currentLineWidth', $(elem).attr('linewidth'));
    },

    "click #plus": function() {
        console.log("click+");
        var scale = Session.get("scale");
        Session.set("scale", scale *1.5);


    },

    "click #minus": function() {
        console.log("click-");
        var scale = Session.get("scale");
        Session.set("scale", scale /1.5);
    },

});

// Template.palette.helpers({
//   activeColor: function() {
//     return Session.get('colorChoice');
//   }
// });

Template.registerHelper('activeColor', function () {
    if (!Session.get('colorChoice')) {
        return 'black';
    }
    return Session.get('colorChoice');
});

Template.registerHelper('activeLineWidth', function() {
  if(!Session.get('currentLineWidth')) {
    return '2';
  }

  return Session.get('currentLineWidth');
});

//zoom: var z = svg.currentScale;