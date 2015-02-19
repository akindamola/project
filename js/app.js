var position = 0;
var test = 0;
var level = 0;
var question;
var choice = 0;
var choices = 0;
var optA = 0;
var optB = 0;
var optC = 0;
var correctAns = 0;
var questions = [
    ["The intersecting lines drawn on maps and globes are", "Longitude", "Latitude", "Geographic grids", "C"],
    ["The largest production of mica in Asia is from", "Mynammar", "India", "Malaysia", "B"],
    ["The last major glacial period began about 2,000,000 years before present and is commonly known as", "Pleistocene age", "Paleocene age", "Holocene age", "A"],
    ["Which of the following is a prime number ?", "9", "4", "2", "C"],
    ["What is the largest 4 digit number exactly divisible by 88?", "9944", "9988", "9990", "A"],
    ["All prime numbers are odd numbers?", "TRUE", "FALSE", "CANT SAY", "A"],
    ["(719 × 719 + 347 × 347 − 719 × 347) / (719 × 719 × 719 + 347 × 347 × 347)=?", "1/372", "25/133", "1/1066", "C"],
    ["Look at this series: 2, 1, (1/2), (1/4), ... What number should come next?", "(1/3)", "(1/8)", "(2/8)", "B"],
    ["Look at this series: 7, 10, 8, 11, 9, 12, ... What number should come next?", "10", "15", "16", "A"],
    ["Which of the following words best expresses the meaning of the word CORPULENT?", "Lean", "Emaciated", "Obese", "C"],
    ["Which of the following words best expresses the meaning of the word AUGUST?", "Common", "Ridiculous", "Dignified", "C"],
    ["Which of the following words best expresses the meaning of the word CANNY?", "Clever", "Stout", "Obstinate", "A"],
    ["3 pumps, working 8 hours a day, can empty a tank in 2 days. How many hours a day must 4 pumps work to empty the tank in 1 day? ", "12", "10", "15", "A"],
    ["Brass gets discoloured in air because of the presence of which of the following gases in air?", "Oxygen", "Hydrogen Sulphide", "Carbon dioxide", "B"],
    ["Which of the following is a non metal that remains liquid at room temperature?", "Phosphorus", "Bromine", "Chlorine", "B"],
    ["Which of the following is used in pencils?", "Graphite", "Charcoal", "Lead", "A"],
    ["Which of the following metals is a liquid at room temperature?", "Sodium", "Mercury", "Calcium", "B"]
];


function callItem(x) {
    return document.getElementById(x);
}

function showQuestion() {
    test = callItem("test");
    if (position >= questions.length) {

        test.innerHTML = "<h9 ><strong> You got " + correctAns + " of " + questions.length + " correct </strong> </h9>";
        callItem("level").innerHTML = "Quiz completed";
        position = 0;
        correctAns = 0;
        return false;
    }
    callItem("level").innerHTML = "Question " + (position + 1) + " of " + questions.length;
    question = questions[position][0];
    optA = questions[position][1];
    optB = questions[position][2];
    optC = questions[position][3];

    test.innerHTML = "<h3 align='center'>" + question + "</h3>";
    test.innerHTML += "<input  type= 'radio' name= 'choices' value='A' style='vertical-align: middle'  > " + optA + "<br>";
    test.innerHTML += "<input type= 'radio' name= 'choices' value='B' > " + optB + "<br>";
    test.innerHTML += "<input type= 'radio' name= 'choices' value='C' > " + optC + "<br><br>";
    test.innerHTML += "<button onclick= 'checkAnswer()' style='height:50px; width:300px'>Submit Answer</button>";
}

function checkAnswer() {
    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
    if (choice == questions[position][4]) {
        correctAns++;
    }
    position++;
    showQuestion();
}
window.addEventListener("load", showQuestion, false);