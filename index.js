function diceRoll() {

    var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

    var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png-dice6.png

    var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

    var image1 = document.querySelectorAll("img")[0];

    image1.setAttribute("src", randomImageSource);

    var randomNumber2 =Math.floor(Math.random() * 6) + 1; 

    var randomDiceImage2 = "dice" + randomNumber2 + ".png";

    var randomImageSource2 = "images/" + randomDiceImage2;
    

    var image2 =document.querySelectorAll("img")[1];
    
    image2.setAttribute("src", randomImageSource2);

    if(randomNumber1 > randomNumber2){
        document.querySelector("h1").innerHTML = "Player 1 wins!";
    } else {
        if(randomNumber2 > randomNumber1) {
            document.querySelector("h1").innerHTML = "Player 2 wins!";
        }else {
document.querySelector("h1").innerHTML = "Draw";
        }
    }





    /*
    var player1 = document.getElementById("player1");
    var player2= document.getElementById("player2");
    var diceImages= player1;
    var diceImages= player2;
    var d1= Math.floor(Math.round() * 6 ) + 1;
    var d2 = Math.floor(Math.round() * 6 ) +1;
    d1.innerHTML = player1;
    d2.innerHTML = player2;
    if( d1 > d2) {
document.querySelector("h1").innerHTML="Player 1 wins";
    } 
    else if(d2 > d1) {
document.querySelector("h1").innerHTML="Player 2 wins";
    }
*/

}
