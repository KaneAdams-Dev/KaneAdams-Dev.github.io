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