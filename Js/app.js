document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }

    // Fecha o menu no mobile após o clique
    document.getElementById('menu-list').classList.remove('active');
  });
});
document.getElementById("leiamais").addEventListener("click", function (e) {
  e.preventDefault();
  const conteudo = document.getElementById("conteudo-leiamais");

  // Alterna visibilidade
  if (conteudo.style.display === "none") {
    conteudo.style.display = "block";
    this.textContent = "Mostrar menos";
  } else {
    conteudo.style.display = "none";
    this.textContent = "Leia mais";
  }
});
