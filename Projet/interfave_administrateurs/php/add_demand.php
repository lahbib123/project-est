<?php
$id_profil = mt_rand();
$full_name = $_REQUEST['full_name'];
$identifiant = $_REQUEST['dentifiant'];
$email = $_REQUEST['email'];
$tel = $_REQUEST['tel'];
$date_of_birth = $_REQUEST['date_of_birth'];
$gender = $_REQUEST['gender'];
$adresse1 = $_REQUEST['adresse1'];
$adresse2 = $_REQUEST['adresse2'];
$lieu = $_REQUEST['lieu'];
$experience = $_REQUEST['experience'];
$communication = $_REQUEST['communication'];
$situation = $_REQUEST['situation'];


$intitule = $_REQUEST['intitule'];
$description = $_REQUEST['description'];
$lien = $_REQUEST['lien'];
$typologie = $_REQUEST['typologie'];
$projet_cree  = $_REQUEST['projet_cree'];
$region = $_REQUEST['region'];
$secteur = $_REQUEST['secteur'];
$beneficie = $_REQUEST['beneficie'];

require("connect.php");
$req = "insert into profil values ('$id_profil', '$full_name', '$identifiant', '$email', '$tel', '$date_of_birth', '$gender', '$adresse1', '$adresse2', '$lieu', '$experience', '$communication', '$situation')";

mysqli_query($connect, $req); 


$req2 = "insert into detail ( intitule, description, lien, typologie, projet_cree, region, secteur, beneficie, id_profil) values ('$intitule','$description','$lien', '$typologie', '$projet_cree', '$region','$secteur','$beneficie', '$id_profil')";
mysqli_query($connect, $req2);
echo $r;
//header("location:".$_SERVER['HTTP_REFERER']);
header("location:".$_SERVER['HTTP_REFERER'] . "participez?add=success");
/* echo "intitule = $intitule <br/>";
echo "description = $description <br/>";
echo "lien = $lien <br/>";
echo "typologie = $typologie <br/>";
echo "projet_cree = $projet_cree <br/>";
echo "region = $region <br/>";
echo "secteur = $secteur <br/>";
echo "beneficie = $beneficie <br/>"; */

?>