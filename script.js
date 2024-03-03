document.addEventListener("DOMContentLoaded", function () {
    var nextButton = document.getElementById("Next");
    var History = [];
    
    function updateColorValueDisplay(historyObject) {
        var colorValueHistory = document.getElementById("ShowcolorValue");
        colorValueHistory.innerHTML = "";
    
        var Linebreak = 0;  
        for (var key in historyObject) {
            var colorValueElement = document.createElement("div");
            colorValueElement.className = "circle";
            colorValueElement.style.backgroundColor = historyObject[key];
            colorValueElement.style.border = "1px solid black";            
            colorValueHistory.appendChild(colorValueElement);
    
            Linebreak++;
            if (Linebreak % 3 === 0) { 
                colorValueHistory.appendChild(document.createElement("br"));
            }
        }        
    }
    nextButton.addEventListener("click", function () {
        var circles = document.querySelectorAll(".circle");
        var HistoryObject = { bulb_1: ' ', bulb_2: ' ', bulb_3: ' ' };

        circles.forEach(function (circle, index) {
            var randomColor = getRandomColor();
            circle.style.backgroundColor = randomColor;
            HistoryObject['bulb_' + (index + 1)] = randomColor;
        });
        History.push(HistoryObject);
        console.log(History);
        updateColorValueDisplay(HistoryObject);
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
