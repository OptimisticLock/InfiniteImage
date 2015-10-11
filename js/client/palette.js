// TODO there should be plugin architecture allowing for 3rd party packages for specific tools

Template.palette.events({

    'click #toolPolyline': function (event, template) {
       console.log ("111111111");
       Session.set('currentTool', 'Polyline');
    },

    'click #toolPencil': function (event, template) {
        console.log ("22222222222");
        Session.set('currentTool', 'Pencil');
    },

    'click #toolEllipse': function (event, template) {
        console.log ("333333333");
        Session.set('currentTool', 'Ellipse');
    },
});
