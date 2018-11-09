const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let A = new Point(550,108,25,"red");
let B = new Point(800,300,25,"red");
let C = new Point(600,500,25,"red");

let S = new Point(0,0,5,"white");
let U = new Point(0,0,5,"white");
let X = new Point(0,0,5,"white");
let Z = new Point(0,0,5, "purple");

let l = new LinearFunction(1,1);
let l2 = new LinearFunction(1,1);
let l3 = new LinearFunction(1,1);


let m = new LinearFunction(1,1);
let n = new LinearFunction(1,1);
let o = new LinearFunction(1,1);
let circle1 = new LinearFunction(1,1);

A.drag();
B.drag();
C.drag();


function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);


  l.slope = -1/m.slope;
  l.intercept = A.y - l.slope * A.x;
  l2.slope = -1/n.slope;
  l2.intercept = C.y - l2.slope * C.x;
  l3.slope = -1/o.slope;
  l3.intercept = B.y - l3.slope * B.x;


  S.x = l.intersection(m).x;
  S.y = l.intersection(m).y;
  U.x = l2.intersection(n).x;
  U.y = l2.intersection(n).y;
  X.x = l3.intersection(o).x;
  X.y = l3.intersection(o).y;
  Z.x = l.intersection(l2).x;
  Z.y = l.intersection(l2).y;

  n.letTwoPointsDefineLine(A,B);
  o.letTwoPointsDefineLine(A,C);
  m.letTwoPointsDefineLine(B,C);

  l.draw(context, 0.4);
  l2.draw(context, 0.4);
  l3.draw(context, 0.4);
  m.draw(context, 1);
  n.draw(context, 1);
  o.draw(context, 1);

  A.draw(context, 1);
  B.draw(context, 1);
  C.draw(context, 1);

  S.draw(context, 1);
  U.draw(context, 1);
  X.draw(context, 1);
  Z.draw(context, 1);

}

animate();
