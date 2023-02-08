//Меняем стили block-у через js. Увидим результат в браузере после удаления класса translateJS. Потом нажмём на блок и он покажет стили translateJS которые мы задали в файле css. 
let block = document.querySelector('.block');

block.addEventListener('click', function() {
  block.classList.add('translateJS');
});