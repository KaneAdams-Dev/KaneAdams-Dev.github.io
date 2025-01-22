currentThumbnail;

function PlayPreview(a_id) {
    let x = document.getElementById(a_id);

    currentThumbnail = x.src;
    x.src = "/Images/Mobbers/Lib.gif"
}

function StopPreview(a_id) {
    let x = document.getElementById(a_id);

    x.src = currentThumbnail;
}