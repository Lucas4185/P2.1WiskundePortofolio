const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let A = new Point(100,100,15,"red");
let B = new Point(600,200,15,"blue");
let C = new Point(300,150,15,"yellow");
let D = new Point(900,400,15,"green");

let S = new Point(50,0,10,"white");

let f = new LinearFunction(10,100);
let m = new LinearFunction(10,100);

A.drag();
B.drag();
C.drag();
D.drag();

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);

  f.letTwoPointsDefineLine(A,B);
  m.letTwoPointsDefineLine(C,D);


  f.draw(context);
  m.draw(context);

  S.x = f.intersection(m).x;
  S.y = f.intersection(m).y;

  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);
  S.draw(context);

}

animate();
