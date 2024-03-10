    document.addEventListener("DOMContentLoaded", function () {
    var nextButton = document.getElementById("Next");
    var PreviousButton = document.getElementById("Previous");
    var History = [];
    var currentIndex = -1;
    var selectedColorIndex = -1;

    function updateColorValueDisplay(historyObjects, circleClassName) {
        var colorValueHistory = document.getElementById("ShowcolorValue");
        colorValueHistory.innerHTML = "";
    
        var Linebreak = 0;
        historyObjects.forEach(function (historyObject, index) {
            var wrapperDiv = document.createElement("div");
            wrapperDiv.className = "wrapper";
            wrapperDiv.style.display = "ruby";
            wrapperDiv.style.padding = "25px 13px 0 0";
            wrapperDiv.style.borderRadius = "50px";
    
            for (var key in historyObject) {
                var colorValueElement = document.createElement("div");
                colorValueElement.className = circleClassName;
                colorValueElement.style.backgroundColor = historyObject[key];
                colorValueElement.addEventListener("click", function () {
                    selectedColorIndex = index;
                    updateMainCirclesColors(selectedColorIndex);
                    updateWrapperColors();
                });
                wrapperDiv.appendChild(colorValueElement);
                Linebreak++;
            }
    
            colorValueHistory.appendChild(wrapperDiv);
    
            if (Linebreak % 3 === 0) {
                colorValueHistory.appendChild(document.createElement("br"));
            }
        });
    }
    
    function updateMainCirclesColors(selectedColorIndex) {
        var circles = document.querySelectorAll(".circle");
        var selectedColors = History[selectedColorIndex];
        circles.forEach(function (circle, index) {
            circle.style.backgroundColor = selectedColors['bulb_' + (index + 1)];
        });
    }

    function updateWrapperColors() {
        var circles = document.querySelectorAll(".circle");
        var wrapperCircles = document.querySelectorAll(".wrapper");
        
        wrapperCircles.forEach(function (wrapperCircle) {
            var wrapperColors = Array.from(wrapperCircle.querySelectorAll('.CircleHistory')).map(circle => circle.style.backgroundColor);
            if (wrapperColors.every(color => Array.from(circles).map(circle => circle.style.backgroundColor).includes(color))) {
                wrapperCircle.style.backgroundColor = '#00000033';  
            } else {
                wrapperCircle.style.backgroundColor = ''; 
            }
        });
    }

    nextButton.addEventListener("click", function () {
        var circles = document.querySelectorAll(".circle");
        var HistoryObject = { bulb_1: ' ', bulb_2: ' ', bulb_3: ' ' };

        circles.forEach(function (circle, index) {
            var randomColor = getRandomColor();
            var previousColor = circle.style.backgroundColor;
            circle.style.backgroundColor = randomColor;
            HistoryObject['bulb_' + (index + 1)] = randomColor;  
        });
        if (currentIndex < History.length - 1) {
            History = History.slice(0, currentIndex + 1);
        }
        History.push(HistoryObject);
        currentIndex++;
        console.log(History);
        updateColorValueDisplay(History, 'CircleHistory');
        updateWrapperColors(); // 
    });

    PreviousButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            var prevColors = History[currentIndex];
            var circles = document.querySelectorAll(".circle");
            circles.forEach(function (circle, index) {
                circle.style.backgroundColor = prevColors['bulb_' + (index + 1)];
            });
            updateWrapperColors();  
        }
    });

    function getRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
