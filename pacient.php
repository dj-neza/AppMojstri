<?php
	include_once('getUZTData.inc.php');
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
   		<meta http-equiv="X-UA-Compatible" content="IE=edge">
    	<meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Naročanje pacientov</title>
        <link href="https://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet">
        <link rel='stylesheet' href='fullcalendar/fullcalendar.css' />
        <link rel="stylesheet" type="text/css" href="css/style.css">
        
        <?php
            require_once('getdatafromdb.inc.php');
        ?>

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script src="https://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
        <script src='fullcalendar/lib/moment.min.js'></script>
        <script src='fullcalendar/fullcalendar.js'></script>
        <script src="js/app.js"></script>
    </head>

    <body>
        <div class="jumbotron ozadje" align="center">
            <img src="ikona_podstran.png" class="img-rounded" width="140" height="70">
            <h1 class="change-font-barva2">NAROČI SE!</h1>
          </div>
        <div class="container">
            <form name="pacient_form" method="post" action="pacient.php">    
            
                <div class="panel panel-success" id="uspeh" style="display: none; text-align: center">
                  <div class="panel-heading change-font">Naročilo je bilo uspešno poslano.</div>
                </div>
                
                <div class="row forma-pacient">
                
                <div class="levi-del-pacient col-md-6" style="text-align: center;">
                    <select class="form-control input-mini drop_down" id="zd">
                        <option value="" disabled selected style=" font-family: 'Trebuchet MS'"> Vaš zdravsteni dom </option>
                        <!--option id="1" value="bezigrad" style=" font-family: 'Trebuchet MS'">ZD Ljubljana - enota Bežigrad</option>
                        <option id="2" value="moste" style=" font-family: 'Trebuchet MS'">ZD Ljubljana - enota Moste-Polje</option>
                        <option id="3" value="sentvid" style=" font-family: 'Trebuchet MS'">ZD Ljubljana - enota Šentvid </option-->
                     </select>
                  
                     <select class="form-control input-mini drop_down" id="zd_zdravnik">
                        <option value="" disabled selected style=" font-family: 'Trebuchet MS'"> Zdravnik </option>
                        <!--
                        <option id="zdr1" value="bezigrad1" style=" font-family: 'Trebuchet MS'"> dr. med. Mojca Horvat </option>
                        <option id="zdr2" value="bezigrad2" style=" font-family: 'Trebuchet MS'"> dr. med. Janez Novak </option>
                        <option id="zdr3" value="sentvid1" style=" font-family: 'Trebuchet MS'"> dr. med. Peter Merše </option>
                        <option id="zdr4" value="sentvid2" style=" font-family: 'Trebuchet MS'"> dr. med. Janja Zupančič </option>
                        <option id="zdr5" value="moste1" style=" font-family: 'Trebuchet MS'"> dr. med. Jernej Novak </option>
                        <option id="zdr6" value="moste2" style=" font-family: 'Trebuchet MS'"> dr. med. Ana Horvat </option>
                        -->
                     </select>
                    
                    <div class="panel panel-info odmik"> 
                        <div class="panel-heading change-font">Predlagani termini</div> 
                        <div class="panel-body" id="tezave" onclick="prikazi_termine(vrni3termine(termini, zdravniki, ustanove))"> 
                        
                            <button type="button" class="btn btn-primary dodatne-moznosti">
                                Dodatne možnosti iskanja termina<span class="presledek"></span>
                                <span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>
                            </button>
                            <div class="filter dont-display">
                                
                                <label class="change-font">Želena ura pregleda</label>
                                <div id="razpolozljive-ure">
                                    <div class="panel panel-info odmik ura change-font-barva" id="0">7:00 - 10:59</div>
                                    <div class="panel panel-info odmik ura change-font-barva" id="1">11:00 - 14:59</div>
                                    <div class="panel panel-info odmik ura change-font-barva" id="2">15:00 - 19:00</div>
                                </div>
                               
                                <label class="change-font">Želen datum</label>
                                <div id="razpolozljivi-datumi">
                                    <div class="panel panel-info odmik datum change-font-barva" id="10">čimprej</div>
                                    <div class="panel panel-info odmik datum change-font-barva" id="11">naslednji teden</div>
                                    <div class="panel panel-info odmik datum change-font-barva" id="12">naslednji mesec</div>
                                </div>
                                
                                
                                
                            </div>
                            
                            <!--
                            <div id="razpolozljivi-termini">
                                <div class="panel panel-info odmik termin change-font-barva">pon, 18.7.2016 13:00</div> 
                                <div class="panel panel-info odmik termin change-font-barva">pon, 18.7.2016 17:30</div>
                                <div class="panel panel-info odmik termin change-font-barva">tor, 19.7.2016 7:20</div>
                            </div>
                            -->
                            
                            <div id="razpolozljivi-termini">
                                
                            </div>
                        
                        </div>
                    </div>
                    
                </div>
                
                <div class="desni-del-pacient col-md-6" style="text-align: center;">
                    <div class="panel panel-info odmik"> 
                        <div class="panel-heading change-font"> Opišite težave </div> 
                        <div class="panel-body" id="tezave"> 
                            <textarea class="form-control" rows="5" id="opis_tezav"></textarea>
                        </div> 
                    </div>
                    
                    <div class="panel panel-info odmik"> 
                        <div class="panel-heading change-font"> Vaši podatki </div> 
                        <div class="panel-body" id="podatki"> 
                            <div class="form-group">
                              <label class="change-font-barva"> Št. zdravstvene kartice: </label>
                              <input type="text" class="form-control" id="st_kartice">
                            </div>
                            <div class="form-group">
                              <label class="change-font-barva"> E-mail: </label>
                              <input type="text" class="form-control" id="email">
                            </div>
                            <div class="form-group">
                              <label class="change-font-besedilo"> Telefon: </label>
                              <input type="text" class="form-control" id="tel_st">
                            </div>
                        </div>
                    </div>
                </div>
                
                <div style="text-align: center;">
                    <input type="submit" class="btn btn-primary" value="Naroči se!">
                </div>
                
                <input type="hidden" name="poslano" value="1">
        
            </form>
        </div>
            
        
    <?php
        if($_POST['poslano'] == 1) {
        ?>
        <script>
            $('#uspeh').show(500);
        </script>
        <?php
        }
    ?>
	

    </body>

</html>
