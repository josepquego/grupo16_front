<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db_movies";
$puerto = "3306";

$conn = new mysqli($servername, $username, $password, $dbname, $puerto);

if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode(array("message" => "Error interno del servidor: " . $conn->connect_error)));
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $postBody = file_get_contents("php://input");
    $data = json_decode($postBody, true);
    $email = $data['email'];
    $password = $data['password'];

    if ($email && $password) {
        $query = "SELECT * FROM personas WHERE email = '$email' AND pass = '$password'";
        $result = $conn->query($query);

        if ($result->num_rows > 0) {
            http_response_code(200);
            echo json_encode(array("message" => "Usuario encontrado. Login exitoso."));
        } else {
            http_response_code(404);
            echo json_encode(array("message" => "Usuario no encontrado. Verifica los datos proporcionados."));
        }
    } else {
        http_response_code(400);
        echo json_encode(array("message" => "Faltan campos obligatorios. Verifica los datos proporcionados."));
    }
}

$conn->close();
?>
