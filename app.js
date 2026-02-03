document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("algoSelect");
  const when = document.getElementById("when");
  const solution = document.getElementById("solution");

  algorithms.forEach((algo, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = algo.name;
    select.appendChild(option);
  });

  select.addEventListener("change", loadAlgo);

  function loadAlgo() {
    const algo = algorithms[select.value];
    when.textContent = algo.when;
    solution.textContent = "";
  }

  function reveal() {
    const algo = algorithms[select.value];
    solution.textContent = algo.template;
  }

  // expose reveal to button
  window.reveal = reveal;

  loadAlgo();
});
