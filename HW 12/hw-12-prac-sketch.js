//hw-12-prac
//var prac numbers
var sum;
var number1;
var number2;
var x = 100;
var y = 70;
var x2 = 50;
var y2 = 80;
var diameter = 40;
var mousex = 0;
var mousey = 0;
var w = 87;
var s = 83;
var a = 65;
var d = 68;

var myXs = [];
var myYs = [];
var myDiameters = [];


function setup()
{
    createCanvas(800,600);

    for(var i = 0; i < 4; i++)
    {
        myXs[i] = getRandomNumber(800);
        myYs[i] = getRandomNumber(600);
        myDiameters[i] = getRandomNumber(100);
    }
}

function draw()
{
    background(0);

    CircleSquare();

    CircleSquareP(400,250,70,75,200,65);

    number1 = 4;
    number2 = 8;
    calculateSum(number1, number2, 250, 150);


    number1 = 16;
    number2 = 64;
    calculateSum(number1, number2, 50, 150);

    fill(131, 57, 118);
    circle(x2, y2, diameter);

    controlCircle();

    ellipse(mousex, mousey, 15, 50);

    for(var i = 0; i < myXs.length; i++)
    {
        ConcentricCircle
        (
            myXs[i],
            myYs[i],
            myDiameters[i],
            myDiameters[i] / 2,
            50,
            120,
            120,
            120,
            50,
            120
        )
    }
}

function controlCircle ()
{
    if (x2 >= 200)
    {
        x2 = 50;
    }
    if (y2 >= 200)
    {
        y2 = 50;
    }
    if (keyIsDown(w))
    {
        y2 -= 10;
    } 
    else if (keyIsDown(s))
    {
        y2 += 10;
    }
    if (keyIsDown(a))
    {
        x2 -= 10;
    } 
    else if (keyIsDown(d))
    {
        x2 += 10;
    }

    changeDiameter();
}

function changeDiameter()
{
    if (diameter < 100)
    {
        diameter += 2;
    } 
    else if (diameter >= 100)
    {
        diameter = 24;
    }
}

function mousePressed()
{
    mousex = mouseX;
    mousey = mouseY;
}

function calculateSum(number1, number2, x, y)
{
    number1 = number1 + number2;
    number2 = number1 + number2;
    sum = number1 + number2;
    text("Sum:" + sum, x, y);
}

function CircleSquare()
{
    circle(50,50,35);
    square(350,70,24);
}

function CircleSquareP(circleX, circleY, diameter, squareX, squareY, sideLength)
{
    circle(circleX, circleY, diameter);
    square(squareX, squareY, sideLength);
}

function getRandomNumber(number)
{
    return Math.floor(Math.random() * number) + 10;
}

function ConcentricCircle
    (
    x, 
    y, 
    outer_diameter, 
    inner_diameter, 
    outer_red, 
    outer_green, 
    outer_blue, 
    inner_red, 
    inner_green, 
    inner_blue
    )
{
    fill(outer_red, outer_green, outer_blue);
    circle(x, y, outer_diameter);
    fill(inner_red, inner_green, inner_blue);
    circle(x, y, inner_diameter);
}