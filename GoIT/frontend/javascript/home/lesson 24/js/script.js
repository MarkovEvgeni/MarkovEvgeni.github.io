require(
    [
        'jquery',
        'lodash.min',
        'Model',
        'View',
        'Controller'
    ],
    function ($, _, Model, View, Controller) {
        
//        console.log($);
//        console.log(_);
//        console.log(Model);
//        console.log(View);
//        console.log(Controller);

        "use strict";
    
        var firstToDoList = ['do the job', 'get paid'];
        var model = new Model(firstToDoList);
        var view = new View(model);
        var controller = new Controller(model, view);
    
    }
);