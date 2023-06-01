<?php
session_start();

if (!isset($_SESSION['login'])) {
    header('location:../');
    exit();
}
require("connect.php");
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
            <a class="btn btn-danger m-4 text-end " style="background-color: red;" href="./logout.php">Déconnecter</a>
        </div>
        <ul class="fs-5">
            <button type="button" class="btn btn-success" id="par">Participer</button>
            <button type="button" class="btn btn-success" id="con">Contact</button>
        </ul>
        <hr>
        <div class="table-responsive">
            <table class="table" id="participer">
                <thead class="text-white" style="background-color: green">
                    <tr>
                        <th>Nom et Prénom</th>
                        <th>dentifiant</th>
                        <th>Email</th>
                        <th>Genre</th>
                        <th>Découvrez ou Supprimer</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    $query = mysqli_query($connect, "select * from profil");
                    while ($profil = mysqli_fetch_assoc($query)) {
                        $detail = mysqli_fetch_assoc(mysqli_query($connect, "select * from detail where id_profil='" . $profil['id_profil'] . "'"));
                        echo "<tr><td>" . $profil['full_name'] . "</td>";
                        echo "<td>" . $profil['identifiant'] . "</td>";
                        echo "<td>" . $profil['email'] . "</td>";
                        echo "<td>" . $profil['gender'] . "</td>";
                        echo "<td><a href='./donnes.php?id_profil=" . $profil['id_profil'] . "' class='btn btn-success '>découvrez</button> <a class='btn btn-danger mx-5' href='delete_demand.php?id_profil=" . $profil['id_profil'] . "'>Supprimer</a></td></tr>";
                    }
                    ?>
                </tbody>
            </table>
        </div>
        <div id="msg" style="display: none;">
            <table class="table table-hover">
                <thead class="text-white" style="background-color: green">
                    <th>Id</th>
                    <th>Nom et prenom</th>
                    <th>Email</th>
                    <th>Message</th>
                    <th>Supprimer</th>
                </thead>
                <tbody>
                    <?php
                    $query1 = mysqli_query($connect, "select * from msg");
                    while ($msg = mysqli_fetch_assoc($query1)) {
                        echo "<td>" . $msg['id'] . "</td>";
                        echo "<td>" . $msg['full_name'] . "</td>";
                        echo "<td>" . $msg['email'] . "</td>";
                        echo "<td>" . $msg['msg'] . "</td>";
                        echo "<td><a class='btn text-white' style='background-color: red;' href='delete_msg.php?id_msg=" . $msg['id'] . "'>Supprimer</a></td></tr>";
                    }
                    ?>
                </tbody>
            </table>
        </div>
        <script>
            document.getElementById('par').onclick = () => {
                document.getElementById('participer').style.display = ""
                document.getElementById('msg').style.display = "none"
            }
            document.getElementById('con').onclick = () => {
                document.getElementById('participer').style.display = "none"
                document.getElementById('msg').style.display = "block"
            }
            if (window.location.href.includes('c=msg')) {
                document.getElementById('participer').style.display = "none"
                document.getElementById('msg').style.display = ""
            }
        </script>
    </div>
</body>

</html>