var name1=["family book","Nitashaa Rana","Diwakar Rana","Nalin Rana"];
var imageone=["https://i.postimg.cc/MKdhy06Z/family.jpg","unnamed.jpg","unnamed (1).jpg","WIN_20201203_10_40_39_Pro.jpg"];
var i=0;
function update(){
if(i==4){
i=0;
}
document.getElementById("imageuno").src=imageone[i];
document.getElementById("names").innerHTML=name1[i];
i++;
}