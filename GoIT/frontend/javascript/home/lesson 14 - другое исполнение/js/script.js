document.addEventListener('DOMContentLoaded', function () {

    'use strict';

    var body = document.body;
    var questions = {}; // Объявляем объект, который будет содержать вопросы и варианты ответов.
    questions = { // Заполняем объект вопросами и ответами
        0: {
            'title': 'What is HTML?',
            'answers': [
                'Hypertext Markup Language',
                'Objective Programming Language',
                'How To Make Landingpage'
            ],
            'check': 0
        },
        1: {
            'title': 'What is CSS?',
            'answers': [
                'Censor Sold Solar System',
                'Central Sugar Station',
                'Cascading Style Sheets'
            ],
            'check': 2
        },
        2: {
            'title': 'What is JavaScript?',
            'answers': [
                'Analog of Java with more functions',
                'High-level interpreted programming language',
                'Language of Javas in Star Wars'
            ],
            'check': 1
        },
        3: {
            'title': 'Select only the CMS if any',
            'answers': [
                'Wordpress',
                'Pure',
                'Joomla',
                'Bootstrap'
            ],
            'check': [
                0,
                2
            ]
        }
    };
    
    localStorage.setItem('questionsAnswers', JSON.stringify(questions)); // Записываем вопросы и ответы в localStorage в качестве строки.

    var questionsBlock = localStorage.getItem('questionsAnswers'); // Считываем вопросы и ответы из localStorage строкой, записываем данные в переменную.       

    questionsBlock = JSON.parse(questionsBlock); // Трансформируем строку с вопросами и объектами назад в объект.
    

    var questionsQuantity =  Object.keys(questionsBlock).length; // Считаем количество вопросов.
    var answersQuantity =  []; // Создаем массив, который будет содержать количество вариантов ответов на каждый вопрос.
    
    for (var i=0; i < questionsQuantity; i++) { // Заполняем массив, считая количество правильных ответов
        answersQuantity[i] = questionsBlock[i]['answers'].length;
    }
    
    questionsBlock.questionsQuantity = questionsQuantity; // Добавляем количество вопросов в объект с вопросами и ответами для использования в шаблоне в качестве ограничетеля итератора при генерации HTML. 
    questionsBlock.answersQuantity = answersQuantity; // Добавляем количество ответов в объект с вопросами и ответами для использования в шаблоне в качестве ограничетеля итератора при генерации HTML. 
    
    console.log('questionsBlock', questionsBlock);
    
    var wrapper = {}; // Создадим объект для удобного доступа к элемента объекта questionsBlock из script'a в HTML при использовании шаблона
    
    wrapper = {
        name: questionsBlock
    };
    
    console.log(wrapper);

    
    var template = document.getElementById('template'); // Объявляем переменную, которой присваиваем элемент DOM в который будет встроен шаблон.
    var templateHTML = template.innerHTML; // Объявляем и присваиваем переменной HTML-код, содержащийся в элементе <script>, в который будет встроен шаблон.
    console.log(templateHTML);
    var content = _.template(templateHTML); // Объявляем переменную, которой присваиваем функцию "_template" шаблонизатора Lodash. В качестве параметра функции выступает HTML-код, содержащийся в элементе <script>, в который будет встроен шаблон. 
    body.innerHTML = (content(wrapper)); // Вставляем шаблон на страницу.
    
    //Объявляем правильные ответы, на странице будут выделены зеленым цветом.
    
    console.log('Идем дальше');
    console.log(questionsBlock[0]['check'].length);
    
    for (var i = 0; i < questionsBlock.questionsQuantity; i++) {
        if (questionsBlock[i]['check'].length === undefined) {
            var k = questionsBlock[i]['check'] + 1; // Объявляем переменную которой присваиваем порядковый номер с правильным ответом, который находится в 'check'
            var rightAnswer = document.querySelector('.question_block_' + (i+1) + '_' + k + ''); // Объявляем переменную, которой присвиваем input соответствующий правильному ответу 
            rightAnswer.classList.add("right_answer"); // Добавляем класс 'right_answer' input который соответствует правильному ответу
        } else {
            for (var z = 0; z < questionsBlock[i]['check'].length; z++) {
                var k = questionsBlock[i]['check'][z] + 1; // Объявляем переменную которой присваиваем порядковый номер с правильным ответом, который находится в 'check'
                var rightAnswer = document.querySelector('.question_block_' + (i+1) + '_' + k + ''); // Объявляем переменную, которой присвиваем input соответствующий правильному ответу 
                rightAnswer.classList.add("right_answer"); // Добавляем класс 'right_answer' input который соответствует правильному ответу
            }
        };
    };
    
    function calculateResults (el) { // Объявляем функцию которая будет рассчитывать количество правильных ответов и выводить модальное окно с результатом.
        el.preventDefault(); // Предотвращаем выполнение функции по умолчанию.
        var rightAnswersQuantity = document.querySelectorAll('.right_answer'); // Объявляем переменную в которую записываем все ответы с классом 'right_answer'
        rightAnswersQuantity = rightAnswersQuantity.length; // Присваиваем длину массива, содержащего элементы 'right_answer' переменной.
        var checkedAnswers  = document.querySelectorAll(':checked'); // Объявляем переменную, которая будет содержать все отмеченные ответы
        checkedAnswers = checkedAnswers.length; // Считаем количество отмеченных ответов
        var usersRightAnswers = document.querySelectorAll('.right_answer' + ':checked'); // Объявляем перменную, которая будет содержать массив с отмеченными input с классом 'right_answer'
        usersRightAnswers = usersRightAnswers.length; // Считаем количество верно отмеченных ответов
        var conclusiveResult = (usersRightAnswers - (checkedAnswers - usersRightAnswers)) / rightAnswersQuantity * 100; // Рассчитываем результат
        conclusiveResult = Math.round((conclusiveResult)*100)/100
        if (conclusiveResult > 0) {
            conclusiveResult = conclusiveResult + "%"    
        } else {
            conclusiveResult = 0 + "%" 
        };
        
        // Создаем модальное окно
        
        window.scrollTo(0, 0);
        var background = document.createElement('div'); // Создаем background для модального окна, чтобы не допустить нажатия на элементы body.
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
        var before = document.createElement('div'); // Создаем элемент для выравнивания модального окна по высоте и ширине в зависимости от размера body
        before.style.content = "";
        before.style.display = "inline-block";
        before.style.height = "100%";
        before.style.verticalAlign = "middle";
        background.appendChild(before); // Добавляем before
        var modal = document.createElement('div'); // Создаем модальное окно
        modal.style.zIndex = "3";
        modal.style.borderRadius = "15px";
        modal.style.border = "5px solid black";
        modal.style.height = "200px";
        modal.style.width = "400px";
        modal.style.verticalAlign = "middle";
        modal.style.background = "white";
        modal.style.display = "inline-block";
        background.appendChild(modal); // Добавляем модальное окно
        var head = document.createElement('h4');
        head.innerHTML = 'Results';
        modal.appendChild(head);
        var result1 = document.createElement('p');
        result1.innerHTML = 'You have checked answers: ' + checkedAnswers;
        modal.appendChild(result1);
        var result2 = document.createElement('p');
        result2.innerHTML = 'You have checked right answers: ' + usersRightAnswers;
        modal.appendChild(result2);
        var result3 = document.createElement('p');
        result3.innerHTML = 'Right answers in this quiz: ' + rightAnswersQuantity;
        modal.appendChild(result3);
        var result4 = document.createElement('h4');
        result4.innerHTML = 'Your result: ' + conclusiveResult;
        modal.appendChild(result4);
        var refresh = document.createElement('input'); // Создаем кнопку обновления страницы и сброса результата
        refresh.type = ('button');
        refresh.id = ('reload');
        refresh.value = ('Try again')
        modal.appendChild(refresh);
        function rel (el) { // Функция обновления страницы
            el.preventDefault(); // Предотвращаем выполнение функции по умолчанию.
            location.reload();
        };
        var reload = document.getElementById('reload');
        reload.addEventListener('click', rel); // Добавляем функцию обновления кнопке refresh
    };
    
    
    var checkResults = document.getElementById('button');
    checkResults.addEventListener('click', calculateResults); // Добавляем функцию рассчета результата и вывода модального окна кнопке "Проверить мой результат"
    
});