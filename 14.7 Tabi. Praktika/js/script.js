let tabsBtn = document.querySelectorAll('.tabs-nav__btn');//Находим все кнопки
let tabsItem = document.querySelectorAll('.tabs-item');//Находим все li-ки

tabsBtn.forEach(function(element){//Создаём цикл element
  //Каждой кнопке навешиваем обработчик click
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;//dataset позволяет нам получить data-path

    //Задали команды в цикле btn
    tabsBtn.forEach(function(btn){ btn.classList.remove('tabs-nav__btn--active')});//Удалили    
    e.currentTarget.classList.add('tabs-nav__btn--active');//Добавили

    //Задали команды в цикле element
    tabsItem.forEach(function(element){ element.classList.remove('tabs-item--active')});//Удалили    
    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');//Добавили
  });
});
