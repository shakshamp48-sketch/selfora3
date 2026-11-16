
function updateClock() {
  const now = new Date();

  document.getElementById("clock").textContent =
    now.toLocaleTimeString();

  document.getElementById("date").textContent =
    now.toDateString();
}

setInterval(updateClock, 1000);
updateClock();

function calculate() {
  const expression = document.getElementById("calcInput").value.trim();

  if (!/^[0-9+\-*/().%\s]+$/.test(expression)) {
    document.getElementById("calcResult").textContent = "Invalid calculation";
    return;
  }

  try {
    const result = Function('"use strict"; return (' + expression + ')')();

    document.getElementById("calcResult").textContent =
      Number.isFinite(result) ? "Answer: " + result : "Invalid calculation";
  } catch {
    document.getElementById("calcResult").textContent = "Invalid calculation";
  }
}

function saveNotes() {
  const notes = document.getElementById("notes").value;
  localStorage.setItem("selforaNotes", notes);
  document.getElementById("noteStatus").textContent = "Notes saved!";
}

document.getElementById("notes").value =
  localStorage.getItem("selforaNotes") || "";

function playGame() {
  const number = Math.floor(Math.random() * 10) + 1;
  document.getElementById("gameResult").textContent =
    "Your lucky number is " + number;
}

document.getElementById("themeBtn").onclick = function() {
  document.body.classList.toggle("light");
};

document.getElementById("musicFile").onchange = function(event) {
  const file = event.target.files[0];

  if (file) {
    document.getElementById("player").src =
      URL.createObjectURL(file);
  }
};

function searchGoogle() {
  const query = document.getElementById("searchBox").value.trim();

  if (query) {
    window.open(
      "https://www.google.com/search?q=" + encodeURIComponent(query),
      "_blank"
    );
  }
}
