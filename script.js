document.addEventListener("DOMContentLoaded", function() {
    var nextButton = document.getElementById("Next");
    var History = [];
    
    nextButton.addEventListener("click", function() {
        var circles = document.querySelectorAll(".circle");
        var HistoryObject = { bulb_1: ' ', bulb_2: ' ', bulb_3: ' ' };
        
        circles.forEach(function(circle, index) {
            var randomColor = getRandomColor();
            circle.style.backgroundColor = randomColor;
            HistoryObject['bulb_' + (index + 1)] = randomColor;  
        });
        
        History.push(HistoryObject);
        console.log(History); 
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