const btnMore = document.querySelector('.articles-more');//ищим кнопку с классом articles-more
const articlesItem = document.querySelectorAll('.articles-item');//ищим li--ки с классом articles-item

btnMore.addEventListener('click', () => {//задаём кнопке клик
  articlesItem.forEach(el => { el.classList.add('articles-item--visible')});//add добавляем класс который будет показывать li-ку
  btnMore.closest('.articles-center').classList.add('articles-center--hidden');//articles-center--hidden - прячет кнопку. closest('.articles-center') - выключаем блок кнопки
});

