// MODAL-DESKTOP

document.addEventListener("DOMContentLoaded", function () {
  var imgs = document.querySelectorAll(".gallery-item");
  var modal = document.getElementById("myModal");
  var closeModal = document.getElementById("closeModal");

  function abrirModal(img) {
    var modalImage = document.getElementById("modalImg");

    modal.style.display = "block";
    modalImage.src = img.querySelector(".gallery-image").src;
  }

  // Adiciona um ouvinte de clique para cada imagem
  imgs.forEach(function (img) {
    img.addEventListener("click", function () {
      // Verifica se a largura da tela é maior que 600 pixels antes de abrir o modal
      if (window.innerWidth > 600) {
        abrirModal(img);
      }
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  // Ouvinte para redimensionamento da janela
  window.addEventListener("resize", function () {
    // Fecha o modal se a largura da tela for menor ou igual a 600 pixels
    if (window.innerWidth <= 600) {
      modal.style.display = "none";
    }
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
