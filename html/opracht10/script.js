const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let A = new Point(200,499,25,"red");
let B = new Point(900,600,25,"blue");
let C = new Point(600,250,25,"yellow");
let D = new Point(700,400,25,"green");

let S = new Point(0,0,5,"white");
let T = new Point(0,0,5,"black");
let U = new Point(0,0,5,"black");

let f = new LinearFunction(10,100);
let m = new LinearFunction(10,100);
let e = new LinearFunction(10,100);
let a = new LinearFunction(10,100);
let b = new LinearFunction(10,100);
let c = new LinearFunction(10,100);
let d = new LinearFunction(10,100);

A.drag();
B.drag();
C.drag();
D.drag();

function animate(){
  context.clearRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(animate);



  f.letTwoPointsDefineLine(A,B);
  e.letTwoPointsDefineLine(A,C);
  a.letTwoPointsDefineLine(B,C);
  c.letTwoPointsDefineLine(S,C);
  m.letTwoPointsDefineLine(T,B);
  d.letTwoPointsDefineLine(U,A);
  //m.intercept = C.y - m.slope*C.x;
  //e.intercept = D.y - m.slope*D.x;





  f.draw(context);
  m.draw(context);
  e.draw(context);
  a.draw(context);

  c.draw(context);
  d.draw(context);
   //S.x = m.intersection(f).x;
   //S.y = m.intersection(f).y;
   S.x = (A.x + B.x)/2;
   S.y = (A.y + B.y)/2;
   T.x = (A.x + C.x)/2;
   T.y = (A.y + C.y)/2;
   U.x = (B.x + C.x)/2;
   U.y = (B.y + C.y)/2;
   D.x = (C.x + S.x)/6 + (U.x + A.x)/6  + (T.x + B.x)/6
   D.y = (C.y + S.y)/6 + (U.y + A.y)/6  + (T.y + B.y)/6

   // D.x = f.intersection(m).x;
   // D.y = f.intersection(m).y;

  A.draw(context);
  B.draw(context);
  C.draw(context);
  D.draw(context);
  S.draw(context);
  T.draw(context);
  U.draw(context);


}

animate();
