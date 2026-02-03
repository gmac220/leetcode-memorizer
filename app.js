document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("algoSelect");
  const when = document.getElementById("when");
  const solution = document.getElementById("solution");
  const revealBtn = document.getElementById("revealBtn");

  algorithms.forEach((algo, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = algo.name;
    select.appendChild(option);
  });

  select.addEventListener("change", () => {
    const algo = algorithms[select.value];
    when.textContent = algo.when;
    solution.textContent = "";
  });

  revealBtn.addEventListener("click", () => {
    const algo = algorithms[select.value];
    solution.textContent = algo.template;
  });

  // FLASHCARDS
    let currentIndex = 0;
    let showingFront = true;
    let currentSet = flashcards.algorithms;

    const flashcardText = document.getElementById("flashcardText");
    const flashcard = document.getElementById("flashcard");
    const nextBtn = document.getElementById("nextCard");
    const prevBtn = document.getElementById("prevCard");
    const flipBtn = document.getElementById("flipCard");
    const typeSelect = document.getElementById("flashcardType");

    function renderFlashcard() {
    const card = currentSet[currentIndex];
    flashcardText.textContent = showingFront ? card.front : card.back;
    }

    flipBtn.addEventListener("click", () => {
    showingFront = !showingFront;
    renderFlashcard();
    });

    nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % currentSet.length;
    showingFront = true;
    renderFlashcard();
    });

    prevBtn.addEventListener("click", () => {
    currentIndex =
        (currentIndex - 1 + currentSet.length) % currentSet.length;
    showingFront = true;
    renderFlashcard();
    });

    typeSelect.addEventListener("change", () => {
    currentSet = flashcards[typeSelect.value];
    currentIndex = 0;
    showingFront = true;
    renderFlashcard();
    });

    renderFlashcard();
});
