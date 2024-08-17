<?php

$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "student_management";

$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}


function addStudent($name, $email, $subject, $marks) {
    global $conn;
    $sql = "INSERT INTO students (name, email, subject, marks) VALUES ('$name', '$email', '$subject', $marks)";
    $conn->query($sql);
}

function getStudents() {
    global $conn;
    $sql = "SELECT * FROM students";
    $result = $conn->query($sql);
    $students = [];
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $students[] = $row;
        }
    }
    return $students;
}

function updateStudent($student_id, $name, $email, $subject, $marks) {
    global $conn;
    $sql = "UPDATE students SET name='$name', email='$email', subject='$subject', marks=$marks WHERE student_id=$student_id";
    $conn->query($sql);
}

function deleteStudent($student_id) {
    global $conn;
    $sql = "DELETE FROM students WHERE student_id=$student_id";
    $conn->query($sql);
}
?>
