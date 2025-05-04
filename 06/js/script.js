function inicializar() {
  const quadrado = document.getElementById('quadrado');
  if (quadrado instanceof HTMLDivElement) {
    // Adiciona o evento mouseenter
    quadrado.addEventListener('mouseenter', () => {
      quadrado.style.backgroundColor = 'lightgreen';
      quadrado.textContent = 'Mouse sobre!';
    });

    // Adiciona o evento mouseleave
    quadrado.addEventListener('mouseleave', () => {
      quadrado.style.backgroundColor = 'lightblue';
      quadrado.textContent = 'Passe o mouse aqui!';
    });
  }
}

document.addEventListener('DOMContentLoaded', inicializar);
