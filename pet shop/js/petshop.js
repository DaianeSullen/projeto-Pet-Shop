function mudarPagina(pagina, elemento) {

  const frame = document.getElementById("frame");

  // Animação fade
  frame.classList.add("fade-out");

  setTimeout(() => {
    frame.src = pagina;
    frame.classList.remove("fade-out");
  }, 300);

  // Ativar botão selecionado
  let botoes = document.querySelectorAll(".menu-secundario button");
  botoes.forEach(btn => btn.classList.remove("ativo"));

  elemento.classList.add("ativo");
}