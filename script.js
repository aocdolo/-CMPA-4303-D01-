const filterButtons = document.querySelectorAll(".filter-btn");
const resourceCards = document.querySelectorAll(".resource-card");
const filterStatus = document.getElementById("filter-status");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    let visibleCards = 0;

    resourceCards.forEach((card) => {
      if (filter === "all" || card.dataset.category === filter) {
        card.classList.remove("hide");
        visibleCards++;
      } else {
        card.classList.add("hide");
      }
    });

    const categoryName = button.textContent;

    filterStatus.textContent =
      `${visibleCards} resource${visibleCards !== 1 ? "s" : ""} shown for ${categoryName}.`;
  });
});