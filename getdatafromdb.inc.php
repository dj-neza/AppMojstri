<?php 
$danes = date ('Y-m-d 00:00:00'); //prikazujemo le od danes zjutraj naprej
//dummy 
$idz = 1
$sql = "SELECT ime, priimek, email, razlog, zacetek, FROM Prijava  " .
	"WHERE " . $danes . " < zacetek AND idZdravnik = ". $idz . ";";
$stmt = $conn->prepare($sql);
$stmt->bind_param("si", addslashes($danes), $idz);

$stmt->execute();
$num_rows = $stmt->num_rows;//da opustimo zadnjo vejico, ker za zadnjim objektom ni vejice ampak ]
$i_rows = 0;
$stmt->bind_result($ime, $priimek, $email, $razlog, $datum);
echo '<script> let narocila = ['
while($stmt->fetch()) {
	$i_rows++: 
//dummy
	$ime = 'Gregor';
	$priimek = 'Leskovšek';
	$mail = 'legrega@gmail.com';
	$razlog = 'dlesen mi je zatekla';
	$datum = date('d.m.Y',strtotime($date));
	$ura = date('H:i', strtotime($date));
	echo '{ }';
	if  ($i_rows < $num_rows) {
		echo ',';
	}
}
	$stmt->close();
echo '];</script>'

?>
