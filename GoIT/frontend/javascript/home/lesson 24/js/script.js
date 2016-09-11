require(
    [
        'jquery',
        'lodash.min',
        'Model',
        'View',
        'Controller'
    ],
    function ($, _, Model, View, Controller) {

        "use strict";
    
        var firstToDoList = localStorage.getItem('data');
        
        firstToDoList = JSON.parse(firstToDoList);
        
        if (firstToDoList.length === 0) {
            firstToDoList = ['PHASE 1: Collect underpants', 'PHASE 2: ?', 'PHASE 3: PROFIT !!!']
            } else {};
        
        var model = new Model(firstToDoList);
        var view = new View(model);
        var controller = new Controller(model, view);
    
    }
);