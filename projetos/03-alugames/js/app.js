function alterarStatus(id) {
  let jogo = document.getElementById(`game-${id}`);

  let botao = jogo.querySelector("a");

  let img = jogo.querySelector("div");

  if (botao.classList.contains("dashboard__item__button--return")) {
    botao.classList.remove("dashboard__item__button--return");
    img.classList.remove("dashboard__item__img--rented");
    botao.innerHTML = "Alugar";
  } else {
    botao.classList.add("dashboard__item__button--return");
    img.classList.add("dashboard__item__img--rented");
    botao.innerHTML = "Devolver";
  }
}
