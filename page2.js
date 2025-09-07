// Mảng câu hỏi
let arr = [
  {
    id: 1,
    question: "Who ... you?",
    answers: { a: "do", b: "are", c: "is", d: "did" },
    correct: "b"
  },
  {
    id: 2,
    question: "What ... your name?",
    answers: { a: "is", b: "are", c: "do", d: "does" },
    correct: "a"
  },
  {
    id: 3,
    question: "Where ... you live?",
    answers: { a: "do", b: "are", c: "is", d: "did" },
    correct: "a"
  }
];

let currentIndex = 0;
let point = 0;

// Hàm load câu hỏi theo index
function loadQuestion(index) {
  currentIndex = index; // lưu lại câu hiện tại
  let q = arr[index];
  if (!q) return;

  document.getElementById("question").innerHTML = q.question;
  document.getElementById("a").innerHTML = q.answers.a;
  document.getElementById("b").innerHTML = q.answers.b;
  document.getElementById("c").innerHTML = q.answers.c;
  document.getElementById("d").innerHTML = q.answers.d;

  // reset radio
  document.querySelectorAll('input[name="answer"]').forEach(el => el.checked = false);
  document.getElementById("trueorfalse").innerHTML = "";
}

// Hàm người dùng bấm kiểm tra
function guidapan() {
  let selected;
  if (document.getElementById("answera").checked) selected = "a";
  if (document.getElementById("answerb").checked) selected = "b";
  if (document.getElementById("answerc").checked) selected = "c";
  if (document.getElementById("answerd").checked) selected = "d";

  if (!selected) {
    alert("Bạn chưa chọn đáp án!");
    return;
  }

  let q = arr[currentIndex];
  if (selected === q.correct) {
    point++;
    document.getElementById("trueorfalse").innerHTML = "Đúng ✅";
  } else {
    document.getElementById("trueorfalse").innerHTML = "Sai ❌";
  }
  document.getElementById("point").innerHTML = "Điểm: " + point;
}

// Khi bấm nút “Câu hỏi 1/2/3…”
document.getElementById("question1").onclick = () => loadQuestion(0);
document.getElementById("question2").onclick = () => loadQuestion(1);
document.getElementById("question3").onclick = () => loadQuestion(2);
// ... thêm cho các nút còn lại nếu có
