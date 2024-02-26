document.addEventListener("DOMContentLoaded", function() {
    var nextButton = document.getElementById("Next");
    var History = [];

    nextButton.addEventListener("click", function() {
    var circles = document.querySelectorAll(".circle");
    circles.forEach(function(circle) {
    var randomColor = getRandomColor();
    circle.style.backgroundColor = randomColor;
    History.push(randomColor);
    });
    console.log(History)
    });
    });
    
    function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
    }