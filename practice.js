//create a variable to hold favorite food type
var favFoodType = "Korean BBQ";

/*  to create a function start with the function keyword
    give the function a description name - usually an action
    () - if your function needs value(s) put that/them between the ()
    Make sure the character after the () is a {
    Close out the function with a }
*/
function displayFavFood(favFoodType){
    //call the built in Javascript alert function; this will cause a popup to display with the
    //text that we pass in
    alert(favFoodType);
}

//call the function we just created, pass in the variable with our favorite food type
displayFavFood(favFoodType);