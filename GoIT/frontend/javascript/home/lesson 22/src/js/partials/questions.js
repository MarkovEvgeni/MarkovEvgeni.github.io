let questions = {}; // Объявляем объект, который будет содержать вопросы и варианты ответов.
    questions = { // Заполняем объект вопросами и ответами
        0: {
            'title': 'What is HTML?',
            'answers': [
                'Hypertext Markup Language',
                'Objective Programming Language',
                'How To Make Landingpage'
            ],
            'check': 0
        },
        1: {
            'title': 'What is CSS?',
            'answers': [
                'Censor Sold Solar System',
                'Central Sugar Station',
                'Cascading Style Sheets'
            ],
            'check': 2
        },
        2: {
            'title': 'What is JavaScript?',
            'answers': [
                'Analog of Java with more functions',
                'High-level interpreted programming language',
                'Language of Javas in Star Wars'
            ],
            'check': 1
        },
        3: {
            'title': 'Select the CMS',
            'answers': [
                'Wordpress',
                'Pure',
                'Joomla',
                'Bootstrap'
            ],
            'check': [
                0,
                2
            ]
        }
};

try {
    module.exports = questions;     
} catch (e) {}
