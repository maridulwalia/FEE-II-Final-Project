<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set appropriate headers for CORS
header('Access-Control-Allow-Origin: *'); // Allow all origins for testing
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Initialize response array
$response = array();

// MySQL database connection settings
$servername = "localhost";
$username = "root";
$password = "Maridul@2005";
$dbname = "Contact_Form";

// Create connection using MySQLi
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    $response['status'] = 'error';
    $response['message'] = "Connection failed: " . $conn->connect_error;
    echo json_encode($response);
    exit();
}

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve and sanitize input data
    $name = filter_var(trim($_POST['name']), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
    $phone = filter_var(trim($_POST['phone']), FILTER_SANITIZE_NUMBER_INT);
    $message = filter_var(trim($_POST['message']), FILTER_SANITIZE_STRING);

    // Validate required fields
    if (empty($name) || empty($email) || empty($message)) {
        $response['status'] = 'error';
        $response['message'] = 'Please fill in all required fields.';
    } elseif (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Validate email format
        $response['status'] = 'error';
        $response['message'] = 'Invalid email format.';
    } else {
        // Use a prepared statement to prevent SQL injection
        $stmt = $conn->prepare("INSERT INTO submissions (name, email, phone, message) VALUES (?, ?, ?, ?)");
        if ($stmt) {
            // Bind the parameters to the SQL query
            $stmt->bind_param("ssss", $name, $email, $phone, $message);

            // Execute the prepared statement
            if ($stmt->execute()) {
                $response['status'] = 'success';
                $response['message'] = 'Data stored successfully!';
            } else {
                $response['status'] = 'error';
                $response['message'] = 'Error storing data: ' . $stmt->error;
            }

            // Close the prepared statement
            $stmt->close();
        } else {
            $response['status'] = 'error';
            $response['message'] = 'Database query preparation failed.';
        }
    }
} else {
    // Return error for invalid request method
    $response['status'] = 'error';
    $response['message'] = 'Invalid request method. Only POST is allowed.';
}

// Debugging - Check what response looks like before JSON encoding
var_dump($response); // Output the response array to see its structure

// Close the database connection
$conn->close();

// Return the response as JSON
echo json_encode($response);

// If json_encode fails, check for last JSON error
if (json_last_error() !== JSON_ERROR_NONE) {
    echo json_last_error_msg();
}
