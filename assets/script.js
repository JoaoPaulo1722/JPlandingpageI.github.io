// MODAL-DESKTOP

document.addEventListener("DOMContentLoaded", function () {
  var imgs = document.querySelectorAll(".gallery-item");
  var modal = document.getElementById("myModal");
  var closeModal = document.getElementById("closeModal");

  imgs.forEach(function (img) {
    img.addEventListener("click", function () {
      var modalImage = document.getElementById("modalImg");

      modal.style.display = "block";

      modalImage.src = img.querySelector(".gallery-image").src;
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });
});

// MENU-MOBILE:

document.addEventListener("DOMContentLoaded", function () {
  var menuButton = document.querySelector("#icon-menu-mobile");
  var closeMenu = document.getElementById("close-menu");
  var nav_menu = document.querySelector(".nav");

  function toggleMenu() {
    nav_menu.classList.toggle("active");
  }

  menuButton.addEventListener("click", toggleMenu);
  closeMenu.addEventListener("click", toggleMenu);
});
