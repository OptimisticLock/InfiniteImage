Template.colorPalette.helpers({
    colors: ["black", "white", "gray", "red", "green", "blue", "yellow",
        "purple", "magenta", "aqua", "aquamarine", "lime"]
});

Template.colorPalette.events({
    click: function (event) {
        var color = event.target.style.backgroundColor;
        console.log("Clicked", color);
        Session.set('colorChoice', color);
    }
});

