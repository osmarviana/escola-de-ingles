const itemsQuestionsNAnswers = document.querySelectorAll(".list-item");

itemsQuestionsNAnswers.forEach(function (item) {
  item.addEventListener("click", function () {
    const ItemCurrentActive = document.querySelector(".active");

    if (ItemCurrentActive) {
      ItemCurrentActive.classList.remove("active");
    }

    item.classList.add("active");
  });
});
