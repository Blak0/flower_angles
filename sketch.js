var c; //space between next petals
var a; //incrementing angle value
var angle; //calculated angle for each individual petal from formula: angle = n * a
var num_of_petals; //how much petals to calculate

function setup() {
    createCanvas(3100, 1430);
    angleMode(DEGREES);
    colorMode(HSB, 360); // HUE (TYPE OF COLOR), SATURATION, BRIGHTNESS
    a = 1
}

function draw() {
    background(70, 50, 50);

    c = 8;
    n = 1;
    num_of_petals = 10000;

    for (var n = 1; n < num_of_petals; n++) {
        angle = n * a;
        r = c * sqrt(n);

        //calculate x and y of each petal using:
        //cos(x) = x/r  ->  x = r * cos(x)
        //sin(x) = y/r  ->  y = r * sin(x)
        x = r * cos(angle);
        y = r * sin(angle);

        //funny color equations:
        /*
        n % 360
        (r*n) % 360
        angle % 360
        
        */
        fill(angle % 360, 360, 360, 360); //set color
        noStroke()
        push();
        translate(width / 2, height / 2);
        ellipse(x, y, 10);
        pop();
    }

    //mrygajacy tekst
    //textSize((a%5) * 10 + 50);

    textSize(50);
    fill(255)

    var txt = a + ' deg.\n' + (a / 180).toFixed(2) + 'π rad.'
    text(txt, 50, 100)
    a += 1;
}