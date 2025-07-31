let point = 0;
let currentQuestion = 0;

document.getElementById("username").innerHTML = "Hello Bao";
document.getElementById("point").innerHTML = "Điểm: " + point;
document.getElementById("trueorfalse").innerHTML = "Trình độ A2";

function check(anwser) {
  if(anwser) {
    point++;
    document.getElementById("trueorfalse").innerHTML = "Đúng";
    document.getElementById("point").innerHTML = "Điểm: " + point;
    return;
  } 
  document.getElementById("trueorfalse").innerHTML = "Sai";
}

function question1() {
  currentQuestion = 1;
  document.getElementById("question").innerHTML = "Câu 1: It ... good yesterday, but today it's raining.";
  
  document.getElementById("a").innerHTML = "a.Was";
  document.getElementById("b").innerHTML = "b.Is";
  document.getElementById("c").innerHTML = "c.Has";
  document.getElementById("d").innerHTML = "d.Have";

  document.getElementById("question1").style.backgroundColor = "yellowgreen";
}

function question2() {
  currentQuestion = 2;
  document.getElementById("question").innerHTML = "Câu 2: ... he doing his homework?";
  
  document.getElementById("a").innerHTML = "a.Did";
  document.getElementById("b").innerHTML = "b.Had";
  document.getElementById("c").innerHTML = "c.Have";
  document.getElementById("d").innerHTML = "d.Is";

  document.getElementById("question2").style.backgroundColor = "yellowgreen";
}

function question3() {
  currentQuestion = 3;
  document.getElementById("question").innerHTML = "Câu 3: Have you ... been to Moscow?";
  
  document.getElementById("a").innerHTML = "a.never";
  document.getElementById("b").innerHTML = "b.yet";
  document.getElementById("c").innerHTML = "c.ever";
  document.getElementById("d").innerHTML = "d.for";

  document.getElementById("question3").style.backgroundColor = "yellowgreen";
}



function changecolor() {

  document.getElementById("question").innerHTML = "";
  document.getElementById("a").innerHTML = "";
  document.getElementById("b").innerHTML = "";
  document.getElementById("c").innerHTML = "";
  document.getElementById("d").innerHTML = "";  
}

function guidapan() {  
  let anwser;
  
  if (currentQuestion === 1) {
    document.getElementById("trueorfalse").innerHTML = "Trình độ A2";
    anwser = document.getElementById("anwsera").checked;
  } else if (currentQuestion === 2) {
    document.getElementById("trueorfalse").innerHTML = "Trình độ A2";
    anwser = document.getElementById("anwserd").checked;
  } else if(currentQuestion === 3) {
    document.getElementById("trueorfalse").innerHTML = "Trình độ A2";
    anwser = document.getElementById("anwserc").checked;
  }
  
  check(anwser);
}