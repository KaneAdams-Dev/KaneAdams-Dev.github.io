// Contains code for controlling the photo gallery of a project

let slideIndex = 0;

timer = 0;

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

function timedSlideChange() {
    // timer = setTimeout(() => {
    //     // console.log("Waited for 5 seconds");
    //     changeSlide(1);
    //     timedSlideChange(5);
    // }, (a_waitLength * 1000));
    // console.log("New slide!");

    changeSlide(1);

    setTimeout(timedSlideChange, 5000)
    // changeSlide(1);
}

function PauseAutoSlide(){
    clearTimeout(timer);
}
