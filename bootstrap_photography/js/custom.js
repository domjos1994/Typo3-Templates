$(document).ready(function() {
    callbackFunc();

    $(window).scroll( function() {
        callbackFunc();
        var positionY = window.pageYOffset / 4;
        document.body.style.backgroundPosition = "0 -" + positionY + "px";
    });
});


function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const elements = document.querySelectorAll("div#content_main div.frame");

function callbackFunc() {
    for (let i = 0; i < elements.length; i++) {
        if (isElementInViewport(elements[i])) {
            elements[i].classList.add("visible");
        } else {
            //elements[i].classList.remove("visible");
        }
    }
}