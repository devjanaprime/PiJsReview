console.log( 'script.js is sourced... also Hello World' );
// global variable
var correctAnswer = 'Brian';

var compareUserInput = function( inputFromUser ){
  // input from user is likely coming from getUserInput which gets it's value from the nameIn element on HTML
  console.log( 'in compareUserInput:', inputFromUser );
  if( inputFromUser == correctAnswer ){
    console.log( '(sips martini and winks)' );
  }
  else{
    console.log( 'whimper' );
  }
} // end compareUserInput

var getUserInput = function(){
  console.log( 'in getUserInput' );
  // get user input from nameIn text input element
  // and console.log it out
  console.log( 'text from the textbox:', document.getElementById( 'nameIn' ).value );
  // put user input in a variable
  var nameFromUser = document.getElementById( 'nameIn' ).value;
  // log out the new variable
  console.log( 'nameFromUser variable:', nameFromUser );
  // compare input from user
  compareUserInput( nameFromUser );
} // end getUserInput

var greatGreekWorld = function(){
  console.log( 'greetings from the great greek world' );
}; // end greatGreekWorld

var selectDog = function(){
  console.log( 'in selectDog' );
  console.log( document.getElementById( 'dogeIn' ).value );
  // put the input in a variable
  var selectedDogName = document.getElementById( 'dogeIn' ).value;
  // compare it to the correct name
  compareUserInput( selectedDogName );
} // end selectDog
