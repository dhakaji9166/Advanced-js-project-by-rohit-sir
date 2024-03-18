// const questions = [
//   "2+2", "2*2*2-8", "3+3+3", "4*4/4"
// ];

const questions = [
  { q: "2+2", opt: [1, 2, 3, 4], correct: 4 },

  { q: "2*2*2-8", opt: [8, 0, -2, 1], correct: 0 },

  { q: "3+3+3", opt: [0, 333, 6, 9], correct: 9 },

  { q: "4*4/4", opt: [4, 0, 8, 16], correct: 4 },


  {
    q: '<img class = "photo" src="img/ram mandir.jpg"/> <br> which monument in this ?',
    opt: ["Taj Mahal", "Red Fort", "Qutub minar", "Ram mandir"],
    correct: "Ram  mandir",
    hasImages: true,
  }
];

const para = document.querySelector(".question");
const optionsPara = document.querySelectorAll("#options p");
const timerDiv = document.querySelector(".timer");
const value = [];
const randomorder = []
const temp = []
const result = document.querySelector("#quiz h1")
const diss = document.querySelector("#none")

for (let i = 0; i < questions.length; i++) {
  randomorder.push(getARandomValue());

}
function getARandomValue() {
  const randomvalue = Math.floor(Math.random() * questions.length)
  if (temp.includes(randomvalue)) return getARandomValue();
  else {
    temp.push(randomvalue)
    return randomvalue;
  }
}
// console.log(randomorder)


const userAnswers = [];

let diduseranswer = false;

let i = 0;
let timer = 5;

printQ();
timerDiv.innerHTML = timer;

const girraj = setInterval(() => {
  if (timer === 1) {
    if (diduseranswer === false) userAnswers.push("NA")
    printQ();
    timer = 5;

    timerDiv.innerHTML = timer;
  } else {
    timer--;
    timerDiv.innerHTML = timer;
  }
}, 1000);

function printQ() {
  enableOptions();
  diduseranswer = false;
  if (i === questions.length) {
    clearInterval(girraj);

    //COMPARE USER ANSWERS WITH ACTUAL ANSWERS
    compareUserAnswers();
  } else {
    para.innerHTML = questions[randomorder[i]].q;
    optionsPara.forEach((p, index) => {
      p.innerHTML = questions[randomorder[i]].opt[index];
    });
    i++;
  }
}

optionsPara.forEach((p, index) => {

  p.addEventListener("click", () => {
    userAnswers.push(p.innerHTML);

    console.log(userAnswers);

    // NOW THAT USER HAS MADE THEIR CHOICE
    // DISABLE ALL THE OPTIONS TO PREVENT DOUBLE CLICKING

    diduseranswer = true;
    disableOptions();
  });
});





function disableOptions() {
  optionsPara.forEach((p) => {
    p.style.pointerEvents = "none";
  });
}

function enableOptions() {
  optionsPara.forEach((p) => {
    p.style.pointerEvents = "all";
  });
}

function compareUserAnswers() {
  let score = 0;
  userAnswers.forEach((userA, index) => {
    if (questions[randomorder[index]].hasImages === true) {
      if (userA !== "NA" && (userA) === questions[randomorder[index]].correct) {
        score++;
      } else if (userA !== "NA" && Number(userA) === questions[randomorder[index]].correct) {
        score++;
      }
    }
  })
  diss.style.display = "none";
  result.innerHTML = ("Your Score is:" + score);

}

// function compareUserAnswers() {
//   let score = 0;
//   userAnswers.forEach((userA, index) => {
//     if (questions[randomorder[index]].hasImages === false) {
//       userA = Number(userA);
//       score ++;
//     }
//     if (userA === "NA" || userA === questions[randomorder[index]].correct) {
//       score++;
//     }
//   });

//   diss.style.display = "none";
//   result.innerHTML = "Your Score is: " + score;
// }
