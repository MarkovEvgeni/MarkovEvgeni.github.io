var heading = document.createElement('h1');
heading.classList.add('heading');
heading.innerHTML = 'Тест по программированию';
var body = document.body;
var form = document.createElement('form');
form.classList.add('form');
body.appendChild(heading);
body.appendChild(form);
var i;
var k;
for (i = 1; i < 4; i++) {
    var questionBlock = document.createElement('label');
    form.insertBefore(questionBlock, null);
    questionBlock.classList.add('question_block_' + i);
    questionBlock.style.display = 'block';
    var question = document.createElement('h3');
    question.classList.add('question_' + i);
    question.innerHTML = 'Вопрос №' + i;
    questionBlock.appendChild(question);
    for (k = 1; k < 4; k++) {
        var answer = document.createElement('label');
        answer.style.display = 'block';
        answer.style.marginLeft = '10px';
        var checkbox = document.createElement('input');
        var text = document.createElement('p');
        text.innerHTML = 'Вариант ответа №' + k;
        checkbox.type = 'checkbox';
        checkbox.id = ('question_' + i + '_' + k);
        checkbox.name = ('question_' + i + '_' + k);
        checkbox.value = ('question_' + i + '_' + k);
        checkbox.classList.add('question_block_' + i + '_' + k);
        questionBlock.insertBefore(answer, null);
        answer.insertBefore(checkbox, null);
        answer.insertBefore(text, null);
        text.style.display = 'inline-block';
    }
}
var submit = document.createElement('input');
submit.type = 'submit';
submit.value = 'Проверить мои результаты';
body.appendChild(submit);