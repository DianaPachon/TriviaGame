$(document).ready(function () {

    // global variables
  var area = $("trivia");
  var counterStartNumber = 30;
  var timer;
  var currentQuestion;
var results;
    // Questions and Answers 

    var questionandanswer= [
        {
            question: "What waste highest-grossing movie of the deacde?",
            options: ["Eternal Sunshine of the Spotless Mind", "The Night Dark", "No Country for old Men", "Avatar"],
            correctAsnwer: "Avatar",
            picture:[]
        },

        {
            question: "What was the nama of Sherk's love interest?",
            options: ["Fiona", "Lola", "Lora","Jazmine"],
            answer: "Fiona",
            picture:[]

        },

        {

            question: "What is the name of the third Fast and Furious movie?",
            options: ["The Fast and the Furious Tokyo Drift", "The Fast and the Furious Japan Drift", "The Fast and the Furious Turbo Charged","The Fast and the Furious Bandoleros"],
            answer:"The Fast and the Furious Tokyo Drift",
            picture:[]

        },

        {

            question: "Who directed the Lord of the Rings trilogy?",
            options: ["Jason Jackson", "Peter Jackson", "Paul Feig", "Frank Oz" ],
            answer: "Peter Jackson",
            picture:[],
            
           
        },
        
     
 
        {

            question: "In what country did Pan's Labyrinth take place??",
            options: ["Austria", "Argentina", "Spain", "Portugal"],
            answer:"Spain",
            picture:[]

        },

        {

            question: "What male actor's career reached a nadir with the movie Gigli?",
            options: ["Tom Cruise", "Ben Affleck", " Matt Damon","Brad Pitt"],
            answer:"Ben Affleck",
            picture:[]

        },

        {

            question: "What movie, directed by Mel Gibson, was considered antisemitic by some?",
            options: ["Dogville", "American Psycho", "High Tension","The Passion of the Christ"],
            answer:"The Passion of the Christ",
            picture:[]

        },

        {

            question: "Who became the first black woman to win an Oscar for Best Actress?",
            options: ["Halle Berry", "Taraji P. Henson", " Angela Bassett", "Viola Davis" ],
            answer:"Halle Berry",
            picture:[]

        },

        {

            question: "In the movie Cast Away what was Wilson?",
            options: ["Kid", "Cloud", "Volleyball", "Stick"],
            answer:"Volleyball",
            picture:[]

        },

        {

            question: "What actress played Anne Hathaway's boss in The Devil Wears Prada?",
            options: [" Diane Keaton", "Meryl Streep", "Helen Mirren", " Susan Sarandon"],
            answer:"Meryl Streep",
            picture:[]

        }
     
    ]
  
    var basicGame ={
        questionandanswer: questionandanswer,
        currentQuestion: 0,
        counter: counterStartNumber,
        correct: 0,
        incorrect: 0,

        countdown: function(){

            basicGame.counter--;
            $("#counter-number").text(basicGame.counter);
            if (basicGame.counter ===0){
                console.log("time up");
                basicGame.timeUp();
            }
           
        },

      LoadQuestion: function(){
        
            timer =setInterval(game.countdown, 1000);
            area.html("<h2>" + question[this.currentQuestion].question + "</h2>");
            
    for (var i=0;  i < questionandanswer[this.currentQuestion].answer.length; i++){
        area.append("<button class='answer-button id='button' 'data-name='" + 
        questionandanswer[this.currentQuestion].answer[i]+ ">" + 
        questionandanswer[this.currentQuestion].answer[i] + "</button>");
        
    }
    
        },
        
        nextQuestion: function(){
            basicGame.counter =counterStartNumber;
            $("counter-number").text(basicGame.counter);
            basicGame.currentQuestion ++;
            basicGame.LoadQuestion();
        
        },

        timeUp: function(){
            clearInterval(timer);
            $("counter-number").html(basicGame.counter);

            area.html("<h2> No more Time |</h2>");
            area.append("<h3> Correct Answer is: " + questionandanswer[this.currentQuestion].correctAsnwer);
            area.append("<img src='" + questionandanswer[this.currentQuestion].image + "' />");
         

            if (basiGame.currentQuestion === questionandanswer.length -1 ){
                setTimeout(basicGame.results, 3 *1000);
                }
            else {
                setTimeout(basicGame.nextQuestion, 3 * 1000);
            }
         
        },

        results: function(){

            clearInterval(timer);

            area.html("<h2> Results| </h2>");

            $("#counter.number").text(basicGame.counter);
            area.append("<h3> Correct Answers:" + basicGame.correct + "</h3>");
            area.append("<h3> Incorrect Answers:" + basicGame.incorrect + "</h3>");
            area.append("<h3> Unanswered:" + (questionandanswer.length - (basicGame.incorrect + basiGame.correct)) + "</h3>");
            area.append("<br><button id='start-over'> Play Again? </button>");
        },
       

        clicked: function(e){
            clearInterval(timer);
            if (basiGame.currentQuestion === questionandanswer.length -1 ){
                setTimeout(basicGame.results, 3 *1000);
                }
            else {
                setTimeout(basicGame.nextQuestion, 3 * 1000);
            }
        },
        
        reset: function(){
            this.currentQuestion =0;
            this.counter = counterStartNumber;
            this.correct =0;
            this.incorrect=0;
            this.LoadQuestion();
        }
    };

$(document).on("click", "#start-over",function(){
    game.reset();
});

$(document).on("click", "#answer-button",function(){
    game.clicked(e);
});



$(document).on("click", "#start",function(){
   $("#wrapped").prepend("<h2> time  remanding:<span id='counter-number'>30</span> Seconds</h2>");
});  

    
});



//var panel =$(#quiz-area);
//counterStar