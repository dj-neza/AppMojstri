<?php

include_once("db~conn.inc.php"); 

$zdaj = date('Y-m-d');
$zdajUra = date('H:i');
$sql = "SELECT ime, priimek, email, razlog, zacetek, datum FROM Termin AS T, Prijava AS PR, Pacient AS PA WHERE ((? <  T.datum) OR ((? = T.datum) AND (?< T.zacetek))) AND T.idTermin = PR.idTermin AND PA.idPacient = PR.idPacient;";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $zdaj, $zdaj, $zdajUra);
$stmt->execute();
$stmt->bind_result($ime, $priimek, $mail, $razlog, $ura, $datum);
$stmt->store_result();

$num_rows = $stmt->num_rows;
$i = 0;
/*$ime = 'Janez';
$priimek = 'Novak';
$mail = 'janez@heci.si';
$razlog = 'dlesen se mi je vnela';
$datum = '2016-07-19';
$datumSI = DateTime::createFromFormat('Y-m-d', $datum);
$datumSI = $datumSI->format('d.m.Y');
$ura = '11:30:00';
*/
$uraMin = substr($ura, 0, strlen($ura) -3);

echo '<script>var narocila = [';
while($stmt->fetch()) {
		echo '{ime:"' . $ime . '",' .
			'priimek:"' . $priimek . '",' .
			'mail:"' . $mail . '",' .
			'razlog:"' . $razlog . '",' .
			'datum:"' . $datum . '",' .
			'ura:"' . $uraMin . '"}';

		if (++$i != $num_rows) {
			echo ',';
		}

	
}	
/*
$ime = 'Jure';
$priimek = 'Nagy';
$mail = 'jure@heci.si';
$razlog = 'zob me boli';
$datum = '2016-07-18';
$datumSI = DateTime::createFromFormat('Y-m-d', $datum);
$datumSI = $datumSI->format('d.m.Y');
$ura = '9:00:00';
$uraMin = substr($ura, 0, strlen($ura) -3);

while($i < $num_rows) {
	if (/*$stmt->fetch()*//*true) {
		echo '{ime:"' . $ime . '",' .
			'priimek:"' . $priimek . '",' .
			'mail:"' . $mail . '",' .
			'razlog:"' . $razlog . '",' .
			'datum:"' . $datumSI . '",' .
			'ura:"' . $uraMin . '"}';

		if (++$i != $num_rows) {
			echo ',';
		}

	}
}	
*/

echo '];</script>';
$stmt->close();

require_once("dbclose.inc.php"); 
?>
