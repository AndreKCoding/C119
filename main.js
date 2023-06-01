array=['caneta','papel','livro','garrafa','xícara','computador'];
var randomNumber = Math.floor((Math.random() * array.length));
sketch = array[randomNumber];

console.log(randomNumber);
console.log(sketch);

document.getElementById("esboço").innerHTML = "Esboço a Ser Desenhado: " + sketch;

var timerCounter = 0;
var timerCheck = 0;

var drawSketch = "";
var answerHolder = "";

var score = 0;

function setup()
{
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
}

function draw()
{
    checkSketch();

    strokeWeight(10);
    if (mouseIsPressed)
    {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }

    if (drawSketch = sketch)
    {
        var answerHolder = "set";
        var score = 0;

        document.getElementById("score").innerHTML = "Pontuação: " + score;
    }
}

function checkSketch()
{
    timerCounter ++;
    document.getElementById("time").innerHTML = "Tempo: " + timerCounter;

    if (timerCounter == 400)
    {
        timerCounter = 0;
        timerCheck = "completed";
        if (timerCheck == "completed" || answerHolder == "set")
        {
            timerCheck = "";
            answerHolder = "";

            console.log("Finished");

            updateCanvas();
        }
    }
}

function updateCanvas()
{
    console.log("Updated");
    background("white");

    array=['caneta','papel','livro','garrafa','xícara','computador'];
    var randomNumber = Math.floor((Math.random() * array.length));
    sketch = array[randomNumber];       

    console.log(randomNumber);
    console.log(sketch);

    document.getElementById("esboço").innerHTML = "Esboço a Ser Desenhado: " + sketch;
}
