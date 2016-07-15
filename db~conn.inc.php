<?php 

if(basename($_SERVER['PHP_SELF']) == basename(__FILE__)) {
		header("location: index.php");
}

$conn = new mysqli("93.103.24.231", "appmojster", "mArAnd%2016", "appmojstri");
if ($conn->connect_errno) {
		echo "Failed to connect to MySql: " . $conn->connect_error;
}

?>
