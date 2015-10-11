// TODO there should be plugin architecture allowing for 3rd party packages for specific tools

Template.palette.onRendered(function () {
    $('.demo2').colorpicker({
        // inline: true,
    });

    $('.demo2').colorpicker().on('changeColor', function (event) {
        console.log(event.color.toHex())
        Session.set('colorChoice', event.color.toHex());
    });

    Session.set('colorChoice', 'black')

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

    'click .demo2': function (e, t) {
        $('.demo2').colorpicker('show');
    },

    'click #clearBoard': function (e, t) {
        SVGCommands.find().forEach(function (cmd) {
            SVGCommands.remove({_id: cmd._id});
        })
    }

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
})
