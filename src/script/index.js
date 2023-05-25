window.addEventListener("DOMContentLoaded", (event) => {
  // Navbar shrink function
  var navbarShrink = function () {
    const navbarCollapsible = document.body.querySelector("#mainNav");
    if (!navbarCollapsible) {
      return;
    }
    if (window.scrollY === 0) {
      navbarCollapsible.classList.remove("navbar-shrink");
    } else {
      navbarCollapsible.classList.add("navbar-shrink");
    }
  };

  // Shrink the navbar
  navbarShrink();

  // Shrink the navbar when page is scrolled
  document.addEventListener("scroll", navbarShrink);

  // Activate Bootstrap scrollspy on the main nav element
  const mainNav = document.body.querySelector("#mainNav");
  if (mainNav) {
    new bootstrap.ScrollSpy(document.body, {
      target: "#mainNav",
      rootMargin: "0px 0px -40%",
    });
  }

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector(".navbar-toggler");
  const responsiveNavItems = [].slice.call(
    document.querySelectorAll("#navbarResponsive .nav-link")
  );
  responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener("click", () => {
      if (window.getComputedStyle(navbarToggler).display !== "none") {
        navbarToggler.click();
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  var modal = new bootstrap.Modal(document.getElementById("exampleModal"));

  var form = document.getElementById("form-curriculo");
  var cpfInput = document.getElementById("cpf-user");
  var nomeInput = document.getElementById("nome-user");
  var fileInput = document.getElementById("file-user");

  var mensagemSucesso = document.getElementById("mensagem-sucesso");

  document.getElementById("btn-salvar").addEventListener("click", function () {
    // Limpar os campos do formulário
    cpfInput.value = "";
    nomeInput.value = "";
    fileInput.value = "";

    // Exibir a mensagem de sucesso
    mensagemSucesso.style.display = "block";

    // Ocultar a mensagem de sucesso após 2 segundos
    setTimeout(function () {
      mensagemSucesso.style.display = "none";
    }, 3000);
  });

  // Limpar a mensagem de sucesso quando o modal for fechado
  modal._element.addEventListener("hidden.bs.modal", function () {
    mensagemSucesso.style.display = "none";
  });
});
