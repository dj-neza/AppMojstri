<?php
include_once("db~conn.inc.php");

//**********
// TERMIN
//**********
$zdaj = date('Y-m-d');
$sql = "SELECT idTermin, idZdravnik, zacetek, datum FROM Termin WHERE ? >  zacetek;";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $zdaj);
$stmt->execute();
$stmt->bind_result($idTermin, $idZdravnik, $zacetek, $datum);
$stmt->store_result();
$numR = $stmt->num_rows;
$i = 0;
$datumSI = DateTime::createFromFormat('Y-m-d', $datum);
$datumSI = $datumSI->format('d.m.Y');
$uraMin = substr($zacetek, 0, strlen($zacetek) -3);

echo '<script>let termini = [';
while($stmt->fetch()) {
	echo '{idTermin: '. $idTermin . ',' .
	 	'idZdravnik: '. $idZdravnik . ',' .
	 	'ura: "' $uraMin . '",' .
	 	'datum: "'. $datumSI . '"}';
	if (++$i < $numR) {
		echo ', ';
	}
}
echo '];';
$stmt->close();
//**********
// USTANOVA
//**********
$sql = "SELECT idUstanova, naziv FROM Ustanova;";
$stmt = $conn->prepare($sql);
$stmt->execute();
$stmt->bind_result($idUstanova, $naziv);
$stmt->store_result();
$numR = $stmt->num_rows;
$i = 0;

echo ' let ustanove = [';
while($stmt->fetch()) {
        echo '{idUstanova: '. $idUstanova . ',' .
                'naziv: "' $naziv . '"}' .
        if (++$i < $numR) {
                echo ', ';
        }
}
echo '];';
$stmt->close();

//**********
// ZDRAVNIK
//**********
$sql = "SELECT idZdravnik, idUstanova, ime, priimek FROM Zdravnik;";
$stmt = $conn->prepare($sql);
$stmt->execute();
$stmt->bind_result(i$idZdravnik, $idUstanova, $ime, $priimek);
$stmt->store_result();
$numR = $stmt->num_rows;
$i = 0;

echo ' let zdravniki = [';
while($stmt->fetch()) {
        echo '{idZdravnik: '. $idZdravnik . ',' .
         	'idUstanova: '. $idUstanova . ',' .
                'ime: "' $ime . '",' .
                'priimek: "' $priimek . '"}' .
        if (++$i < $numddR) {
                echo ', ';
        }
}
echo '];';



$stmt->close();

?>
