function inicializar() {
  let linha = document.getElementById('conteudoDiv');

  if (linha instanceof HTMLDivElement) {
    linha.addEventListener('mouseover', () => {
      linha.style.backgroundColor = 'rgb(255, 247, 3)';
      linha.textContent = 'Você passou o mouse!';
    });

    linha.addEventListener('mouseout', () => {
      linha.style.backgroundColor = 'rgb(255, 255, 255)';
      linha.textContent = 'Passe o mouse aqui!';
    });
  }
}

document.addEventListener('DOMContentLoaded', inicializar);
