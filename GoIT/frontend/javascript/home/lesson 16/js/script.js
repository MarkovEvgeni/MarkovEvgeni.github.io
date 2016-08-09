$(function () {
    
    var body = document.body;
    console.log(body);
    
    
    function calculateResults (el) {
        el.preventDefault();
        var query = $("input:text").val();
        var urlQuery = 'https://pixabay.com/api/?key=3062983-30d232d59c976145e4359a539&per_page=40&q=' + query;
        console.log(urlQuery);
        var removable = $('.removable');
        console.log(removable);
        removable.detach();
        $('body').append('<div class="search_form_2 removable">');
        $('.search_form_2').append('<div class="search_inside_2">');
        $('.search_inside_2').append('<form>');
        $('form').append('<a href="#" class="inline"><img height="40px" src="img/pixabay.png" alt="Pixabay"></a>');
        $('form').append('<input type="text">');
        $('form').append('<input id="button" type="submit">');
        $('body').append('<ul class="removable">');
        
        
    
        $.ajax({
            url: urlQuery,
            success: function (response) {
                var answersArray = response.hits;
                console.log(answersArray);
                console.log(answersArray.length);
                for (i=0; i < answersArray.length; i++) {
                    var img = (response.hits[i].previewURL);
                    var link = (response.hits[i].webformatURL);
                    img = '<img src="' + img + '" >';
                    link = '<a class="a_' + i + '" href="' + link + '">'
                    console.log(img);
                    $('ul').append('<li class="li_' + i + '">');
                    var exactLi = ".li_" + i;
                    var exactA = ".a_" + i;
                    console.log(exactLi);
                    $(exactLi).addClass('removable');
                    $(exactLi).append(link);
                    $(exactA).append(img);
                }
            }       
        });
        
        var checkResults = document.getElementById('button');
        checkResults.addEventListener('click', calculateResults);
        
    }
    
    var checkResults = document.getElementById('button');
    checkResults.addEventListener('click', calculateResults);
    
    function Human (name, age, sex, height, weight) {
        this.name = name || 'John' ;
        this.age = age || 30;
        this.sex = sex || 'male';
        this.height = height || 180;
        this.weight = weight || 80;
    }
    
    function Human2 () {
        this.name = 'John';
        this.age = 30;
        this.sex = 'male';
        this.height = 180;
        this.weight = 80;
    }
    
    var newHuman = new Human ();
    console.log(newHuman);
    
    var newHuman2 = new Human2 ();
    console.log(newHuman2);
    
    function Workman () {
        };
    
    function Student () {
        };
    
    Workman.prototype = newHuman2;
    Workman.prototype.work = function (workplace, wage) {
            this.workplace = workplace || 'mill';
            this.wage = wage || 10000; 
        };
    
    Student.prototype = newHuman2;
    Student.prototype.watchtvshows = function (college, stipend) {
            this.college = workplace || 'Harward';
            this.stipend = wastipendge || 5000; 
        };
    
    
    var workman1 = new Workman ();
    workman1.work ('factory', 14000);
    
    var workman2 = new Workman ();
    workman2.work ('gas-station', 8000);
    
    console.log(workman1);
    console.log("Workman's name:", workman1.name);
    
    console.log(workman2);
    console.log("Workman's sex:", workman2.sex);
    
    var student1 = new Student ('Michael');
    student1.work ('Oxford', 7500);
    
    var student2 = new Student ();
    student2.work ('Princeton', 8000);
    
    console.log(student1);
    console.log("Student's name:", student1.name);
    
    console.log(student2);
    console.log("Student's age:", student2.age);
   
});