<?php
header('Content-Type: application/json');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "db_movies";
$port = "3306";

$conn = new mysqli($servername, $username, $password, $dbname, $port);

if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode(array("message" => "Error interno del servidor: " . $conn->connect_error)));
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $postBody = file_get_contents("php://input");
    $data = json_decode($postBody, true);

    // Escapar los datos para prevenir inyecciones SQL
    $nombre = $conn->real_escape_string($data['nombre']);
    $apellido = $conn->real_escape_string($data['apellido']);
    $email = $conn->real_escape_string($data['email']);
    $password = $conn->real_escape_string($data['password']);
    $fechaNacimiento = $conn->real_escape_string($data['fechaNacimiento']);
    $pais = $conn->real_escape_string($data['pais']);

    if ($nombre && $apellido && $email && $password && $fechaNacimiento && $pais) {
        $query = "INSERT INTO personas (nombre, apellido, email, pass, fechaNacimiento, pais) 
                  VALUES ('$nombre', '$apellido', '$email', '$password', '$fechaNacimiento', '$pais')";

        if ($conn->query($query) === TRUE) {
            http_response_code(201);
            echo json_encode(array("message" => "Usuario creado correctamente", "idUsuario" => $conn->insert_id));
        } else {
            http_response_code(500);
            echo json_encode(array("message" => "Error al crear el usuario: " . $conn->error));
        }
    } else {
        http_response_code(400);
        echo json_encode(array("message" => "Debe completar todos los campos"));
    }
}

$conn->close();
?>
