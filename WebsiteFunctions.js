function smoothScroll() {
    'use strict';
    var windowHeight = window.document.getElementById("Title").offsetHeight;
    window.addEventListener("wheel", function (event) {
        if (event.deltaY < 0) {
            window.scrollBy(0, -windowHeight);
        } else if (event.deltaY > 0) {
            window.scrollBy(0, windowHeight);
        }
    });
}
/* A switch case in which it scrolls to the next section, depending on which section it is currently on 
var divArray = [document.getElementById("Title"), document.getElementById("LBlue"), document.getElementById("Pink"),
                document.getElementById("Yelow"), document.getElementById("Tan")];
                */
