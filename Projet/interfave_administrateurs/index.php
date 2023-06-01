<?php
session_start();
if (isset($_REQUEST['admin'])) {
    require('./php/connect.php');
    $email = $_REQUEST['email'];
    $password = $_REQUEST['password'];
    $req = "select * from admin where email='$email' and password='$password'";
    $query = mysqli_query($connect, $req);
    if (mysqli_num_rows($query)) {
        //$data = mysqli_fetch_assoc($query);
        $_SESSION['login'] = 1;
        header("location:./php/admin.php");
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz" crossorigin="anonymous"></script>
    <title>EST</title>
    <style>
        .bg-purple {
            background-color: var(--purple);
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="row">
            <div class="col-md-12 min-vh-100 d-flex flex-column justify-content-center">
                <div class="row">
                    <div class="col-lg-6 col-md-8 mx-auto">
                        <div class="card rounded shadow shadow-sm">
                            <div class="card-header">
                                <h3 class="mb-0">Login</h3>
                            </div>
                            <div class="card-body">
                                <form class="form" role="form" autocomplete="off" id="formLogin" novalidate="" method="POST">
                                    <div class="form-group">
                                        <label for="email">Email</label>
                                        <input type="text" class="form-control form-control-lg rounded-0" name="email" id="uname1" placeholder="Enter Email" value="lahbib@gmail.com" required="">
                                    </div>
                                    <div class="form-group">
                                        <label>Password</label>
                                        <input type="password" class="form-control form-control-lg rounded-0" id="pwd1" required="" autocomplete="new-password" name="password" value="lahbib">
                                    </div>
                                    <button type="submit" class="btn btn-success btn-lg float-right my-3" id="btnLogin" name="admin">Login</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>