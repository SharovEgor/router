<?php
require_once 'login_syka.php'; //подключение

$link = mysqli_connect($host, $user, $password, $database)
or die("Не вошел(" . mysqli_error($link));

$skl = "select id, название, улица from данные ORDER by ID DESC LIMIT 2"; //смотрит данные из таблицы
$result = mysqli_query($link, $skl) or die("Ошибка" . mysqli_error($link)); //запрос к базе данных

if($result);
{
    $rows = mysqli_num_rows($result); //видит количество строк


    while ($row = mysqli_fetch_row($result)) {

        echo "<br>$row[0] $row[1] ($row[2])<br/>";//здесь можно прописать массивы

    }

    mysqli_free_result($result);
}
mysqli_close($link);
?>