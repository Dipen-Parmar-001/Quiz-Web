let timer = document.querySelector(".Timer-box");
let counter = document.querySelector(".quiz-count");
let questionBox = document.querySelector(".question");
let nextBtn = document.querySelector(".next");
let previousBtn = document.querySelector(".previous");
let playBtn = document.querySelector(".play");
let allOptions = document.querySelectorAll(".options"); // ✅ fixed here
let totalTime = 90;
let currentIndex = 0;

function formatTime(seconds) {
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function startTimer() {
  let countdown = setInterval(() => {
    timer.textContent = formatTime(totalTime);
    totalTime--;

    if (totalTime < 0) {
      clearInterval(countdown);
      timer.textContent = "Time's up!";
    }
  }, 1000);
}

let quizData = [
  {
    question: "What Is Html?",
    options: ["Programing", "Markup Language", "Styling", "Hardware"],
    correct: 1
  },
  {
    question: "What Does CSS Do?",
    options: ["Add Logic", "Style Page", "Stores Data", "Sends Email"],
    correct: 1
  },
  {
    question: "What Does JavaScript Do?",
    options: ["Styling Tool", "Markup", "Programing", "Hosting Service"],
    correct: 2
  }

];

function loadData(index) {
  questionBox.textContent = quizData[index].question;

  allOptions.forEach((element, i) => {
    element.textContent = quizData[index].options[i];
    element.style.backgroundColor = "#f9f9f9";
    element.style.color = "black";
    element.style.pointerEvents = "auto"; // ✅ reset click
    element.onclick = () => checkAnswer(i);
  });

  counter.textContent = `${index + 1} of ${quizData.length}`;
}

function checkAnswer(clickedIndex) {
  const correctAns = quizData[currentIndex].correct;

  allOptions.forEach((opt, i) => {
    opt.style.pointerEvents = "none";
    if (i === correctAns) {
      opt.style.backgroundColor = "green";
      opt.style.color = "white";
    } else if (i === clickedIndex) {
      opt.style.backgroundColor = "red";
      opt.style.color = "white";
    }
  });
}

function updateIndex() {
  nextBtn.addEventListener("click", () => {
    if (currentIndex < quizData.length-1) {
      currentIndex++;
      loadData(currentIndex);
    } else {
      showEndScreen()
    }
  });
}

function decIndex() {
  previousBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      loadData(currentIndex);
    }
  });
}

function showEndScreen() {
  timer.textContent = "Quiz Finished!";
  counter.innerText = "0 of 0";
  questionBox.style.display = "none";

  allOptions.forEach((opt) => {
    opt.style.display = "none";
  });

  nextBtn.style.display = "none";
  previousBtn.style.display = "none";

  document.querySelector(".end-screen").style.display = "block";
  playBtn.style.pointerEvents = "auto";
}

// ✅ Start quiz
playBtn.addEventListener("click", () => {
  questionBox.style.display = "block";

  allOptions.forEach((opt) => {
    opt.style.display = "block";
  });

  nextBtn.style.display = "block";
  previousBtn.style.display = "block";

  document.querySelector(".end-screen").style.display = "none";
  
  playBtn.style.pointerEvents = "none";
  currentIndex = 0;
  totalTime = 90;
  startTimer();
  loadData(currentIndex);
});

updateIndex(); // ✅ Call only once
decIndex();    // ✅ Call only once
