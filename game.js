// this function will be called by a button click; it will start our game
function playCraps(){
    console.log("playCraps function called");

    //first roll of the dice
    var die1 = rollDie();
    console.log("The first die roll is: " + die1);

    //second roll of the dice
    var die2 = rollDie();
    console.log("The second die roll is: " + die2);

    //add the rolls together
    var sum = die1 + die2;
    console.log("The sum of the die rolls is: " + sum);

    //show the result of the first die roll on the HTML page
    outputRes("die1Res", "Die 1 is: " + die1);

    //show the result of the second die roll on the HTML page
    outputRes("die2Res", "Die 2 is: " + die2);

    //show the result of the sum on the HTML page
    outputRes("sumRes", "The sum is: " + sum);

    //the logic for if we won, lost or tie
    if (sum == 7 || sum == 11){
        //you lose
        outputRes("crapsRes", "You Lose!");
    }
    //if the dice equal each other then they are even.
    else if(die1 == die2 && die2 % 2 == 0){
        //you win
        outputRes("crapsRes", "You Win!");
    }
    //the catch all - the dice roll was a tie
    else{
        outputRes("crapsRes", "You Pushed (You Tied)!");
    }
}

//output our game results
function outputRes(htmlElement, theText){
    //use the html element to show the results
    document.getElementById(htmlElement).innerHTML = theText;
}
//this function will generate a random number between 1 and 6
function rollDie(){
    //get a random number between 0 and 1, multiply it by 6
    var die = 6 * Math.random();
    //return the die roll and make sure it is a whole number
    return Math.ceil(die);
}