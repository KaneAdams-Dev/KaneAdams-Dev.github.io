currentThumbnail;
currentImageID;

function GetRandomPreview(a_id) {
    console.log(currentImageID.id);

    const videoOptions = {
        Mobbers: ["/Images/Mobbers/Lib.gif", "/Images/Mobbers/test.gif"],
        Rambleon: []

    };
    if (currentImageID.id in videoOptions) {
        const gifs = videoOptions[currentImageID.id];
        console.log(gifs.length)

        return gifs[Math.floor(Math.random() * gifs.length)];//gifs ? gifs[Math.floor(Math.random() * gifs.length)] : null;
    }else {
        console.log("Oops");
    }

}

function PlayPreview(a_id) {
    currentImageID = document.getElementById(a_id);

    console.log(a_id);
    currentThumbnail = currentImageID.src;

    let chosenGIF = GetRandomPreview(currentThumbnail);
    if (chosenGIF != null){
        currentImageID.src = chosenGIF;
    }
}

function StopPreview() {
    currentImageID.src = currentThumbnail;
}
