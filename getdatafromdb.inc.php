<?php
/*
include_once("db~conn.inc.php"); 

$zdaj = date('Y.m.d');
$sql = "SELECT ime, priimek, email, razlog, zacetek, datum FROM termin WHERE ? >  zacetek;";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $zdaj);
$stmt->execute();
$stmt->bind_result($wuq_id, $security_question_id, $answer);
$stmt->store_result();
*/
$num_rows = 1;//$stmt->num_rows;
$i = 0;
$ime = 'Janez';
$priimek = 'Novak';
$mail = 'janez@heci.si';
$razlog = 'dlesen se mi je vnela';
$datum = '2016-07-19';
$datumSI = DateTime::createFromFormat('Y-m-d', $datum);
$datumSI = $datumSI->format('d.m.Y');
$ura = '11:30:00';
$uraMin = substr($ura, 0, strlen($ura) -3);

echo '<script>let narocila = [';
while($i < $num_rows) {
	if (/*$stmt->fetch()*/true) {
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


echo '];</script>';
//require_once("dbclose.inc.php"); 
?>
