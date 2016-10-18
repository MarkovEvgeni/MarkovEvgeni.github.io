<?
    if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['telephone'])&&$_POST['telephone']!="")){
        $to = 'rkeenergo@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
        $subject = 'Новая заявка'; //Заголовок сообщения
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Имя: '.$_POST['name'].'</p>
                        <p>Телефон: '.$_POST['telephone'].'</p>
                        <p>E-mail: '.$_POST['email'].'</p> 
                        <p>Марка: '.$_POST['grade'].'</p> 
                        <p>Тоннаж: '.$_POST['tonnage'].' тонн</p> 
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Отправитель <from@example.com>\r\n"; //Наименование и почта отправителя
        mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail
        
    }
        
?>