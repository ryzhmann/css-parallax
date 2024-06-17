// script.js
window.onload = function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  console.log("Script is successfully initialized");
  function handleScroll() {
    if (
      document.documentElement.scrollTop > 20 ||
      document.body.scrollTop > 20
    ) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  scrollToTopBtn.addEventListener("click", scrollToTop);
  window.addEventListener("scroll", handleScroll);
};
