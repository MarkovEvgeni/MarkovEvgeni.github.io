var questions = require('../src/js/partials/questions.js');

describe("questions", function () {
    it("Quantity of right answers check", function() {
        
        // prepare
        console.log('Проверка количества верных вариантов ответов в данном тесте...');
        let result;
        let count = 0;
        
        // act
        
        for (index in questions) {
            let i=+index;
            if (questions[i].check.length === undefined) {
                count++;
            } else {
                for (index2 in questions[i].check) {
                    count++;
                }
            }
        }
        
        result = count;
        
        // assert
        
        console.log('Количество верных ответов в данном тесте', count);
        expect(result).toEqual(5);
        console.log('Количество верных ответов в данном тесте соответствует ожидаемому значению');
    });
    
    it("Quantity of answers check", function() {
        
        // prepare
        console.log('Проверка количества всех возможных вариантов ответов в данном тесте...');
        let result;
        let count = 0;
        
        // act
        
        for (index in questions) {
            let i=+index;
            for (index2 in questions[i].answers) {
                count++;
                }
        }
        
        result = count;
        
        // assert
        
        console.log('Количество ответов в данном тесте', count);
        expect(result).toEqual(13);
        console.log('Количество ответов в данном тесте соответствует ожидаемому значению');
    });
});