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
        
        <div class="container">
            
            <div class="row forma-pacient">
                
                <div class="levi-del-pacient col-xs-6" style="text-align: center;">
                    
                    <div class="btn-group" >
                	  <h3>ZDRAVSTVENA USTANOVA</h3>
                      <button type="button" class="btn">Izberite zdravstveni dom</button>
                      <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
                        <span class="caret"></span>
                      </button>
                      <ul class="dropdown-menu">
                        <li><a href="#">ZD Ljubljana - enota Bežigrad</a></li>
                        <li><a href="#">ZD Ljubljana - enota Moste-Polje</a></li>
                      </ul>
                    </div>
                    
                    <br/>
                      
                    <div class="btn-group">
                      <h3>ZDRAVNIK</h3>
                      <button type="button" class="btn">Izberite zdravnika</button>
                      <button type="button" class="btn dropdown-toggle" data-toggle="dropdown">
                        <span class="caret"></span>
                      </button>
                      <ul class="dropdown-menu">
                        <li><a href="#">Mojca</a></li>
                        <li><a href="#">Ana</a></li>
                      </ul>
                    </div>
                    
                    <h3>IZBIRA TERMINA</h3>
                    <h4>Razpoložljivi termini</h4>
                    <div id="razpolozljivi-termini">
                        <div class="termini">
                            <p class="change-font">pon, 18.7.2016 13:00</p>
                        </div> 
                        <div class="termini">
                            <p class="change-font">pon, 18.7.2016 17:30</p>
                        </div>
                        <div class="termini">
                            <p class="change-font">tor, 19.7.2016 7:20</p>
                        </div>
                    </div> 
                    <h4>Želena ura pregleda</h4>
                    <div id="ura pregleda">
                        <div class="termini">
                            <p class="change-font">7:00 - 10:59</p>
                        </div> 
                        <div class="termini">
                            <p class="change-font">11:00 - 14:59</p>
                        </div>
                        <div class="termini">
                            <p class="change-font">15:00 - 19:00</p>
                        </div>
                    </div>
                    <h4>Željen datum</h4>
                    <div id="ura pregleda">
                        <div class="termini">
                            <p class="change-font">čimprej</p>
                        </div> 
                        <div class="termini">
                            <p class="change-font">naslednji teden</p>
                        </div>
                        <div class="termini">
                            <p class="change-font">naslednji mesec</p>
                        </div>
                    </div>
    	            
                </div>
                
                <div class="desni-del-pacient col-md-6">
                    <div class="panel panel-info odmik"> 
                        <div class="panel-heading"> Opišite težave </div> 
                        <div class="panel-body" id="tezave"> 
                            <textarea class="form-control" rows="5" id="opis_tezav"></textarea>
                        </div> 
                    </div>
                    
                    <div class="panel panel-info odmik"> 
                        <div class="panel-heading"> Vaši podatki </div> 
                        <div class="panel-body" id="podatki"> 
                            <div class="form-group">
                              <label> Št. zdravstvenega zavarovanja: </label>
                              <input type="text" class="form-control" id="st_kartice">
                            </div>
                            <div class="form-group">
                              <label> E-mail: </label>
                              <input type="text" class="form-control" id="email">
                            </div>
                            <div class="form-group">
                              <label> Telefon: </label>
                              <input type="text" class="form-control" id="tel_st">
                            </div>
                        </div> 
                    </div>
                    
                    <button type="button" class="btn btn-primary"> Naroči se! </button>
                </div>
                
            </div>
            
        </div>
    	

    </body>

</html>