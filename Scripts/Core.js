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

function goFullscreen(a_id) {
    var element = document.getElementById(a_id);
    if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
    } else if (element.webkitRequestFullScreen) {
        element.webkitRequestFullScreen();
    }
}

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
