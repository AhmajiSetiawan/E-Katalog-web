const burger = document.querySelector(".ri-menu-3-line");

const menu = document.querySelector(".menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("menu-active");
});

window.onscroll = () => {
  menu.classList.remove("menu-active");
};

const btnFilter = document.querySelectorAll(".product ul li");
const btnImg = document.querySelectorAll(".product-list img");

btnFilter.forEach((data) => {
  data.addEventListener("click", () => {
    btnFilter.forEach((data) => (data.className = ""));
    data.className = "active";

    //data filter
    const btnText = data.textContent.toLowerCase();
    btnImg.forEach((img) => {
      img.style.display = "none";
      if (
        img.getAttribute("data-filter") === btnText ||
        btnText === "all product"
      ) {
        img.style.display = "block";
      }
    });
  });
});
