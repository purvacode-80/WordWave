<?php
session_start();

// Database connection
$servername = "localhost";
$username = "root";        
$password = "Purva_DB#23";            
$dbname = "user_management"; 
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle signup form submission
if (isset($_POST['signup'])) 
{
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);
    
    // Check if username or email already exists
    $check_query = "SELECT * FROM users WHERE username='$username' OR email='$email'";
    $result = $conn->query($check_query);
    
    if ($result->num_rows > 0) {
        echo "Username or Email already exists. Please try again.";
    } else {
        // Hash the password
        $hashed_password = password_hash($password, PASSWORD_DEFAULT);
        
        // Insert new user into the database
        $sql = "INSERT INTO users (username, email, password) VALUES ('$username', '$email', '$hashed_password')";
        
        if ($conn->query($sql) === TRUE) {
            echo "Signup successful! Please login.";
        } else {
            echo "Error: " . $sql . "<br>" . $conn->error;
        }
    }
}

// Handle login form submission
if (isset($_POST['login'])) {
    $username = mysqli_real_escape_string($conn, $_POST['username']);
    $password = mysqli_real_escape_string($conn, $_POST['password']);

    // Retrieve user from the database
    $sql = "SELECT * FROM users WHERE username='$username'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        
        // Verify the password
        if (password_verify($password, $user['password'])) {
            $_SESSION['user'] = $user['username'];
            $_SESSION['user_id'] = $user['id'];
            //echo "Login Successfully...";
            header("Location: D:\VS_Codes\Project\Homepage-PW\homepage.html");
            exit();
        } else {
            echo "Incorrect password!";
        }
    } else {
        echo "User not found!";
    }
}

// Handle logout
if (isset($_GET['logout'])) {
    session_destroy();
    header("Location: login.html");
    exit();
}

?>