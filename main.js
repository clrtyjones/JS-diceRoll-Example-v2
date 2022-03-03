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
let leftRolled = document.getElementById("leftRolledNum");
let rightRolled = document.getElementById("rightRolledNum");
var checkBox = document.getElementById("multiplyClicked");

// Global Variables For L/R Values + Multiply Flag
let leftValue = 0;
let rightValue = 0;
let multiplier = false;

// Default Left Die
// - startup value = 0
document.querySelector("#die-1").setAttribute("src", images[Math.floor(Math.random()*6)]);
document.querySelector("#leftTotal").innerHTML = "Total: " + leftValue;

// Default Right Die
// - startup value = 0
document.querySelector("#die-2").setAttribute("src", images[Math.floor(Math.random()*6)]);
document.querySelector("#rightTotal").innerHTML = "Total: " + rightValue;


/*
*   Multiply Function - Applies A 10x Multiplier To The Added Value.
*
*   @return     Boolean according to checkbox.
*   @see        Checkbox for user input.
*/
function multiply()
{
    if (checkBox.checked == true) {
        multiplier = true;
    } else {
        multiplier = false;
    }
}


/*
*   Left Die Roll Function - Generates Random (1-6) Then Adds Onto Left Total.
*
*   @return     Updated texts/variables for left side + what was added.
*   @see        Updated total, what was added.
*/
function dieRoll_One() 
{
    // Add Shake To Left Die
    leftDie.forEach(function(die){
        die.classList.add("shake");
    });

    // Remove Shake To Left Die + Calc. Amount
    setTimeout(function(){
        leftDie.forEach(function(die){
            die.classList.remove("shake");
        });
        
        // Generate Random Die Roll (1-6)
        let dieOneValue = Math.floor(Math.random()*6);
        console.log(dieOneValue);

        // Update Die Image
        document.querySelector("#die-1").setAttribute("src", images[dieOneValue]);

        // Check Multiplier + Update Total
        if (multiplier) {
            dieOneValue = (dieOneValue + 1) * 10;
        } else {
            dieOneValue += 1;
        }

        leftValue += dieOneValue;
        document.querySelector("#leftTotal").innerHTML = "Total: " + leftValue;

        leftRolled.classList.add("fade-in");

        // Display Output According To Multiplier
        if (multiplier) {
            document.querySelector("#leftRolledNum").innerHTML = 
                "10x Multiplier! " +
                "Added " + dieOneValue + "!";
        } else {
            document.querySelector("#leftRolledNum").innerHTML = 
                "Added " + dieOneValue + "!";
        }
        setTimeout(function () {
            leftRolled.classList.remove("fade-in");
        }, 1500);
    },
    1000
    );
}


/*
*   Right Die Roll Function - Generates Random (1-6) Then Adds Onto Right Total.
*
*   @return     Updated texts/variables for right side + what was added.
*   @see        Updated total, what was added.
*/
function dieRoll_Two() 
{
    // Add Shake To Right Die
    rightDie.forEach(function(die){
        die.classList.add("shake");
    });

    // Remove Shake To Right Die + Calc. Amount
    setTimeout(function(){
        rightDie.forEach(function(die){
            die.classList.remove("shake");
        });

        // Generate Random Die Roll (1-6)
        let dieTwoValue = Math.floor(Math.random()*6);
        console.log(dieTwoValue);

        // Update Die Image + Total
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);

        // Check Multiplier + Update Total
        if (multiplier) {
            dieTwoValue = (dieTwoValue + 1) * 10;
        } else {
            dieTwoValue += 1;
        }

        rightValue += dieTwoValue;
        document.querySelector("#rightTotal").innerHTML = "Total: " + rightValue;

        rightRolled.classList.add("fade-in");

        // Display Output According To Multiplier
        if (multiplier) {
            document.querySelector("#rightRolledNum").innerHTML = 
                "10x Multiplier! " +
                "Added " + dieTwoValue + "!";
        } else {
            document.querySelector("#rightRolledNum").innerHTML = 
                "Added " + dieTwoValue + "!";
        }
        setTimeout(function () {
            rightRolled.classList.remove("fade-in");
        }, 1500);
    },
    1000
    );
}