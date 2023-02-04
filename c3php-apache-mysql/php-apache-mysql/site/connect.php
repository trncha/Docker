<?php
$host = 'database';
$user = 'root';
$password = '1111';

$conn = mysqli_connect($host, $user, $password);
if (!$conn) {
    exit('Connection failed:' . mysqli_connect_error().PHP_EOL);
}

echo 'Successful database connection!'.PHP_EOL;