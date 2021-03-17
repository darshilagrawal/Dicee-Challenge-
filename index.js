var randomNumber1=Math.floor((Math.random()*6))+1;
var randomNumber2=Math.floor((Math.random()*6))+1;
let imgString1="images/dice"+randomNumber1+".png";
let imgString2="images/dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src",imgString1);
document.querySelector(".img2").setAttribute("src",imgString2);

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="PLAYER 1 WON";
}else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="PLAYER 2 WON";
}else{
  document.querySelector("h1").innerHTML="DRAW";
}
