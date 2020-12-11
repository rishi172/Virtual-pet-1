//Create variables here
var dog,happyDog,database,foodS,foodStock;
var dogImg,dogImg1;
function preload()
{
  //load images here
   dogImg = loadImage("images/dogImg.png");
   dogImg1 = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(800, 700);
  dog = createSprite(250,250,50,50);
  dog.addImage(dogImg)
    database = firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);
if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImg1);
  readStock();
  writeStock();
}
  drawSprites();
  text(foodStock,20,20);

  //add styles here

}
function readStock(data){
  foodS=data.val();
}
 function writeStock(x){
   if(x<=0){
     x=0
   }else{
     x=x-1
   }
   database.ref('/').update({
     Food:x
   })
 }


