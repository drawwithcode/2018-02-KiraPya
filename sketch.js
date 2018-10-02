function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(0);

}


  function draw() {
  	   var x=200 * cos(frameCount/100 * 4);
  	   var y=200 * sin(frameCount/300 * 4);

  	   translate(width/2,height/2);
  	   var col=lerpColor(color(201,200,20),color(100,170,255), frameCount/930);
  	   stroke(col);
       rotate(frameCount/50);

  	   line(x,y,200,200);


  	  if(frameCount == 930){
  	    noLoop();
  	  }


}
