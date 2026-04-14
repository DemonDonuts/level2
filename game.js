var canvas = document.getElementById('gameCanvas');
var context = canvas.getContext('2d');

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

setInterval(animate, 1000 / 60);
