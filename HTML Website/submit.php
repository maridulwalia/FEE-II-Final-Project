<?php
$email = filter_input(INPUT_POST, 'email');
if(!empty($email)){
    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "Maridul@2005";
    $dbname = "collgework";

    //Create Connection
    $conn= new mysqli($host,$dbusername,$dbpassword,$dbname);

    if(mysqli_connect_error()){
        die('Connect error('.mysqli_connect_errno().')'
        .mysqli_connect_error());
    }
    else{
        $sql="INSERT INTO feesubmissions (email)
        values('$email')";
        if($conn->query($sql)){
            echo "New record is inserted successfully";
    }
    else{
        echo "Error: ".$sql,"<br>". $conn->error;
    }
    $conn->close();
}
}
else{
    echo"Email should not be empty!!";
    die();
}