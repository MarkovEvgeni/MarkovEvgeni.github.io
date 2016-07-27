$(document).ready(function () {
    $(function () {
        $(document.body).carousel();
    });
    
    var proverka = '+380999746289';
    var pro = +proverka;
    var first = pro % 100;
    var second = ((pro % 10000) - first) / 100;
    var third = ((pro % 10000000) - (second * 100 + first)) / 10000;
    var fourth = ((pro % 1000000000) - third * 10000 - second * 100 - first) / 10000000;
    var fifth = ((pro % 1000000000000) - fourth * 10000000 - third * 10000 - second * 100 - first) / 10000000000;
    var total = '+' + fifth + '(0' + fourth + ')' + third + "-" + second + "-" + first;
    
    
    var template1 = $('#template1').html();
    var info = [
        {
            name: 'Марков Евгений Владимирович',
            proffesion: 'Специалист по ВЭД',
            reason: 'Хочу сам планировать свое рабочее время',
            telephone: '+380999746289',
            telephone2: total,
            image: 'img/img-1.jpg',
            vk: 'id6723426',
            vkName: 'Евгений Марков',
            response: 'Если нужно, могу помочь Вам экспортировать забор'
        },
        {
            reason: 'Хочу чтобы результат зависел только от моих усилий'
        },
        {
            reason: 'Люблю программирование больше чем людей :)'
        }
    ];
    var content = tmpl(template1, {
        data: info
    });
    
    $('body').append(content);
    
    var template2 = $('#template2').html();
    console.log(template2);
    
    var content2 = _.template(template2);
    var data = {
        'name': 'Марков Евгений Владимирович',
        'proffesion': 'Специалист по ВЭД',
        'reasons': [
            'Хочу сам планировать свое рабочее время',
            'Хочу чтобы результат зависел только от моих усилий',
            'Люблю программирование больше чем людей :)'
        ],
        'telephone': '+380999746289',
        'telephone2': total,
        'image': 'img/img-1.jpg',
        'vk': 'id6723426',
        'vkName': 'Евгений Марков',
        'response': 'Если нужно, могу помочь Вам экспортировать забор'
    };
    
    $('body').append(content2(data));
});