var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var player1 = new GameObject();

console.log(document.getElementById("canvas"));

player1.x = 20;
player1.y = canvas.height / 2 - 50;
player1.width = 20;
player1.height = 100;
player1.color = "blue";

setInterval(animate, 1000 / 60);

function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    player1.drawRect(context);
}