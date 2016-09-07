// view 

define(
    'View',
    ['jquery', 'lodash.min'],
    function ($, _) {
        
        "use strict";
        
        var View = function View(model) {
    
                var self = this;
                function init() {

                    var wrapper = _.template($('#wrapper-template').html());
                    $('body').append(wrapper);

                    self.elements = {
                        input: $('.item-value'),
                        addBtn: $('.item-add'),
                        listContainer: $('.item-list')
                    };
                    self.renderList(model.data);

                }

                self.renderList = function (data) {
                    var list = _.template($('#list-template').html()) ({data:data}); // ЗАПЯТАЯ НЕ НУЖНА!!!!!!
                    self.elements.listContainer.html(list);

                };

                self.changeItem = function (item) {
                    var text = $(item).html();
                    var input = ('<input class="temp" value="' + text + '"></input>');
                    $(input).insertAfter(item);
                    var value = $(item).siblings('.temp')[0];
                    $(item).remove();
                    return value;

                };
    
                init();
            };
        
        return View;
    }
);

