currentThumbnail;



function GetRandomPreview(a_id){
    console.log(a_id);

    const videoOptions = {
        Mobbers: "/Images/Mobbers/Lib.gif"
    };
    console.log(a_id in videoOptions);

    let keyExist = Object.keys(videoOptions).some(key => key === a_id);
    console.log(keyExist);
    const gifs = videoOptions[a_id];

    return videoOptions.Mobbers;//gifs ? gifs[Math.floor(Math.random() * gifs.length)] : null;
}

function PlayPreview(a_id) {
    let x = document.getElementById(a_id);

    console.log(a_id);
    currentThumbnail = x.src;
    // if ('Mobbers' in videoOptions) {
    //     x.src = "/Images/Mobbers/Lib.gif";
    // }
    let chosenGIF = GetRandomPreview(a_id);
    //if (chosenGIF != null){
        x.src = chosenGIF;
    //}else {
        //x.style.width = "10px";
    //}
    
}

function StopPreview(a_id) {
    let x = document.getElementById(a_id);

    x.src = currentThumbnail;
}