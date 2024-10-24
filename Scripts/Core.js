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

function initialiseCollapsibles(){
    var coll = document.getElementsByClassName("collapsible");
    
    for (var i = 0; i < coll.length; i++){
        if (i === 0){
            expandCollapsibles(coll[i]);
        }

        coll[i].addEventListener("click", function() {
            expandCollapsibles(this);
        });
    }
}

function expandCollapsibles(a_coll){
    a_coll.classList.toggle("active");
    var content = a_coll.nextElementSibling;
    if (content.style.maxHeight){
        content.style.maxHeight = null;
        
    } else {
        content.style.maxHeight = content.scrollHeight + "px";
    }
}
