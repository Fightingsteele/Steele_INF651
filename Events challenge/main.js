const nameInput = document.getElementById("nameInput");
const submitButton = document.getElementById("submitButton");
const outputDiv = document.getElementById("outputDiv");
const mouseTracker = document.getElementById("mouseTracker");
const coordinates = document.getElementById("coordinates");

function nameSubmission() {
  const name = nameInput.value;

  if (name === "") {

    outputDiv.textContent = "Error enter a name";
    outputDiv.style.color = "red";
    outputDiv.style.backgroundColor = "transparent";
  } else {

    outputDiv.textContent = `Welcome, ${name}!`;
    outputDiv.style.color = "white";
    outputDiv.style.backgroundColor = "green";
  }
}

submitButton.addEventListener("click", nameSubmission);

nameInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    nameSubmission();
  }
});

mouseTracker.addEventListener("mousemove", function (event) {
  const x = event.offsetX;
  const y = event.offsetY;
  coordinates.textContent = `Mouse Coordinates X: ${x}, Y: ${y}`;
});