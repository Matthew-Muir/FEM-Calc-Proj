let calcValue = 0;
let resultDisplay = document.querySelector('.result');

document.querySelector('.flexContainer').addEventListener('click', (event) => {
  
  switch(event.target.innerText){
    case 'C':
    calcValue = 0;
    resultDisplay.innerText = '0';
    break;
    default:
    alert('not c');
    break;
  }
});