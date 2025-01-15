// Controls code related to embedded games and their hotbar

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