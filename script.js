// Pin Generator Function Part

function generatePin() {
  const pin = Math.round(Math.random() * 10000);
  const pinValue = pin + "";

  if (pinValue.length === 4) {
    return pinValue;
  } else {
    return generatePin();
  }
}

document.getElementById("generate-btn").addEventListener("click", function () {
  const generatePinValue = generatePin();
  const inputValue = document.getElementById("pin-input");
  inputValue.value = generatePinValue;
});

// --------------------------------------------------------------

// Pin Matching function Part
document
  .getElementById("parent-id")
  .addEventListener("click", function (event) {
    const CalNumber = event.target.innerText;

    const calInputValueField = document.getElementById("cal-input");
    const calInputValue = calInputValueField.value;
    if (isNaN(CalNumber)) {
      if (CalNumber === "C") {
        calInputValueField.value = "";
      } else if (CalNumber === "<") {
        const array = calInputValue.split("");
        array.pop();
        const totalArray = array.join("");
        calInputValueField.value = totalArray;
      }
    } else {
      const newCalValue = calInputValue + CalNumber;
      calInputValueField.value = newCalValue;
    }
  });

// Submit Function
document.getElementById("submit-btn").addEventListener("click", function () {
  const pinGenerateInputField = document.getElementById("pin-input");
  const currentPin = pinGenerateInputField.value;
  const calInputField = document.getElementById("cal-input");
  const currentValue = calInputField.value;

  const correct = document.getElementById("notify-correct");
  const inCorrect = document.getElementById("notify-incorrect");

  if (currentPin === currentValue) {
    correct.style.display = "block";
    inCorrect.style.display = "none";
  } else {
    inCorrect.style.display = "block";
    correct.style.display = "none";
  }
});
