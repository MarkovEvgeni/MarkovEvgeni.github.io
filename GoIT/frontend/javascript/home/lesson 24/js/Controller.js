// controller

define(
    'Controller',
    ['jquery', 'lodash.min'],
    function ($, _) {
        
        "use strict";
        
        var Controller = function Controller(model, view) {

            var self = this;

            view.elements.addBtn.on('click', addItem);
            view.elements.listContainer.on('click', '.item-delete', removeItem);
            view.elements.listContainer.on('click', '.item', changeItem);

            function addItem() {
                var newItem = view.elements.input.val();
                model.addItem(newItem);
                view.renderList(model.data);
                view.elements.input.val('');
            }

            function removeItem() {
                var item = $(this).attr('data-value');
                model.removeItem(item);
                view.renderList(model.data); 
            }

            function changeItem() {
                var input = view.changeItem(this);
                var text = $(input).val();
                input.addEventListener('keydown', function () {
                    if (event.keyCode == 13) {
                        var item2 = $(this)[0].value;
                        $(this)[0].remove();
                        model.changeItem(text, item2);
                        view.renderList(model.data)
                        return;
                    };
                });
            }
        };
    return Controller;
    }
);
