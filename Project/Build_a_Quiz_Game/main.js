const questions = [
  {question:"Bố mẹ có 6 người con trai, mỗi người con trai có 1 em gái. Hỏi gia đình có bao nhiêu người?",
  category:"MULTIPLE CHOICE QUESTION",
  choices:["7 người","9 người","14 người"],answer:"9 người"},
  {question:"Từ nào là tính từ dùng để diễn tả thái độ?",
  category:"MULTIPLE CHOICE QUESTION",
  choices:["Bàng quang","Bàn quan","Bàng quan"],answer:"Bàng quan"},
  {
    category: "JavaScript",
    question: "What keyword is used to declare a constant variable in JavaScript?",
    choices: ["var", "let", "const"],
    answer: "const"
  },
  {
    category: "JavaScript",
    question: "Which method converts a JSON string into a JavaScript object?",
    choices: ["JSON.stringify()", "JSON.parse()", "JSON.object()"],
    answer: "JSON.parse()"
  },
  {
    category: "HTML",
    question: "What does HTML stand for?",
    choices: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyperlink and Text Markup Language"
    ],
    answer: "Hyper Text Markup Language"
  },
  {
    category: "CSS",
    question: "Which CSS property is used to change the background color?",
    choices: ["color", "bg-color", "background-color"],
    answer: "background-color"
  },
  {
    category: "General Programming",
    question: "What does an array index typically start at in JavaScript?",
    choices: ["1", "0", "-1"],
    answer: "0"
  }
  ]

  function getRandomQuestion(arr){
    let random = Math.floor(Math.random() * arr.length)
    return arr[random];
  }
  console.log(getRandomQuestion(questions))
  function getRandomComputerChoice(choices){{
    let random = Math.floor(Math.random() * choices.length);
    return choices[random];
  }}
  function getResults(questions,choice){
    if(choice === questions.answer){
      return `The computer's choice is correct!`
    }
    else{
      return `The computer's choice is wrong. The correct answer is: ${questions.answer}`
    }
  }
  const currentQuestion = getRandomQuestion(questions);

  const computerChoice = getRandomComputerChoice(currentQuestion.choices);


console.log("Câu hỏi:", currentQuestion.question);
console.log("Máy chọn:", computerChoice);
console.log("Kết quả:", getResults(currentQuestion, computerChoice));
 