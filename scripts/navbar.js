// Controls code related to the navigation bars (top and bottom)

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