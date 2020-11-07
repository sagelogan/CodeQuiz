//add countdown function when quiz is started 
//remove 5 seconds if answered incorrectly 
//move to zero when user finishes quiz


// dynamicly change website to offer a new question with multiple choice answers
//when user clicks confirm on an answer the next one is loaded

//use local storage to save score information 
//start with zero points and increase score by 10 when answered correctly 

//come up with javascript quiz questions
// 1 =a , 2=b, 3=c, 4=d 
var score = 0;
var q1 =  $('.active.dataset.a');
var a1 = "1";
var q2 = "";
var a2 = "b";
var q3 = "";
var a3 = "a";
var q4 = "";
var a4 = "c";
var q5 = "";
var a5 = "d";

console.log(q1);

$(document).ready(function() {
    $(".list-group-item").click(function () {
        $(".list-group-item").removeClass("active");
        $(this).addClass("active");   
        console.log(q1);
    });
    });
//jquery on button click start quiz
  $( "#startquiz" ).click(function() {
        console.log("quizstarted");
        $('#startquiz').hide();
        $('#question1').show();
        //add start of timer
      });



 $( "#q1s" ).click(function() {

     console.log("submit hit");
     if( 8==8){
        console.log("q 1 answered correctly");
        score = score+20;
        $('#question1').hide();
        $('#question2').show();
        $('#right_wrong').text("Question 1 Correct!");
        console.log(score);
     }
        else{
            $('#right_wrong').text("Question 1 Incorrect!");
            //deduct 5 seconds from timer
        }
      });

     

    //when submit for q1 is clicked check active li eliment, if active element == true, display correct and increase score by 20  and hide current question then unhide next question
    //if active element == false, display 'wrong' and decrease time by 10 seconds, and hide current question then unhide next question

    //repeat til question 5

    //when submit for wuestion 5 clicked check if right or wrong but instead of loading next questions load score pannel with input for initials

}

