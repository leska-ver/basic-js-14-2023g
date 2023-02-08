//Поиск по html нужного класса, в консоле результат
//console.log(document.querySelector('.text'));

//Поменяем у текста цвет
//document.querySelector('.text').style.color='#3CB371';

//Для красоты кода пишут так. Директива let позволяет объявить локальную переменную с областью видимости, ограниченной текущим блоком кода 
//let text = document.querySelector('.text').style.color='#3CB371';

//Вызываем text и меняем ему стили. querySelector работает с одним элементом text
let text = document.querySelector('.text');
text.style.color = 'yellow';
text.style.background = '#9400D3';
text.style.padding = '15px';

//Вызываем text и меняем ему стили. querySelectorAll работает совсеми элементами text. Метод forEach () в языке JS используется для прохода всех элементов массива. Данный цикл работает так — он перебирает каждый элемент и выполняет переданную ему функцию для каждого элемента.
document.querySelectorAll('.text').forEach(function(element) {
  element.style.color = '#00FF00';
  element.style.fontSize = '18px';
  element.style.lineHeight = '2';
})

//Меняем стили block-у через js
let block = querySelector('.block');
block.classList.add('translateJS');