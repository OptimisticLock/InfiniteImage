// TODO not DRY, but OK for n20,20 40,40 60,0 80,120 120,140 200,180 20, 20ow because palette will be refactored away soon

var count = 0;

// counter starts at 0
Session.setDefault('counter', 0);
Session.setDefault('polyline', "");



var isMousedown = false;

Template.polyline.helpers({
    points: function() {
        return Session.get("polyline");
//        return "20,20 40,40 60,0 80,120 120,140 200,180 20, 20";
    },

    tentative: function() {
        var last = Session.get("last");
        var current = Session.get("current");
        return {x1 : last.x, y1: last.y, x2: current.x, y2: current.y};
    }
});



Template.canvass.events({
    'click button': function () {
        // increment the counter when button is clicked
        Session.set('counter', Session.get('counter') + 1);
    },

    'mouseup': function () {
        isMousedown = false;
        console.log("mouseup!!!!!!");
    },

    'mousedown': function () {
        isMousedown = true;
        console.log("mousedown!!!!!!!");
        var x = event.offsetX;
        var y = event.offsetY;
        var polyline = Session.get("polyline");
        polyline = polyline + " " + x + "," + y;
        Session.set("polyline", polyline);
        Session.set("last", {x: x, y: y});
        console.log("polyline: " + polyline);
    },

    'mousemove': function (event, template) {
        console.log("mousedrag!!!", event, template);
        if (isMousedown) {
            count++;
            console.log("mousedrag!!!!!!!", event, template);

            console.log(x, y);
            //             var circle2 = document.getElementById("circle2");
            var node = event.target;
     /*       var clone = node.cloneNode(true);
            clone.setAttribute("x", x);
            clone.setAttribute("y", y);
            clone.setAttribute("cx", x);
            clone.setAttribute("cy", y);
            var x = clone.getAttribute("x");
            console.log("Count:" + count);

            node.parentNode.appendChild(clone); */
        }
        else {
            var x = event.offsetX;
            var y = event.offsetY;
            Session.set("current", {x: x, y: y});
        }
    }
});
