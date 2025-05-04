function inicializar() {
  // Seleciona o elemento <p> pelo ID
  let texto = document.getElementById('texto');

  if (texto instanceof HTMLParagraphElement) {
    // Adiciona o evento mousedown usando addEventListener
    texto.addEventListener('mousedown', () => {
      texto.style.color = 'green';
    });

    // Adiciona o evento mouseup usando addEventListener
    texto.addEventListener('mouseup', () => {
      texto.style.color = 'black';
    });
  }
}

document.addEventListener('DOMContentLoaded', inicializar);
