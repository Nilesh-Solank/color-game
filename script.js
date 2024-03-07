document.addEventListener("DOMContentLoaded", function () {
    var nextButton = document.getElementById("Next");
    var PreviousButton = document.getElementById("Previous");
    var History = [];
    var currentIndex = -1;

    function updateColorValueDisplay(historyObjects, circleClassName) {
        var colorValueHistory = document.getElementById("ShowcolorValue");
        colorValueHistory.innerHTML = "";

        var Linebreak = 0;
        historyObjects.forEach(function (historyObject) {
            for (var key in historyObject) {
                var colorValueElement = document.createElement("div");
                colorValueElement.className = circleClassName;
                colorValueElement.style.backgroundColor = historyObject[key];
                colorValueHistory.appendChild(colorValueElement);

                Linebreak++;
                if (Linebreak % 3 === 0) {
                    colorValueHistory.appendChild(document.createElement("br"));
                }
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
            HistoryObject['bulb_' + (index + 1)] = previousColor;
        });
        if (currentIndex < History.length - 1) {
            History = History.slice(0, currentIndex + 1);
        }
        History.push(HistoryObject);
        currentIndex++;
        console.log(History);
        updateColorValueDisplay(History, 'CircleHistory');
    });

    PreviousButton.addEventListener("click", function () {
        if (currentIndex > 0) {
            currentIndex--;
            var prevColors = History[currentIndex];
            var circles = document.querySelectorAll(".circle");
            circles.forEach(function (circle, index) {
                circle.style.backgroundColor = prevColors['bulb_' + (index + 1)];
            });
        }
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
