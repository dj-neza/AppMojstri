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

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script src="https://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
        <script src='fullcalendar/lib/moment.min.js'></script>
        <script src='fullcalendar/fullcalendar.js'></script>
        <script src="js/app.js"></script>
    </head>

    <body>
        <div class="jumbotron ozadje" align="center">
            <img src="ikona_podstran.png" class="img-rounded" width="158" height="80">
            <h1 class="change-font-barva">NAROČI SE!</h1>
          </div>
        <div class="container">
            
            <div class="row forma-pacient">
                
                <div class="levi-del-pacient col-md-6" style="text-align: center;">
                    <select class="form-control input-mini drop_down" id="zd">
                        <option value="" disabled selected> Vaš zdravsteni dom </option>
                        <option id="zd1" value="bezigrad">ZD Ljubljana - enota Bežigrad</option>
                        <option id="zd2" value="moste">ZD Ljubljana - enota Moste-Polje</option>
                        <option id="zd3" value="sentvid">ZD Ljubljana - enota Šentvid </option>
                     </select>
                  
                     <select class="form-control input-mini drop_down" id="zd_zdravnik">
                        <option value="" disabled selected> Zdravnik </option>
                        <option id="zdr1" value="bezigrad1"> dr. med. Mojca Horvat </option>
                        <option id="zdr2" value="bezigrad2"> dr. med. Janez Novak </option>
                        <option id="zdr3" value="sentvid1"> dr. med. Peter Merše </option>
                        <option id="zdr4" value="sentvid2"> dr. med. Janja Zupančič </option>
                        <option id="zdr5" value="moste1"> dr. med. Jernej Novak </option>
                        <option id="zdr6" value="moste2"> dr. med. Ana Horvat </option>
                     </select>
                    
                    <h3>IZBIRA TERMINA</h3>
                    <h4>Razpoložljivi termini</h4>
                    <div id="razpolozljivi-termini">
                        <div class="termin">
                            <p class="change-font">pon, 18.7.2016 13:00</p>
                        </div> 
                        <div class="termin">
                            <p class="change-font">pon, 18.7.2016 17:30</p>
                        </div>
                        <div class="termin">
                            <p class="change-font">tor, 19.7.2016 7:20</p>
                        </div>
                    </div>
                    
                    <h4>Želena ura pregleda</h4>
                    <div id="razpolozljive-ure">
                        <div class="ura">
                            <p class="change-font">7:00 - 10:59</p>
                        </div> 
                        <div class="ura">
                            <p class="change-font">11:00 - 14:59</p>
                        </div>
                        <div class="ura">
                            <p class="change-font">15:00 - 19:00</p>
                        </div>
                    </div>
                    
                    <h4>Željen datum</h4>
                    <div id="razpolozljivi-datumi">
                        <div class="datum">
                            <p class="change-font">čimprej</p>
                        </div> 
                        <div class="datum">
                            <p class="change-font">naslednji teden</p>
                        </div>
                        <div class="datum">
                            <p class="change-font">naslednji mesec</p>
                        </div>
                    </div>
    	            
                </div>
                
                <div class="desni-del-pacient col-md-6">
                    
                    <p>Izbrani termini:</p>
    	
                	<p>Opišite problem:</p>
                	<input type="text" name="opis-problema">
                	
                	<p>Podatki:</p>
                	<input type="text" name="mail">
                	<input type="text" name="telefon">
                	<input type="text" name="zdr-kartica">
                    
                </div>
                
            </div>
            
        </div>
    	

    </body>

</html>