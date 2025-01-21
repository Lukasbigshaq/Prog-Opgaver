let amount = 1 
let catagory = 12 
let difficulty = "medium"
let type = 'boolean'

let apiUrl = `https://opentdb.com/api.php?amount=${amount}&category=${catagory}&difficulty${difficulty}&type=${type}`

function setup() {
  noCanvas() // p5.js setup without canvas
  fetchQuizQuestion()
}

async function fetchQuizQuestion() {
  // først beder vi serveren om at få lov at hente data 
  let result = await fetch(apiUrl)
  //hvis response objekter er ok 
  if(result.ok){
    let quizQuestions = await result.json()
    //console.log(quizQuestions)
    let questions = quizQuestions.results[0]
    showQuestion(question)
  }else{
    console.log('der var en fejli i hentingen af data')
  }
  
}
function showQuestion(q){
  console.log(q)
  select('#questionDiv').html(q.question)
  showAnswers(q)
}

let trueButton
let falseButton
function showAnswers(q){
   trueButton = createButton('True')
   falseButton = createButton('False')

  trueButton.mousePressed( ()=> checkAnswer(q,"True") )
  trueButton.mousePressed( ()=> checkAnswer(q,) )

  select('main').child(trueButton)
  select('main').child(falseButton)
}

function cheackAnswer (q,answer){
  if(q.correct_anwer == "True" && answer == "True"){
    trueButton.addClass('correct')
    falseButton.addClass('wrong')
  }else{
    trueButton.addClass('correct')
    falseButton.addClass('wrong')
  }

}



