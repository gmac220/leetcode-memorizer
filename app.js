document.addEventListener("DOMContentLoaded", () => {

  // ===== ALGORITHMS =====
  const select = document.getElementById("algoSelect");
  const when = document.getElementById("when");
  const solution = document.getElementById("solution");
  const userInput = document.getElementById("userInput");
  const feedback = document.getElementById("feedback");

  const toggleBtn = document.getElementById("toggleSolutionBtn");
  const submitBtn = document.getElementById("submitBtn");
  const whenBtn = document.getElementById("whenBtn")

  let solutionVisible = false;
  let whenAnswerVisible = false;

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
    algorithmTemplate.classList.add("hidden");
    userInput.value = "";
    feedback.textContent = "";
    solutionVisible = false;
    whenAnswerVisible = false;
    toggleBtn.textContent = "Reveal Solution";
    whenBtn.textContent = "Reveal when to use";
  });

userInput.addEventListener("keydown", (e) => {
  const start = userInput.selectionStart;
  const end = userInput.selectionEnd;
  const value = userInput.value;

  if (e.key === "Tab") {
    e.preventDefault();
    const start = userInput.selectionStart;
    const end = userInput.selectionEnd;

    if (e.shiftKey) {
      // UNTAB: Remove up to 4 spaces before the cursor
      const before = userInput.value.substring(0, start);
      const after = userInput.value.substring(end);
      const match = before.match(/ {1,4}$/); // Matches 1-4 spaces at the end of the 'before' string

      if (match) {
        userInput.value = before.substring(0, before.length - match[0].length) + after;
        userInput.selectionStart = userInput.selectionEnd = start - match[0].length;
      }
    } else {
      // TAB: Insert 4 spaces
      userInput.value = userInput.value.substring(0, start) + "    " + userInput.value.substring(end);
      userInput.selectionStart = userInput.selectionEnd = start + 4;
    }
  }
  else if (e.key === "Enter") {
    e.preventDefault();

    // 1. Find the start of the current line
    const lastNewline = value.lastIndexOf("\n", start - 1);
    const lineStart = lastNewline + 1;

    // 2. Get the current line's text and its leading whitespace
    const currentLine = value.substring(lineStart, start);
    const whitespaceMatch = currentLine.match(/^\s*/);
    const indentation = whitespaceMatch ? whitespaceMatch[0] : "";

    // 3. Insert newline + the same indentation
    userInput.value = value.substring(0, start) + "\n" + indentation + value.substring(end);

    // 4. Move cursor to the end of the new indentation
    const newPos = start + 1 + indentation.length;
    userInput.selectionStart = userInput.selectionEnd = newPos;
  }
});

  whenBtn.addEventListener("click", () => {
    whenAnswerVisible = !whenAnswerVisible;
    when.classList.toggle("hidden");
    whenBtn.textContent = whenAnswerVisible
      ? "Hide when to use"
      : "Reveal when to use";
  });

  toggleBtn.addEventListener("click", () => {
    solutionVisible = !solutionVisible;
    solution.classList.toggle("hidden");
    algorithmTemplate.classList.toggle("hidden");
    
    
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
  let front = false;
  let currentSet = [...flashcards.algorithms];
  let clickedCard = false;

  const flashcardText = document.getElementById("flashcardText");
  const next = document.getElementById("nextCard");
  const prev = document.getElementById("prevCard");
  const type = document.getElementById("flashcardType");
  const flashcard = document.getElementById("flashcard");
  const shuffleBtn = document.getElementById("shuffleCards");
  const swapBtn = document.getElementById("swapBtn");

      swapBtn.onclick = () => {
        front = !front;
        renderCard();
    }

    // Add this event listener to handle the click
    flashcard.onclick = () => {
        front = !front;
        clickedCard = true;
        renderCard();
    };

  function renderCard() {
    const card = currentSet[index];
    flashcardText.textContent = front ? card.front : card.back;
  }

  // Shuffle Function
  function shuffleSet() {
    for (let i = currentSet.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [currentSet[i], currentSet[j]] = [currentSet[j], currentSet[i]];
    }
    index = 0;
    if(clickedCard){
      front = !front;
      clickedCard = false;
    }else{
      front = front;
    }
    renderCard();
  }

  shuffleBtn.onclick = shuffleSet;

  next.onclick = () => {
    index = (index + 1) % currentSet.length;
    if(clickedCard){
      front = !front;
      clickedCard = false;
    }else{
      front = front;
    }
    renderCard();
  };

  prev.onclick = () => {
    index = (index - 1 + currentSet.length) % currentSet.length;
    if(clickedCard){
      front = !front;
      clickedCard = false;
    }else{
      front = front;
    }
    renderCard();
  };

  type.onchange = () => {
    currentSet = [...flashcards[type.value]];
    index = 0;
    if(clickedCard){
      front = !front;
      clickedCard = false;
    }else{
      front = front;
    }
    renderCard();
  };

  renderCard();
});
