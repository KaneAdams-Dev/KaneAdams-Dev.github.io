function MenuIconClicked(a_icon){
    var bar = document.getElementById("topnavbar");
    if (bar.className === "topnav"){
        bar.className += " responsive";
    }else{
        bar.className = "topnav";
    }

    a_icon.classList.toggle("change");
}

function ChangeIcon(x){
    
}

function goFullscreen(a_id){
    var element = document.getElementById(a_id);
    if (element.mozRequestFullScreen){
        element.mozRequestFullScreen();
    }else if (element.webkitRequestFullScreen){
        element.webkitRequestFullScreen();
    }
}