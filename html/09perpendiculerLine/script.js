const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let A = new Point(300,500,15,"red");
let B = new Point(600,400,15,"blue");
let C = new Point(400,250,15,"yellow");
let D = new Point(500,400,15,"green");

let S = new Point(0,0,10,"white");

let f = new LinearFunction(10,100);
let m = new LinearFunction(10,100);


A.drag();
B.drag();
C.drag();
D.drag();

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);

  m.slope = -1/f.slope;

  f.letTwoPointsDefineLine(A,B);
  m.intercept = C.y - m.slope*C.x;






  f.draw(context);
  m.draw(context);


  // S.x = m.intersection(f).x;
  // S.y = m.intersection(f).y;
   S.x = f.intersection(m).x;
   S.y = f.intersection(m).y;
   // D.x = f.intersection(m).x;
   // D.y = f.intersection(m).y;

  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);
  S.draw(context);


}

animate();
