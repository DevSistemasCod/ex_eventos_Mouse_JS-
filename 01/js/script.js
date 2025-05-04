function inicializar() {
  let botao = document.getElementById('meuBotaoBtn');

  if(botao instanceof HTMLButtonElement){
    botao.addEventListener('click', () => {
      alert('Você clicou no botão!');
    });
  }
  
}

document.addEventListener('DOMContentLoaded', inicializar);