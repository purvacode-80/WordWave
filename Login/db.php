<?php
$servername = "localhost";
$username = "root";        
$password = "Purva_DB#23";            

// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Create database
$sql = "CREATE DATABASE IF NOT EXISTS user_data";
if ($conn->query($sql) === TRUE) {
    echo "Database created successfully<br>";
} else {
    echo "Error creating database: " . $conn->error;
}

// Select the database
$conn->select_db("user_data");

// Create users table
$sql = "CREATE TABLE IF NOT EXISTS users (
    id INT(11) AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(255) NOT NULL,UNIQUE (username),UNIQUE (email)
)";

if ($conn->query($sql) === TRUE) {
    echo "Table `users` created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$conn->close();
?>
