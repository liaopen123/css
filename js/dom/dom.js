function getEleById(ele){
    document.getElementById(ele).innerText = "呵呵，你已被改变";
}
function getElementsbyTag(tagName){
   var eles =  document.getElementsByTagName(tagName);
   console.log(eles);
   for(var i=0;i<eles.length;i++){
       console.log(eles[i]);
       eles[i].innerText = "所有的"+tagName+"都被我修改了";
   }
}

function findElementsInEle(id,tagName){
    var ele = document.getElementById(id);
  var eles =   ele.getElementsByTagName(tagName);  //这个就不是document了 是ele
    for(var i=0;i<eles.length;i++){
        console.log(eles[i]);
        eles[i].innerText = "小花生被修改";
    }
}

function getEleByClassName(className){
   var eles =  document.getElementsByClassName(className);
   for(var i=0;i<eles.length;i++){
    console.log(eles[i]);
    eles[i].innerText = "盒子被我修改";
}
}

function getEleByClassName(className){
    var eles =  document.getElementsByClassName(className);
    for(var i=0;i<eles.length;i++){
     console.log(eles[i]);
     eles[i].innerText = "盒子被我修改";
 }
 }

 function querySelectorT(selector){
     
    var firstEle =  document.querySelector(selector);
    firstEle.innerText = "通过选择器找到盒子   被我修改 只能找到第一个";

 }


 function querySelectorAll(selector){
    var eles =  document.querySelectorAll(selector);    
    console.log(eles);
    
    for(var i=0;i<eles.length;i++){
        console.log(eles[i]);
        eles[i].innerText ="通过选择器找到盒子   被我修改 包括所有的.box";
    }

 }

 function getBody(){
    var body =  document.body;
 }

 function getHTML(){
   var html =  document.documentElement;
 }