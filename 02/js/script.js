function executar() {
  const botao = document.getElementById('changeTextColorBtn');
  const texto = document.getElementById('texto');

  if(botao instanceof HTMLButtonElement){
    botao.addEventListener('dblclick', () => {
      if (texto instanceof HTMLParagraphElement) {
        let corRandomica = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
        texto.style.color = corRandomica;
      }
    });
  }
  

}

function random(numero) {
  return Math.floor(Math.random() * (numero + 1));
}

document.addEventListener('DOMContentLoaded', executar)