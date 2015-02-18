var position=0, test, level, question,choice, choices, optA, optB, optC, correctAns=0;
var questions=[
  ["Which of the following is a prime number ?", "9", "4", "2", "C"],
  ["What is the largest 4 digit number exactly divisible by 88?", "9944", "9988", "9990", "A"],
  ["All prime numbers are odd numbers", "TRUE", "FALSE", "CANT SAY", "A"],
  ["(719 × 719 + 347 × 347 − 719 × 347) / (719 × 719 × 719 + 347 × 347 × 347)=?" , "1/372", "25/133", "1/1066", "C"],
  [],
  [],
  [],
  [],
  [],
  [],
  [],


  
];
function g(x){
	return document.getElementById(x);
	}
function showQuestion(){
	test=g("test");
	if(position >= questions.length){
	 test.innerHTML= "<h2> You got " + correctAns + "of " + questions.length + " correct </h2>";
    test.innerHTML+="Add question"
	test.innerHTML+="<input type= text name='ab'> <br>"
    test.innerHTML+= "<button onclick= 'checkAnswer()' style='height:50px; width:250px'>Submit Question</button>";
		g("level").innerHTML="Quiz completed";
    addQuestion();
	   	position=0;
		correctAns=0;
		return false;
	}
	g("level").innerHTML= "Question" + (position+1) + "of " + questions.length;
	question=questions[position][0];
	optA=questions[position][1];
	optB=questions[position][2];
	optC=questions[position][3];
	
	test.innerHTML= "<h3 align='center'>" + question + "</h3>";
	test.innerHTML+= "<input  type= 'radio' name= 'choices' value='A' style='vertical-align: middle'  > "+optA+"<br>";
	test.innerHTML+= "<input type= 'radio' name= 'choices' value='B' > "+optB+"<br>";
	test.innerHTML+= "<input type= 'radio' name= 'choices' value='C' > "+optC+"<br><br>";
	test.innerHTML+= "<button onclick= 'checkAnswer()' style='height:50px; width:250px'>Submit Answer</button>";
}
    function addQuestion(){
    var ab= document.activeElementByName("ab");
        questions.push("ab");
    }
	function checkAnswer(){
	choices= document.getElementsByName("choices");
	for (var i=0; i< choices.length; i++){
		if(choices[i].checked){
			choice= choices[i].value;
		}
	}
		if(choice == questions[position][4]){
			correctAns++;
		}
	position++;
	showQuestion();
	}
	window.addEventListener("load", showQuestion, false);