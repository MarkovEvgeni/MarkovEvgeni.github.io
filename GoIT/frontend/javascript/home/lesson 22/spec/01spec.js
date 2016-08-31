var round = require('../src/js/partials/calculate.js');

describe("Rounder", function () {
    it("Rounder function check", function() {
        
        // prepare
        console.log('Проверка функции округления результатов...');
        let result;
        
        // act
        
        result = round.rounder(83.3333333333);
        
        // assert
        
        expect(result).toEqual(83.33);
        console.log('Функция округления результатов работает без ошибок');
    });
});