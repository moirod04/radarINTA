var div=document.getElementById('pc');

function pantallaCompleta() {
    if (div.requestFullscreen) {
        div.requestFullscreen();
    }
    else{
        div.webkitRequestFullscreen();
    }
}