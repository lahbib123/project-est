<?php
/* require("connect.php");
$id_profil = $_GET['id_profil'];
$detail = mysqli_fetch_assoc(mysqli_query($connect, "select * from detail where id_profil=$id_profil"));
print('<pre>');
print_r($detail);
print('</pre>');
 */

session_start();
if (!isset($_SESSION['login'])) {
    header('location:../');
    exit();
}
require("connect.php");
$id_profil = $_GET['id_profil'];

$profil = mysqli_fetch_assoc(mysqli_query($connect, "select * from profil where id_profil='$id_profil'"));
$detail = mysqli_fetch_assoc(mysqli_query($connect, "select * from detail where id_profil='$id_profil'"));
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EST</title>
    <link rel="icon" type="image/x-icon" href="../src/Image/logo1.png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</head>

<body class="bg-light">
    <div class="container ">
        <div class="text-end ">
            <a href="./admin.php" class="btn btn-success">Retur</a>
            <a class="btn btn-danger m-4 text-end " style="background-color: red;" href="./logout.php">Déconnecter</a>
        </div>
        <h1 class="text-center"><b><b>Donner de : </b></b><?php echo $profil['full_name'] ?></h1>
        <section class=" p-5">
            <div class="table-responsive" id="no-more-tables">
                <table class="table bg-white">
                    <?php

                    ?>
                    <tbody>
                        <tr>
                            <th style="background-color: green" class="text-white w-auto">Nom</th>
                            <td class="w-100"><?php echo $profil['full_name'] ?></td>
                        </tr>
                        <tr>
                            <th style="background-color: green" class="text-white w-auto">dentifiant</th>
                            <td class="w-100"><?php echo $profil['identifiant'] ?></td>
                        </tr>
                        <tr>
                            <th style="background-color: green" class="text-white w-auto">Email</th>
                            <td class="w-100"><?php echo $profil['email'] ?></td>
                        </tr>
                        <tr>
                            <th style="background-color: green" class="text-white w-auto">Téléphone</th>
                            <td class="w-100"><?php echo $profil['tel'] ?></td>
                        </tr>
                        <tr>
                            <th style="background-color: green" class="text-white w-auto">Date_de_naissance</th>
                            <td class="w-100"><?php echo $profil['date_of_birth'] ?></td>
                        </tr>
                        <tr>
                            <th style="background-color: green" class="text-white w-auto">Genre</th>
                            <td class="w-100"><?php echo $profil['gender'] ?></td>
                        </tr>
                        <tr>
                            <th style="background-color: green" class="text-white w-auto">Adresse1</th>
                            <td class="w-100"><?php echo $profil['adresse1'] ?></td>
                        </tr>
                        <tr>
                            <th style="background-color: green" class="text-white w-auto">Adresse2</th>
                            <td class="w-100"><?php echo $profil['adresse2'] ?></td>
                        </tr>
                        <tr>
                            <th style="background-color: green" class="text-white w-auto">Lieu</th>
                            <td class="w-100"><?php echo $profil['lieu'] ?></td>
                        </tr>
                        <tr>
                            <th style="background-color: green" class="text-white w-auto">Expérience</th>
                            <td class="w-100"><?php echo $profil['experience'] ?></td>
                        </tr>
                        <tr>
                            <th style="background-color: green" class="text-white w-auto">Communication</th>
                            <td class="w-100"><?php echo $profil['communication'] ?></td>
                        </tr>
                        <tr>
                            <th style="background-color: green" class="text-white w-auto">Situation</th>
                            <td class="w-100"><?php echo $profil['situation'] ?></td>
                        </tr>
                        <tr>
                            <th style="background-color: green" class="text-white w-auto">Intitule</th>
                            <td class="w-100"><?php echo $detail['intitule'] ?></td>
                        </tr>
                        <tr>
                            <th style="background-color: green" class="text-white w-auto">Description</th>
                            <td class="w-100"><?php echo $detail['description'] ?></td>
                        </tr>
                        <tr>
                            <th style="background-color: green" class="text-white w-auto">Lien</th>
                            <td class="w-100"><?php echo $detail['lien'] ?></td>
                        </tr>
                        <tr>
                            <th style="background-color: green" class="text-white w-auto">Typologie</th>
                            <td class="w-100"><?php echo $detail['typologie'] ?></td>
                        </tr>
                        <tr>
                            <th style="background-color: green" class="text-white w-auto">Projet_cree</th>
                            <td class="w-100"><?php echo $detail['projet_cree'] ?></td>
                        </tr>
                        <tr>
                            <th style="background-color: green" class="text-white w-auto">Région</th>
                            <td class="w-100"><?php echo $detail['region'] ?></td>
                        </tr>
                        <tr>
                            <th style="background-color: green" class="text-white w-auto">Secteur</th>
                            <td class="w-100"><?php echo $detail['secteur'] ?></td>
                        </tr>
                        <tr>
                            <th style="background-color: green" class="text-white w-auto">Bénéficiaire</th>
                            <td class="w-100"><?php echo $detail['beneficie'] ?></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    </div>
</body>

</html>
