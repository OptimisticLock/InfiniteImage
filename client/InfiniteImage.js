var count = 0;

// counter starts at 0
Session.setDefault('counter', 0);

var isMousedown = false;

Template.palette.events({
    'click button': function () {
        // increment the counter when button is clicked
        Session.set('counter', Session.get('counter') + 1);
    },

    'mouseup': function () {
        isMousedown = false;
        console.log("mouseup");
    },

    'mousedown': function () {
        isMousedown = true;
        console.log("mousedown");
    },

    'mousemove svg >': function (event, template) {
        console.log("mousedrag", event, template);
        if (isMousedown) {
            count++;
            console.log("mousedrag", event, template);
            var x = event.offsetX;
            var y = event.offsetY;
            console.log(x, y);
            //             var circle2 = document.getElementById("circle2");
            var node = event.target;
            var clone = node.cloneNode(true);
            clone.setAttribute("x", x);
            clone.setAttribute("y", y);
            clone.setAttribute("cx", x);
            clone.setAttribute("cy", y);
            var x = clone.getAttribute("x");
            console.log("Count:" + count);

            node.parentNode.appendChild(clone);
        }
    }
});
