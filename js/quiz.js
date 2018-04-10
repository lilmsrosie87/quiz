// questions for quiz (week 10)
var questions = [
	{
		question: "What district did Katnis Everden represent at the 74th Hunger Games?",
		answer: [" District 12 ", " District 8 ", " District 2", " The Capital "],
		correct: "District 12"
	},
	{
		question: "What type of shop did Peeta Mellark's family own?",
		answer:[" apothecary ", " auto ", " bakery ", " farm "],
		correct: "bakery"
	},
	{
		question: "In her first interview with Ceaser Flickerman, what does Katniss say is her favorite thing about the Capital?",
		answer:[" the architecture ", " lamb stew with dried plums ", " everyone is so friendly ", " she doesn't say anything "],
		correct: "lamb stew with dried plums"
	},
	{
		question: "Who is the mentor for District 12 in the 74th Hunger Games?",
		answer:[" Effie Trinket ", " Gayle Thompson ", " President Snow ", " Haymitch Abernathy "],
		correct: "Haymitch Abernathy"
	},
	{
		question: "What three districts were known as 'the careers'?",
		answer: [" District 13 ", "District 3 ", " The Capital ", " District 6 "],
		correct: "District 3"
	},
	{
		question: "What did Peeta through towards Katniss on that rainy day she saw the dandilions?",
		answer: [" bread ", " basketball ", " advice ", " a coin from the Capital "],
		correct: "bread"
	},
		question: "Who is the only person Katnis is certain that she loves?",
		answer: [" Peeta ", " Prim ", " Gayle ", " her mother "],
		correct: "Prim"
	}
];


	// this is the attribute used to start quiz (activates onlick() in questionnaire)
	var questionnaire = getElementById("questionnaire");

	function startGame() {
		// clears previous HTML
		questionnaire.innerHTML = " ";
		
		// centers questions in quiz
		questionnaire.style.margin = "12% auto";
		
		// load 1st question
		createQuestion();
	};
		
var createQuestion() {
		// clears previous HTML
		questionnaire.innerHTML = "";
		
	// loop
	for (var i = 0; i < i++) {
		
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
		questionForm.appendChild(formGroup);
		
		// adding questions to be displayed in DOM
	for ( var r = 0; r <questions[i].answers.length; r++) {
		var answerDiv = document.createElement("div");
		var answerEl = document.createElement("input");
		
		//node for text question
	var answerText = document.createTextNode(questions[i].answers[r];

	answerDiv. appendChild(answerEl);
	answerDiv.appendChild(answerChild(answerText);

	// adding attributes
	answerDiv.className = "questionWrap";
	answerEl.type = "radio";
	answerEl.name = "radio" + [i];
	answerEl.value = question[i].answers[j];

	formGroup.appendChild(answerDiv);

	};

};

function submitAnswer() {
	

	
	
	