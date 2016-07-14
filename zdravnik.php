

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"> 
        <title>Dr. Datum</title>
        <link href="https://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet">
        <link rel='stylesheet' href='fullcalendar/fullcalendar.css' />
        <link rel="stylesheet" type="text/css" href="css/style.css">
        
        <?php
            require_once('getdatafromdb.inc.php');
        ?>
    </head>

    <body>
        <div class="container">
            <div class="row">
              <div class="col-md-6">   
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
              </div>  
            </div>
            
          <div class="panel-group" id="narocilnice">
              
          </div>
          
    	  <div id='calendar' class="koledar-zdravnik"></div>
          
        </div>
        
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script src="https://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
        <script src='fullcalendar/lib/moment.min.js'></script>
        <script src='fullcalendar/fullcalendar.js'></script>
        <script src='fullcalendar/lang-all.js'></script>
        <script src="js/app.js"></script>
    </body>

</html>