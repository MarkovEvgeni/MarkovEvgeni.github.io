// model

define(
    'Model',
    [],
    function () {
        
        "use strict";
        
        var Model = function Model(data) {

                var self = this;
                self.data = data;

                self.addItem = function (item) {    // Функция "Добавить элемент"
                    if (item.length === 0) {
                        return;
                    }
                    self.data.push(item);
                    return self.data;
                };

                self.removeItem = function (item) {
                    
                    var index = self.data.indexOf(item);

                    if (index === -1) {
                        return;
                    }

                    self.data.splice(index, 1);

                    return self.data;
                };

                self.changeItem = function (item, item2) {

                    var index = self.data.indexOf(item);

                    if (index === -1) {
                        return;
                    }

                    self.data.splice(index, 1, item2);
                    return self.data;

                };
                    
            };
        
        return Model;
    }
);