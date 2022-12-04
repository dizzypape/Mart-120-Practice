var myXs = [];
var myYs = [];
var myDiameters = [];

function setup()
{
    createCanvas(800,600);
    var x = 50;
    var y = 50;
    var diameter = 25;

    for(var i = 0; i < 10; i++)
    {
        myXs[i] = x;
        myYs[i] = y;
        myDiameters[i] = diameter;
        x += 50;
        y += 50;
        diameter += 25;
    }

}

function draw()
{
  for(var i = 0; i < myXs.length; i++)
  {
    circle(myXs[i],myYs[i],myDiameters[i]);
  }
}