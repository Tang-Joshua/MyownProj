<?php

$server_name="localhost";
$username="root";
$password="";
$database_name="josh_database";

$conn = mysqli_connect($server_name, $username, $password, $database_name);
// now check the connection

if(!$conn){
    die("Connection Failed:" . mysqli_connect_error());
}

if(isset($_POST['submit']))
{ 
        $id = $_POST['idd'];
        $fname = $_POST['fname'];
        $lname = $_POST['lname']; 
        $email = $_POST['email'];

        $sql_query = "INSERT INTO entry_details (ID, pangalan, Age, Uni)
        VALUES ('$id', '$fname', '$lname', '$email')";

        if (mysqli_query($conn, $sql_query)){
            echo "New Details Entry inserted successfully !"; 
        }
        else {
             echo "Error: " . $sql . "" . mysqli_error($conn);
        }
        mysqli_close($conn);
    }
    

?>