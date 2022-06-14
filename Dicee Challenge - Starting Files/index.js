// See Refator code at the bottom
// var randomNumber1 = randomNumber1();
// var randomNumber2 = randomNumber2();
// dicePic_1(randomNumber1);
// dicePic_2(randomNumber2);
// showWin(randomNumber1, randomNumber2);


// function randomNumber1() {
//     var randomNumber1 = Math.floor(Math.random() * 6 + 1);
//     return randomNumber1;
// }

// function randomNumber2() {
//     var randomNumber2 = Math.floor(Math.random() * 6 + 1);
//     return randomNumber2;
// }

// function dicePic_1(randomNumber1) {
//     if (randomNumber1 == 1) {
//         console.log("Dice: 1")
//         document.querySelector(".img1").setAttribute("src", "images/dice1.png");
//     }
//     else if (randomNumber1 == 2) {
//         console.log("Dice: 2")
//         document.querySelector(".img1").setAttribute("src", "images/dice2.png");
//     }
//     else if (randomNumber1 == 3) {
//         console.log("Dice: 3")
//         document.querySelector(".img1").setAttribute("src", "images/dice3.png");
//     }
//     else if (randomNumber1 == 4) {
//         console.log("Dice: 4")
//         document.querySelector(".img1").setAttribute("src", "images/dice4.png");
//     }
//     else if (randomNumber1 == 5) {
//         console.log("Dice: 5")
//         document.querySelector(".img1").setAttribute("src", "images/dice5.png");
//     }
//     else if (randomNumber1 == 6) {
//         console.log("Dice: 6")
//         document.querySelector(".img1").setAttribute("src", "images/dice6.png");
//     }
// }

// function dicePic_2(randomNumber2) {
//     if (randomNumber2 == 1) {
//         console.log("Dice: 1")
//         document.querySelector(".img2").setAttribute("src", "images/dice1.png");
//     }
//     else if (randomNumber2 == 2) {
//         console.log("Dice: 2")
//         document.querySelector(".img2").setAttribute("src", "images/dice2.png");
//     }
//     else if (randomNumber2 == 3) {
//         console.log("Dice: 3")
//         document.querySelector(".img2").setAttribute("src", "images/dice3.png");
//     }
//     else if (randomNumber2 == 4) {
//         console.log("Dice: 4")
//         document.querySelector(".img2").setAttribute("src", "images/dice4.png");
//     }
//     else if (randomNumber2 == 5) {
//         console.log("Dice: 5")
//         document.querySelector(".img2").setAttribute("src", "images/dice5.png");
//     }
//     else if (randomNumber2 == 6) {
//         console.log("Dice: 6")
//         document.querySelector(".img2").setAttribute("src", "images/dice6.png");
//     }
// }

function showWin(randomNumber1, randomNumber2) {
    if (randomNumber1 > randomNumber2)
        document.querySelector("h1").textContent = "Player 1 Wins!";
    else if (randomNumber2 > randomNumber1)
        document.querySelector("h1").textContent = "Player 2 Wins!";
    else
        document.querySelector("h1").textContent = "Draw";
}

// Refactor Code
var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomImg1 = "images/dice"+randomNumber1+".png"
var randomImg2 = "images/dice"+randomNumber2+".png"
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
img1.setAttribute("src",randomImg1)
img2.setAttribute("src",randomImg2)
showWin(randomNumber1,randomNumber2);


