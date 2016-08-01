document.addEventListener('DOMContentLoaded', function () {

    'use strict';

    var body = document.body;
    var obj = {}; // Объявляем объект, который будет содержать вопросы и варианты ответов.
    var questions = []; // Объявляем массив. Данный массив будет содержать вопросы.
    var answers = []; // Объявляем массив. Данный массив будет содержать варианты ответов.
    
    for (i = 1; i < 6; i++) { // Создаем блок вопросов, в котором количество вопросов равняется ограничению итератора - 1.
        var question = document.createElement('h3');
        var questionExact; // Объявляем переменную, которая будет содержать конкретный вопрос.
        question.innerHTML = 'Вопрос №' + i; // Сам вопрос. По умолчанию просто слово "Вопрос №" + присвоенное значение итератора.
        questionExact = question.innerHTML; // Присваиваем переменной конкретный вопрос.
        questions.push(questionExact); // Записываем вопросы в массив по порядку начиная с номера 0.
        answers[i - 1] = []; // В массиве с вариантами ответов, варианты ответов сгруппированы в отдельные массивы под каждый вопрос. В данной строке обявляем массивы в качестве значений массива answers.
//        obj[questions] = questions; // Записываем массив в объект вопросов-ответов в качестве значения, где в качестве ключа служит номер массива в объекте.

        for (k = 1; k < 6; k++) { // Создаем блок вариантов ответов к каждому вопросу, в котором количество вариантов ответов равняется ограничению итератора - 1.
            var text = document.createElement('p'); // Создаем элемент абзац текста, который будет содержать вариант ответа.
            text.innerHTML = 'Вариант ответа №' + k; // Вариант ответа. По умолчанию словосочетание "Вариант ответа №" + присвоенное значение итератора.
            var answerExact = text.innerHTML; // Присваиваем значение варианта ответа созданной переменной.
            answers[i - 1][k - 1] = answerExact; // Записываем вариант ответф в массив конкретной группы вариантов ответов. 
        }
    }
    
    obj['questions'] = questions; // Записываем вопросы в качестве массива в объект.
    obj['answers'] = answers; // Записываем вопросы в качестве массива (содержащего массивы) в объект.
    
    localStorage.setItem('questionsAnswers', JSON.stringify(obj)); // Записываем вопросы и ответы в localStorage в качестве строки.

    var questionsBlock = localStorage.getItem('questionsAnswers'); // Считываем вопросы и ответы из localStorage строкой, записываем данные в переменную.       

    questionsBlock = JSON.parse(questionsBlock); // Трансформируем строку с вопросами и объектами назад в объект.

    var questionsQuantity =  questionsBlock.questions.length; // Считаем количество вопросов. 
    var answersQuantity = questionsBlock.answers[0].length; // Считаем количество вариантов ответов.
    
    questionsBlock.questionsQuantity = questionsQuantity; // Добавляем количество вопросов в объект с вопросами и ответами для использования в шаблоне в качестве ограничетеля итератора при генерации HTML. 
    questionsBlock.answersQuantity = answersQuantity; // Добавляем количество ответов в объект с вопросами и ответами для использования в шаблоне в качестве ограничетеля итератора при генерации HTML. 

    var template = document.getElementById('template'); // Объявляем переменную, которой присваиваем элемент DOM в который будет встроен шаблон.
    var templateHTML = template.innerHTML; // Объявляем и присваиваем переменной HTML-код, содержащийся в элементе <script>, в который будет встроен шаблон.
    var content = _.template(templateHTML); // Объявляем переменную, которой присваиваем функцию "_template" шаблонизатора Lodash. В качестве параметра функции выступает HTML-код, содержащийся в элементе <script>, в который будет встроен шаблон. 
    body.innerHTML = (content(questionsBlock)); // Вставляем шаблон на страницу.
    
    //Объявляем правильные ответы, на странице будут выделены зеленым цветом.
    
    for (var i=0; i < questionsBlock.questions.length; i++) {
        var random = Math.floor(Math.random() * (questionsBlock.answers[0].length - 1 + 1)) + 1; // Объявляем переменную, которая будет содержать случайное значение от 1 до 5, которое будет соответствовать количеству верных вариантов ответов на каждый вопрос.
        for (var k = 0; k < random; k++) {
            (function makeAnswerRight () { // Создаем функцию, которая будет присваивать ответу класс 'right_answer', а также делать абзац текста рядом с инпутом зеленым
                var randomAnswer = Math.floor(Math.random() * (questionsBlock.answers[0].length - 1 + 1)) + 1; // Объявляем переменную, которая будет содержать случайное значение от 1 до 5, которая будет соответствовать порядковому номеру ответа который будет правильным.
                var rightAnswer = document.querySelector('.question_block_' + (i+1) + '_' + randomAnswer + ''); // Находим вариант ответа согласно случайному числу
                if (rightAnswer.classList.contains('right_answer')) { // Если данный вариант ответа уже выбирался правильным ранее, вызываем функцию еще раз и генерируем случайное число до тех пор, пока не будет присвоен класс 'right_answer' варианту ответа порядковый номер которого не был сгенерирован случайным образом в функции ранее. 
                    makeAnswerRight ();
                } else {
                    rightAnswer.classList.add("right_answer"); // Добавляем класс 'right_answer'
                    var greenText = rightAnswer.nextElementSibling; // Находим следующий соседний элемент (абзац текста <p>) и присваиваем его значение объвленной для этого переменной.
                    greenText.style.color = 'green'; // Делаем абзац текста проавильного ответа зеленым
                }
            }());
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
        head.innerHTML = 'Ваш результат';
        modal.appendChild(head);
        var result1 = document.createElement('p');
        result1.innerHTML = 'Вы отметили ответов: ' + checkedAnswers;
        modal.appendChild(result1);
        var result2 = document.createElement('p');
        result2.innerHTML = 'В том числе отметили верно: ' + usersRightAnswers;
        modal.appendChild(result2);
        var result3 = document.createElement('p');
        result3.innerHTML = 'В тесте было правильных ответов: ' + rightAnswersQuantity;
        modal.appendChild(result3);
        var result4 = document.createElement('h4');
        result4.innerHTML = 'Ваш результат: ' + conclusiveResult;
        modal.appendChild(result4);
        var refresh = document.createElement('input'); // Создаем кнопку обновления страницы и сброса результата
        refresh.type = ('button');
        refresh.id = ('reload');
        refresh.value = ('Попробовать снова')
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