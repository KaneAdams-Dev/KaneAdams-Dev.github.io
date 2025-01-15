// Contains all code related to collapsible content

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