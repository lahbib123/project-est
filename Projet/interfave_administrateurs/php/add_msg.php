<?php
$full_name = $_REQUEST['full_name'];
$email = $_REQUEST['email'];
$msg = $_REQUEST['msg'];

require('connect.php');

$req = "insert into msg (full_name, email, msg ) values ('$full_name','$email','$msg')";
mysqli_query($connect, $req); 

header("location:".$_SERVER['HTTP_REFERER'] . "contact?add=success");


?>