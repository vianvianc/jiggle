document.getElementById("button1").addEventListener("click", function() {

    document.getElementById("box").style.height = "250px";
});

document.getElementById("button2").addEventListener("click", function(){

    document.getElementById("box").style.backgroundColor = "blue";

});


document.getElementById("button4").addEventListener("click", function(){

    document.getElementById("box").style.height = "150px";
    document.getElementById("box").style.backgroundColor = "orange";

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
