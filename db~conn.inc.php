<?php 
header('Content-Type: text/html; charset=UTF-8');

if(basename($_SERVER['PHP_SELF']) == basename(__FILE__)) {
		header("location: ../dbclose.inc.php");
}
/*
$conn = new mysqli("localhost", "username", "password", "dbname");
if ($conn->connect_errno) {
		echo "NAPAKA pri povezovanju z bazo: " . $conn->connect_error;
}
*/
?>
