document.getElementById("button1").addEventListener("click", function() {

    document.getElementById("box").style.height = "400px";
    document.getElementById("box").style.width = "400px";
});

document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";

});


document.getElementById("button4").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.backgroundColor = "orange";
    document.getElementById("box").innerText = " ";
    document.getElementById("box").style.backgroundImage = "";
    document.getElementById("box").style.width = "150px";
});


let on = true;

function toggle() {
    if (on) { fadeOut(); } else { fadeIn(); }
    on = !on;
}

function fadeOut(){
    document.getElementById("box").style.transition = "opacity 0.75s linear 0s";
    document.getElementById("box").style.opacity = 0;
    document.getElementById("button3").innerHTML = "Fade In";
}

function fadeIn(){
    document.getElementById("box").style.transition = "opacity 0.75s linear 0s";
    document.getElementById("box").style.opacity = 1;
    document.getElementById("button3").innerHTML = "Fade Out";
}

document.getElementById("button5").addEventListener("click", function() {

    document.getElementById("box").innerText = "Hello";
});

document.getElementById("button6").addEventListener("click", function() {

    document.getElementById("box").style.backgroundImage = "url('https://www.francerocks.com/wp-content/themes/replay/framework/extensions/timthumb/timthumb.php?src=https%3A%2F%2Fwww.francerocks.com%2Fwp-content%2Fuploads%2F2019%2F05%2Fyuksek-polo-pan-Cadenza.jpeg&w=610')";
});