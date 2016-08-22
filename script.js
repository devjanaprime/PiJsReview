console.log( 'script.js is sourced... also Hello World' );

var greatGreekWorld = function(){
  console.log( 'greetings from the great greek world' );
}; // end greatGreekWorld

var getUserInput = function(){
  console.log( 'in getUserInput' );
  // get user input from nameIn text input element
  // and console.log it out
  console.log( 'text from the textbox:', document.getElementById( 'nameIn' ).value );
  // put user input in a variable
  var nameFromUser = document.getElementById( 'nameIn' ).value;
  // log out the new variable
  console.log( 'nameFromUser variable:', nameFromUser );
} // end getUserInput
