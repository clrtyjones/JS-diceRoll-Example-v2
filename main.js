// Import Dice Images -> Array
let images = ["./src_images/dice-01.svg",
"./src_images/dice-02.svg",
"./src_images/dice-03.svg",
"./src_images/dice-04.svg",
"./src_images/dice-05.svg",
"./src_images/dice-06.svg"];

// ID's For Query
let leftDie = document.querySelectorAll("#die-1");
let rightDie = document.querySelectorAll("#die-2");
let rolled = document.getElementById("rolledNum");
var checkBox = document.getElementById("leftVote");

// Global Variables For L/R Values + Multiply Flag
let leftValue = 0;
let rightValue = 0;
let leftVote = false;
let rightVote = false;

// Audio
let roll = new Audio("./audio/diceRollAudio.mp3");

// Default Left Die
// - startup value = 0
document.querySelector("#die-1").setAttribute("src", images[Math.floor(Math.random()*6)]);
document.querySelector("#leftTotal").innerHTML = "Total: <br>" + leftValue;

// Default Right Die
// - startup value = 0
document.querySelector("#die-2").setAttribute("src", images[Math.floor(Math.random()*6)]);
document.querySelector("#rightTotal").innerHTML = "Total: <br>" + rightValue;

// Default Rolled Num
// - needed for formatting.
document.querySelector("#rolledNum").innerHTML = "Added 0!";


/*
*   Multiply Function - Applies A 10x Multiplier To The Added Value.
*
*   @return     Boolean according to checkbox.
*   @see        Checkbox for user input.
*/
function multiply()
{
    if (checkBox.checked == true) {
        leftVote = true;
    } else {
        leftVote = false;
    }
}


/*
*   Dice Roll Function - Generates Random (1-6) Then Adds Onto Corresponding Total.
*
*   @return     Updated texts/variables for corresponding total + what was added.
*   @see        Updated total, what was added.
*/
function diceRoll() 
{
    // Play Audio Cue
    roll.play();
    roll.currentTime = 0;

    // Add Shake To Left + Right Die
    leftDie.forEach(function(die){
        die.classList.add("shake");
    });

    rightDie.forEach(function(die) {
        die.classList.add("shake");
    })

    // Remove Shake To Left/Right Die + Calc. Amount
    setTimeout(function(){
        leftDie.forEach(function(die){
            die.classList.remove("shake");
        });

        rightDie.forEach(function(die) {
            die.classList.remove("shake");
        })
        
        // Generate Random Dice Roll (1-6)
        let dieOneValue = Math.floor(Math.random()*6);
        let dieTwoValue = Math.floor(Math.random()*6);

        // Update Dice Image
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);

        // Add Total Amount To Corresponding Vote
        if (leftVote) {

            // Update Value Of Left Side
            leftValue += ((dieOneValue + 1) + (dieTwoValue + 1));
            document.querySelector("#leftTotal").innerHTML = "Total: <br>" + leftValue;

        } else {

            // Update Value Of Right Side
            rightValue += ((dieOneValue + 1) + (dieTwoValue + 1));
            document.querySelector("#rightTotal").innerHTML = "Total: <br>" + rightValue;

        }

        // TODO: Merge Amount Added Text Into One
        // TODO: Implement A New Multiply Method

        // Display Output According To Multiplier
        // ! Multiplier Not Implemented Yet.
        rolled.classList.add("fade-in");
        document.querySelector("#rolledNum").innerHTML = 
                "Added " + ((dieOneValue + 1) + (dieTwoValue + 1)) + "!";

        setTimeout(function () {
            rolled.classList.remove("fade-in");
        }, 1500);

        // **MERGE THESE TWO TOGETHER

        /*
        leftRolled.classList.add("fade-in");
        rightRolled.classList.add("fade-in");

        // Display Output According To Multiplier
        if (multiplier) {
            document.querySelector("#rolledNum").innerHTML = 
                "10x Multiplier! " +
                "Added " + dieOneValue + "!";

            document.querySelector("#rightRolledNum").innerHTML = 
                "10x Multiplier!" + 
                "Added " + dieTwoValue + "!";
        } else {
            document.querySelector("#rolledNum").innerHTML = 
                "Added " + dieOneValue + "!";

            document.querySelector("#rightRolledNum").innerHTML = 
                "Added " + dieTwoValue + "!";
        }
        setTimeout(function () {
            leftRolled.classList.remove("fade-in");
            rightRolled.classList.remove("fade-in");
        }, 1500);

        */
    },
    1000
    );
}