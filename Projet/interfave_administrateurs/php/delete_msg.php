<?php
require('connect.php');

$id_msg = $_REQUEST['id_msg'];

mysqli_query($connect, "delete from msg where id='$id_msg'");
header("location:admin.php?c=msg");
?>