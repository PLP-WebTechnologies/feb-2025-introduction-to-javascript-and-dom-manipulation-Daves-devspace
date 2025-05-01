function changeText() {
  document.getElementById("info-text").textContent = "The text has been updated using JavaScript!";
}

function changeColor() {
  const box = document.getElementById("color-box");
  box.style.background = box.style.background === "lightgreen" ? "coral" : "lightgreen";
}

function toggleMessage() {
  const area = document.getElementById("message-area");
  if (area.textContent) {
    area.textContent = "";
  } else {
    area.textContent = "This is a dynamically added message!";
  }
}

