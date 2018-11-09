const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;

let myPoint = new Point(Random(0,canvas.width),Random(0,canvas.height),20,"blue");
let myPoint2 = new Point(Random(0,canvas.width),Random(0,canvas.height),20,"blue");
let myPoint3 = new Point(Random(0,canvas.width),Random(0,canvas.height),20,"blue");



myPoint.drag();
myPoint2.drag();
myPoint3.drag();

function animate(){
  requestAnimationFrame(animate);
    context.clearRect( 0, 0, canvas.width , canvas.height );

  myPoint.draw(context);
    myPoint2.draw(context);
      myPoint3.draw(context);

context.beginPath();
context.strokeStyle = "gray";
context.fillStyle="rgba(255,255,0,0.2)"

context.moveTo(myPoint.x,myPoint.y);
// context.moveTo(myPoint2.x,myPoint2.y);

context.lineTo(myPoint2.x,myPoint2.y);
context.lineTo(myPoint3.x,myPoint3.y);

context.fill();
context.closePath();
context.stroke();



  myPoints[i].draw(context);
  myPoints[i].print(context,i);

}

animate();

function Random(min,max){
  return Math.floor(Math.random()*(max-min))+min;
}
