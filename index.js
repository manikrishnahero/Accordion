const accordionLists = document.querySelectorAll(".list-part");

accordionLists.forEach((item) => {
  const title = item.querySelector(".accordion-title");

  title.addEventListener("click", () => {
    item.classList.toggle("activate");
  });
});
