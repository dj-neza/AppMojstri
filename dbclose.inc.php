<?php 
if(basename($_SERVER['PHP_SELF']) == basename(__FILE__)) {
		header("location: index.php");
}

$conn->close();
?>
