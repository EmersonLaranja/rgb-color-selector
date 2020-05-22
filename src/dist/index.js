//Ao carregar completamente a página, chamará a função "changeColor"
window.addEventListener('load', changeColor);

function changeColor() {
  //monitorando mudanças em cada input
  document.getElementById('red-input').addEventListener('input', changeColor);
  document.getElementById('green-input').addEventListener('input', changeColor);
  document.getElementById('blue-input').addEventListener('input', changeColor);

  //Atribuindo cada valor alterado no input
  let redInput = document.getElementById('red-input').value;
  let greenInput = document.getElementById('green-input').value;
  let blueInput = document.getElementById('blue-input').value;

  //Criando variáveis como display para mostrar o valor de cada cor
  let redDisplay = document.querySelector('#red-display');
  let greenDisplay = document.querySelector('#green-display');
  let blueDisplay = document.querySelector('#blue-display');

  //Atribuindo cada cor modificada no display
  redDisplay.value = redInput;
  greenDisplay.value = greenInput;
  blueDisplay.value = blueInput;

  //variavel que representa a combinação das cores de cada valor modificado no input
  let backgroundCircle = `rgb(${redInput},${greenInput},${blueInput})`;
  let backgroundFooter = `rgb(${redInput - 60},${greenInput - 60},${
    blueInput - 60
  })`;

  //Criando a variavel que representa o circulo
  let colorizedCircle = document.getElementById('colorized-circle');
  //Criando a variavel que representa o footer
  let footer = document.querySelector('footer');

  //Mudando a cor de fundo do círculo
  colorizedCircle.style.backgroundColor = backgroundCircle;
  //Mudando a cor de fundo do footer
  footer.style.backgroundColor = backgroundFooter;
}
