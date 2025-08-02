let point = 0;
let currentQuestion = 0;
let username = "";
document.getElementById("point").innerHTML = "Điểm: " + point;
document.getElementById("trueorfalse").innerHTML = "Trình độ A2";

function setname() {
  username = document.getElementById("username").value;
  if(username === "") {
    document.getElementById("ketqua").innerHTML = "Vui lòng đặt tên!";
  } else {
  document.getElementById("login").style.display = "none";
  document.getElementById("nameuser").innerHTML = "Hello " + username ;
  }
}

function check(answer) {
  if(answer) {
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
  
  document.getElementById("a").innerHTML = "a.was";
  document.getElementById("b").innerHTML = "b.is";
  document.getElementById("c").innerHTML = "c.has";
  document.getElementById("d").innerHTML = "d.have";

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

function question4() {
  currentQuestion = 4;
  document.getElementById("question").innerHTML = "Câu 4: If you come ...,don't forget to get off at the stop outside the bank.";

  document.getElementById("a").innerHTML = "a.by foot";
  document.getElementById("b").innerHTML = "b.by plane";
  document.getElementById("c").innerHTML = "c.by boat";
  document.getElementById("d").innerHTML = "d.by bus";

  document.getElementById("question4").style.backgroundColor = "lightblue";
}

function question5() {
  currentQuestion = 5;
  document.getElementById("question").innerHTML = "Câu 5: If I _____ enough money, I would buy a new car, but unfortunately, I can't afford it right now.";
  
  document.getElementById("a").innerHTML = "a.have";
  document.getElementById("b").innerHTML = "b.had";
  document.getElementById("c").innerHTML = "c.will have";
  document.getElementById("d").innerHTML = "d.would have";

   document.getElementById("question5").style.backgroundColor = "lightblue";
}

function question6() {
  currentQuestion = 6;
  document.getElementById("question").innerHTML = "Câu 6: She's allergic _____ cats";
  
  document.getElementById("a").innerHTML = "a.at";
  document.getElementById("b").innerHTML = "b.for";
  document.getElementById("c").innerHTML = "c.to";
  document.getElementById("d").innerHTML = "d.with";

  document.getElementById("question6").style.backgroundColor = "lightblue";
}

function question7() {
  currentQuestion = 7;
  document.getElementById("question").innerHTML = "Câu 7: What is the total after tax she has to pay?[Listening Question]";
  
  document.getElementById("a").innerHTML = "a.11.13$";
  document.getElementById("b").innerHTML = "b.11.32$";
  document.getElementById("c").innerHTML = "c.11.30$";
  document.getElementById("d").innerHTML = "d.11.3$";

  document.getElementById("question7").style.backgroundColor = "pink";
  const audio = document.getElementById("audio");
  audio.style.opacity = "1";
  audio.style.display = "block";
}

function question8() {
  currentQuestion = 8;
  document.getElementById("question").innerHTML = "Câu 8: How many milk options do they have?[Listening Question]";
  
  document.getElementById("a").innerHTML = "a.5";
  document.getElementById("b").innerHTML = "b.6";
  document.getElementById("c").innerHTML = "c.7";
  document.getElementById("d").innerHTML = "d.8";

  document.getElementById("question8").style.backgroundColor = "pink";
  const audio = document.getElementById("audio");
  audio.style.opacity = "1";
  audio.style.display = "block";
}

function question9() {
  currentQuestion = 9;
  document.getElementById("question").innerHTML = "Câu 8: Is she trying to gain weight?[Listening Question]";
   
  document.getElementById("a").innerHTML = "a.Yes";
  document.getElementById("b").innerHTML = "b.No";
  document.getElementById("c").innerHTML = "";
  document.getElementById("d").innerHTML = "";
  document.getElementById("question9").style.backgroundColor = "pink";
  const audio = document.getElementById("audio");
  audio.style.opacity = "1";
  audio.style.display = "block";
}

function changecolor() {

  document.getElementById("question").innerHTML = "";
  document.getElementById("a").innerHTML = "";
  document.getElementById("b").innerHTML = "";
  document.getElementById("c").innerHTML = "";
  document.getElementById("d").innerHTML = "";  
}

function guidapan() {  
  
  let answer;
  
  if (currentQuestion === 1) {
    answer = document.getElementById("answera").checked;
  } else if (currentQuestion === 2) {
    answer = document.getElementById("answerd").checked;
  } else if(currentQuestion === 3) {
    answer = document.getElementById("answerc").checked;
  } else if(currentQuestion === 4) {
    answer = document.getElementById("answerd").checked;
  } else if(currentQuestion === 5)  {
    answer = document.getElementById("answerb").checked;
  } else if(currentQuestion === 6) {
    answer = document.getElementById("answerc").checked;
  } else if(currentQuestion === 7) {
    answer = document.getElementById("answera").checked;
  } else if(currentQuestion === 8) {
    answer = document.getElementById("answerb").checked;
  } else if(currentQuestion === 9) {
    answer = document.getElementById("answerb").checked;
  }
  
  check(answer);
}
