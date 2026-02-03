document.addEventListener("DOMContentLoaded", () => {

  // ===== ALGORITHMS =====
  const select = document.getElementById("algoSelect");
  const when = document.getElementById("when");
  const solution = document.getElementById("solution");
  const userInput = document.getElementById("userInput");
  const feedback = document.getElementById("feedback");

  const toggleBtn = document.getElementById("toggleSolutionBtn");
  const submitBtn = document.getElementById("submitBtn");

  let solutionVisible = false;

  algorithms.forEach((algo, i) => {
    const opt = document.createElement("option");
    opt.value = i;
    opt.textContent = algo.name;
    select.appendChild(opt);
  });

  select.addEventListener("change", () => {
    const algo = algorithms[select.value];
    when.textContent = algo.when;
    solution.textContent = algo.template;
    solution.classList.add("hidden");
    userInput.value = "";
    feedback.textContent = "";
    solutionVisible = false;
    toggleBtn.textContent = "Reveal Solution";
  });

  toggleBtn.addEventListener("click", () => {
    solutionVisible = !solutionVisible;
    solution.classList.toggle("hidden");
    toggleBtn.textContent = solutionVisible
      ? "Hide Solution"
      : "Reveal Solution";
  });

  submitBtn.addEventListener("click", () => {
    const algo = algorithms[select.value];
    const normalize = str =>
      str.replace(/\s+/g, "").toLowerCase();

    if (normalize(userInput.value) === normalize(algo.template)) {
      feedback.textContent = "✅ Correct recall!";
    } else {
      feedback.textContent = "❌ Not quite. Review and try again.";
    }
  });

  // ===== FLASHCARDS =====
  let index = 0;
  let front = true;
  let currentSet = flashcards.algorithms;

  const flashcardText = document.getElementById("flashcardText");
  const flip = document.getElementById("flipCard");
  const next = document.getElementById("nextCard");
  const prev = document.getElementById("prevCard");
  const type = document.getElementById("flashcardType");

  function renderCard() {
    const card = currentSet[index];
    flashcardText.textContent = front ? card.front : card.back;
  }

  flip.onclick = () => {
    front = !front;
    renderCard();
  };

  next.onclick = () => {
    index = (index + 1) % currentSet.length;
    front = true;
    renderCard();
  };

  prev.onclick = () => {
    index = (index - 1 + currentSet.length) % currentSet.length;
    front = true;
    renderCard();
  };

  type.onchange = () => {
    currentSet = flashcards[type.value];
    index = 0;
    front = true;
    renderCard();
  };

  renderCard();
});
