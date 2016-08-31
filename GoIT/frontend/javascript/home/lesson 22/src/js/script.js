document.addEventListener('DOMContentLoaded', function () {

    'use strict';
    
    let body = document.body;
    
    //= partials/questions.js
    
    
    localStorage.setItem('questionsAnswers', JSON.stringify(questions)); // Записываем вопросы и ответы в localStorage в качестве строки.

    let questionsBlock = localStorage.getItem('questionsAnswers'); // Считываем вопросы и ответы из localStorage строкой, записываем данные в переменную.       

    questionsBlock = JSON.parse(questionsBlock); // Трансформируем строку с вопросами и объектами назад в объект.

    let wrapper = {}; // Создадим объект для удобного доступа к элемента объекта questionsBlock из script'a в HTML при использовании шаблона
    
    wrapper = {
        name: questionsBlock
    };
    
    let template = document.getElementById('template'); // Объявляем переменную, которой присваиваем элемент DOM в который будет встроен шаблон.
    let templateHTML = template.innerHTML; // Объявляем и присваиваем переменной HTML-код, содержащийся в элементе <script>, в который будет встроен шаблон.
    let content = _.template(templateHTML); // Объявляем переменную, которой присваиваем функцию "_template" шаблонизатора Lodash. В качестве параметра функции выступает HTML-код, содержащийся в элементе <script>, в который будет встроен шаблон. 
    
    let abc = document.createElement('div');
    abc.style.padding = 10;
    abc.innerHTML = content(wrapper);
    body.appendChild(abc); // Вставляем шаблон на страницу.   

    
    //Объявляем правильные ответы, на странице будут выделены зеленым цветом.
    
    for (let index in questionsBlock) {
        let i = +index;
        if (questionsBlock[i]['check'].length === undefined) {
            let _k = questionsBlock[i]['check'] + 1; // Объявляем переменную которой присваиваем порядковый номер с правильным ответом, который находится в 'check'
            let _rightAnswer = document.querySelector('.question_block_' + (i + 1) + '_' + _k + ''); // Объявляем переменную, которой присвиваем input соответствующий правильному ответу 
            _rightAnswer.classList.add("right_answer"); // Добавляем класс 'right_answer' input который соответствует правильному ответу
        } else {
            let z = 0;
            for (let index2 of questionsBlock[i]['check']) {
                let z = +index2;
                let k = z + 1; // Объявляем переменную которой присваиваем порядковый номер с правильным ответом, который находится в 'check'
                let rightAnswer = document.querySelector('.question_block_' + (i + 1) + '_' + k + ''); // Объявляем переменную, которой присвиваем input соответствующий правильному ответу 
                rightAnswer.classList.add("right_answer"); // Добавляем класс 'right_answer' input который соответствует правильному ответу
            }
        };
    };
    
    let calc = {
    calculateResults: function (el) { // Объявляем функцию которая будет рассчитывать количество правильных ответов и выводить модальное окно с результатом.
    el.preventDefault(); // Предотвращаем выполнение функции по умолчанию.
    let rightAnswersQuantity = document.querySelectorAll('.right_answer'); // Объявляем переменную в которую записываем все ответы с классом 'right_answer'
    rightAnswersQuantity = rightAnswersQuantity.length; // Присваиваем длину массива, содержащего элементы 'right_answer' переменной.
    let checkedAnswers  = document.querySelectorAll(':checked'); // Объявляем переменную, которая будет содержать все отмеченные ответы
    checkedAnswers = checkedAnswers.length; // Считаем количество отмеченных ответов
    let usersRightAnswers = document.querySelectorAll('.right_answer' + ':checked'); // Объявляем перменную, которая будет содержать массив с отмеченными input с классом 'right_answer'
    usersRightAnswers = usersRightAnswers.length; // Считаем количество верно отмеченных ответов
    let conclusiveResult = (usersRightAnswers - (checkedAnswers - usersRightAnswers)) / rightAnswersQuantity * 100; // Рассчитываем результат
    console.log('before', conclusiveResult);    
    //= partials/calculate.js
    conclusiveResult = round.rounder(conclusiveResult);
    console.log('after', conclusiveResult); 
    if (conclusiveResult > 0) {
        conclusiveResult = conclusiveResult + "%"    
    } else {
        conclusiveResult = 0 + "%" 
    };
     window.scrollTo(0, 0);
     let background = document.createElement('div'); // Создаем background для модального окна, чтобы не допустить нажатия на элементы body.
     background.style.zIndex = "2";
     background.style.width = "100%";
     background.style.height = "100%";
     background.style.backgroundColor = "rgba(192,192,192,0.3)";
     body.style.overflow = "hidden";
     background.style.top = "0";
     background.style.textAlign = "center";
     background.style.left = "0";
     background.style.position = "absolute";
     body.appendChild(background); // Добавляем background
     let before = document.createElement('div'); // Создаем элемент для выравнивания модального окна по высоте и ширине в зависимости от размера body
     before.style.content = "";
     before.style.display = "inline-block";
     before.style.height = "100%";
     before.style.verticalAlign = "middle";
     background.appendChild(before); // Добавляем before
     let modal = document.createElement('div'); // Создаем модальное окно
     modal.style.zIndex = "3";
     modal.style.borderRadius = "15px";
     modal.style.border = "5px solid black";
     modal.style.height = "200px";
     modal.style.width = "400px";
     modal.style.verticalAlign = "middle";
     modal.style.background = "white";
     modal.style.display = "inline-block";
     background.appendChild(modal); // Добавляем модальное окно
     let head = document.createElement('h4');
     head.innerHTML = 'Ваш результат';
     modal.appendChild(head);
     let result1 = document.createElement('p');
     result1.innerHTML = 'Вы отметили ответов: ' + checkedAnswers;
     modal.appendChild(result1);
     let result2 = document.createElement('p');
     result2.innerHTML = 'В том числе отметили верно: ' + usersRightAnswers;
     modal.appendChild(result2);
     let result3 = document.createElement('p');
     result3.innerHTML = 'В тесте было правильных ответов: ' + rightAnswersQuantity;
     modal.appendChild(result3);
     let result4 = document.createElement('h4');
     result4.innerHTML = 'Ваш результат: ' + conclusiveResult;
     modal.appendChild(result4);
     let refresh = document.createElement('input'); // Создаем кнопку обновления страницы и сброса результата
     refresh.type = ('button');
     refresh.id = ('reload');
     refresh.value = ('Попробовать снова')
     modal.appendChild(refresh);
     let calc2 = {
         rel: function (el) { // Функция обновления страницы
            el.preventDefault(); // Предотвращаем выполнение функции по умолчанию.
            location.reload();
            return 'Everything is fine';
        }
     };
     let reload = document.getElementById('reload');
     reload.addEventListener('click', calc2.rel); // Добавляем функцию обновления кнопке refresh
    }
};
    
    let checkResults = document.getElementById('button');
    checkResults.addEventListener('click', calc.calculateResults); // Добавляем функцию рассчета результата и вывода модального окна кнопке "Проверить мой результат"
});