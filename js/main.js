var secs = [];
window.onload = getSections;

function getSections()
{
    secs[0] = document.getElementById("section_0");
    secs[1] = document.getElementById("section_1");
    secs[2] = document.getElementById("section_2");
    secs[3] = document.getElementById("section_3");
    secs[4] = document.getElementById("section_4");
}

function ocultar(){
    for( i = 0; i< secs.length; i++){
        secs[i].classList.add("hidden");
    }
}

function cambioVista(target){
    var getId = target.id.split("_")[1];
    ocultar();
    secs[getId].classList.remove("hidden");
}