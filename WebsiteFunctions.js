var windowHeight = window.innerHeight;
window.addEventListener("wheel", function (event) {
    'use strict';
    if (event.deltaY < 0) {
        window.scrollBy(0, -windowHeight);

    } else if (event.deltaY > 0) {
        window.scrollBy(0, windowHeight);
    }
});
