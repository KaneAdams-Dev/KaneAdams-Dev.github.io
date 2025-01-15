// Navbar
function MenuIconClicked(a_icon) {
    var bar = document.getElementById("top-nav");
    if (bar.className === "navbar") {
        bar.className += " responsive";
    } else {
        bar.className = "navbar";
    }

    a_icon.classList.toggle("change");
}

function ChangeIcon(x) {

}

// WEBGL Hotbar
function copyToClipboard(a_stringToCopy) {
    var copyText = document.getElementById(a_stringToCopy);

    // copyText.select();
    // copyText.setSelectRange(0, 99999);  // For mobile devices

    var gameUrl = copyText.src; // Get the URL of the iframe
    navigator.clipboard.writeText(gameUrl).then(() => {
        alert('Game link copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

function goFullscreen(a_id) {
    var element = document.getElementById(a_id);
    if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    }
}

// Collapsibles
function initialiseCollapsibles() {
    var coll = document.getElementsByClassName("collapsible");

    for (var i = 0; i < coll.length; i++) {
        if (i === 0) {
            expandCollapsibles(coll[i]);
        }

        coll[i].addEventListener("click", function () {
            expandCollapsibles(this);
        });
    }
}

function expandCollapsibles(a_coll) {
    a_coll.classList.toggle("active");
    var content = a_coll.nextElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null;

    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}


// Gallery Slideshow
let slideIndex = 0;

function changeSlide(a_dir) {
    showSlide(slideIndex += a_dir);
}

function showSlide(a_newSlide) {
    let i;
    let slides = document.getElementsByClassName("slides");

    // Loops around slides
    if (a_newSlide > slides.length - 1) {
        slideIndex = 0;
    }
    if (a_newSlide < 0) {
        slideIndex = slides.length - 1;
    }

    // Shows only current slide, hides all rest
    for (i = 0; i < slides.length; i++) {
        if (i == slideIndex) {
            slides[i].style.display = "block";
        } else {
            slides[i].style.display = "none";
        }
    }
}

function timedSlideChange(a_waitLength) {
    setTimeout(() => {
        // console.log("Waited for 5 seconds");
        changeSlide(1);
        timedSlideChange(5);
    }, (a_waitLength * 1000));
    console.log("New slide!");

    // changeSlide(1);
}
