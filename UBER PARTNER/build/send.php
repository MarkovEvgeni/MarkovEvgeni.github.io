<?php
    if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['telephone'])&&$_POST['telephone']!="")){
        $to = 'support@uberin.od.ua, tarasuberin@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
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
                        <p>Автомобиль: '.$_POST['car'].'</p> 
                        <p>Дополнительная информация: '.$_POST['information'].'</p> 
                    </body>
                </html>'; //Текст нащего сообщения можно использовать HTML теги
        $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
        $headers .= "From: Новый водитель <uberin.od.ua@example.com>\r\n"; //Наименование и почта отправителя
        $send = mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail 
        echo json_encode(array('send' => $send ));
    }
?>