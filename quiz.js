"use strict";
// Function to check the user's answer
function checkAnswer() {
  // Define the correct answer
  const correctAnswer = "4";

  // Get the selected radio button's value
  const selectedRadio = document.querySelector('input[name="quiz"]:checked');

  // Get the feedback element
  const feedbackElement = document.getElementById("feedback");

  // Get user's answer and compare with correct answer
  if (selectedRadio) {
    const userAnswer = selectedRadio.value;

    if (userAnswer === correctAnswer) {
      feedbackElement.textContent = "Correct! Well done.";
    } else {
      feedbackElement.textContent = "That's incorrect. Try again!";
    }
  } else {
    feedbackElement.textContent = "Please select an answer!";
  }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
