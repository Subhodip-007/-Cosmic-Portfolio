const scroll = new LocomotiveScroll({
    el: document.querySelector('body'),
    smooth: true
});




document.addEventListener("DOMContentLoaded", function() {
  const btn1 = document.querySelector('.view-project-btn[data-link="https://subhodip-007.github.io/FRONT-END-PROJECT/"]');
  if (btn1) {
    btn1.addEventListener('click', function() {
      window.open(this.getAttribute('data-link'), '_blank');
    });
  }
});




window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    loader.classList.add("hide");
  }, 500)
});
// Toggle Find Me dropdown
document.addEventListener("DOMContentLoaded", function () {
  const findMeBtn = document.getElementById("findMeBtn");
  const dropdown = document.getElementById("findMeDropdown");

  findMeBtn.addEventListener("click", function (e) {
    e.preventDefault();
    dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function (e) {
    if (!findMeBtn.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.style.display = "none";
    }
  });
});
