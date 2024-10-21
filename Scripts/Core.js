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

function expandCollapsible(){
    var coll = document.getElementByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++){
        coll[i].addEventListener("click", function(){
            this.classList.toggle("active");
            var content = this.nectElementSibling;
            if (content.style.display === "block"){
                content.style.display = "none";
            }else{
                content.style.display = "block";
            }
        });
    }
}