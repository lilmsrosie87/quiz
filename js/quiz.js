// **update jQuery
// $(document).ready(function() {
	// $(".start").onclick(function() {
		// $("h1").hide();
	// });
// });

// questions for quiz (week 10)


// looks like the issue with incorrect answer is the els[i] which only give correct answer as option. This explains why function didn't work before 2/7/2019
var questions = [
	{
		question: "What district did Katnis Everden represent at the 74th Hunger Games?",
		answers: [" District 12 ", " District 8 ", " District 2", " The Capital "],
		correct: "District 12"
	},
	{
		question: "What type of shop did Peeta Mellark's family own?",
		answers:[" apothecary ", " auto ", " bakery ", " farm "],
		correct: "bakery"
	},
	{
		question: "In her first interview with Ceaser Flickerman, what does Katniss say is her favorite thing about the Capital?",
		answers:[" the architecture ", " lamb stew with dried plums ", " everyone is so friendly ", " she doesn't say anything "],
		correct: "lamb stew with dried plums"
	},
	{
		question: "Who is the mentor for District 12 in the 74th Hunger Games?",
		answers:[" Effie Trinket ", " Gayle Thompson ", " President Snow ", " Haymitch Abernathy "],
		correct: "Haymitch Abernathy"
	},
	{
		question: "What three districts were known as 'the careers'?",
		answers: [" District 13 ", "District 3 ", " The Capital ", " District 6 "],
		correct: "District 3"
	},
	{
		question: "What did Peeta through towards Katniss on that rainy day she saw the dandilions?",
		answers: [" bread ", " basketball ", " advice ", " a coin from the Capital "],
		correct: "bread"
	},
	{
		question: "Who is the only person Katnis is certain that she loves?",
		answers: [" Peeta ", " Prim ", " Gayle ", " her mother "],
		correct: "Prim"
	}
	
];


	// this is the attribute used to start quiz (activates onlick() in questionnaire)
	var questionnaire = document.getElementById("questionnaire");

	function startGame() {
		// clears previous HTML
		questionnaire.innerHTML = " ";
		
		// centers questions in quiz
		questionnaire.style.margin = "12% auto";
		
		// load 1st question
		createQuestion();
	};
		
function createQuestion() {
		// clears previous HTML
		questionnaire.innerHTML = "";
		
	// loop
	for (var i = 0; i < 1; i++) {
		
		// elements that will be created when page loads
		var formGroup = document.createElement("div");
		var questionEl = document.createElement("h2");
		
		// attributes that will be added to elements above
		formGroup.className = "formGroup";
		questionEl.id = "questions" + [i];
		
		// will create text for question
		var questionText = document.createTextNode(questions[i].question);
		
		// will add question to element
		questionEl.appendChild(questionText);
		
		// will add element to DOM
		formGroup.appendChild(questionEl);
		
		// will add formGroup to questionForm
		questionnaire.appendChild(formGroup);
		
		// adding questions to be displayed in DOM
	for (var r = 0; r < questions[i].answers.length; r++) {		
		var answerDiv = document.createElement("div");
		var answerEl = document.createElement("input");
		
		//node for text question
	var answerText = document.createTextNode(questions[i].answers[r]);

	answerDiv. appendChild(answerEl);
	answerDiv.appendChild(answerText);

	// adding attributes
	answerDiv.className = "questionWrap";
	answerEl.type = "radio";
	answerEl.name = "radio" + [i];
	answerEl.value = questions[i].answers[r];

	formGroup.appendChild(answerDiv);

	};

};

 // creates start button
var submitBtn  = document.createElement("button");
// add attributes
	submitBtn.className   = "barbieTing";
	submitBtn.textContent = "Submit Answer";
	submitBtn.type        = "button";
	submitBtn.onclick     = submitAnswer;
// submit button is not working
	
	// add button to form group
	questionnaire.appendChild(submitBtn);
};




function submitAnswer() {
	// gets input of all possible answers
	var els = document.getElementsByTagName("input");
	
	// loops through above inputs
	for (var i = 0; i < els.length; i++) {
		// checks radio chosen by user and checks to see if it is correct
		if (els[i].checked && els[i].value.trim() == questions[0].correct.trim()){
		
			// confirm that user got correct answer
			console.log("Correct Answer", els[i]);
			// remove current question from array
			questions.shift();
			
			// find parent and add class of right
			els[i].parentElement.className = "questionWrap right";
	
		// if/else statement added here 10/2
	// } else {
			// console.log('Incorrect answer');
					
	
	
	
	// will check to see if there are any questions left. If 0, then Game Over
	if(questions.length == 0) {
		
		// will clear any HTML
		questionnaire.innerHTML = "";
		
		// updates questionForm style
		questionnaire.textAlign = "center";
		questionnaire.style.margin = "0 auto";
		
		// displayed when quiz is over
		questionnaire.innerHTML = "<h1> Good Job!You've completed the quiz!</h1> + <br> + <img src= 'img/capitolSeal.jpg'>";
		
		// stops function when user wins
		return;
		
	};
	
	// if user gets correct answer and there are more questions, move to next questions
	setTimeout(function() {
		createQuestion();
	}, 2000);
	
	// stops functions if user is correct
	return;
	
		};
	
		
	};
	
	// confirm that user got incorret answer
	 console.log("Incorrect Answer");
	 questions.shift();
	
	// find the parent or input element and add class of wrong
	for (var i = 0; i < els.length; i++) {
		// find current  radio checked
		if (els[i].checked) {
			// find parent and add wrong class
			els[i].parentElement.className = "questionWrap wrong";
		};
		
	// if user gets incorrect answer and there are more questions, move to next questions
	setTimeout(function() {
		createQuestion();
	}, 2000);
	
	// stops functions if user is correct
	return;
	
		
	};
};
	
	
	
	