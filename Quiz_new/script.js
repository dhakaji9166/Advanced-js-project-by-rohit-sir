const questions = [
    { q: "2+2", opt: [1, 2, 3, 4], correct: 4 },
  
    { q: "2*2*2-8", opt: [8, 0, -2, 1], correct: 0 },
  
    { q: "3+3+3", opt: [0, 333, 6, 9], correct: 9 },
  
    { q: "4*4/4", opt: [4, 0, 8, 16], correct: 4 },
  ];

  const para = document.querySelector('.question');
  const answer = document.querySelectorAll('#options p')

  para.innerHTML= questions[0].q;

  answer.forEach( ( ques ,index) =>{
    ques.innerHTML= questions[0].opt[index];
    // console.log(ques.opt);
  })
