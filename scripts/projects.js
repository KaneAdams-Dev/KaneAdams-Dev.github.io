currentThumbnail;

function GetRandomPreview(a_id) {
    console.log(a_id);

    const videoOptions = {
        Mobbers: ["/Images/Mobbers/Lib.gif", "/Images/Mobbers/test.gif"],
        Rambleon: []

    };
    const gifs = videoOptions.Mobbers;

    return videoOptions.Mobbers[Math.floor(Math.random() * gifs.length)];//gifs ? gifs[Math.floor(Math.random() * gifs.length)] : null;
}

function PlayPreview(a_id) {
    let x = document.getElementById(a_id);

    console.log(a_id);
    currentThumbnail = x.src;

    let chosenGIF = GetRandomPreview(a_id);
    x.src = chosenGIF;
}

function StopPreview(a_id) {
    let x = document.getElementById(a_id);

    x.src = currentThumbnail;
}
