<?php
require('connect.php');

$id_profil = $_REQUEST['id_profil'];


mysqli_query($connect, "delete from profil where id_profil='$id_profil'");
mysqli_query($connect, "delete from detail where id_profil='$id_profil'");
header("location:admin.php");
?> 