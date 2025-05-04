function inicializar() {
  let area = document.getElementById('areaDiv');
  if (area instanceof HTMLDivElement) {
    area.addEventListener('contextmenu', (event) => {
      // Evita o menu de contexto padrão
      event.preventDefault();
      // Exibe uma mensagem personalizada
      alert('Saída com mensagem personalizada!');
    });
  }
}

document.addEventListener('DOMContentLoaded', inicializar);
