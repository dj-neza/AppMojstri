<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8"> 
        <title>Dr. Datum</title>
        <link href="https://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="css/style.css">
    </head>

    <body>
        <div class="container">
          <div class="jumbotron hudo-ozadje" align="center">
            <img src="icon_brainstorm.png" class="img-rounded" width="90" height="90">
            <h1>Dr. Datum</h1>
            <p>Naročanje še nikoli ni bilo hitrejše in enostavnejše kot takrat, kadar je na izmeni Dr. Datum!</p>
            <p> Izberi, potrdi, pridi!</p>
          </div>
          
          <div class="row">
            <div class="col-lg-6">
                <a href="http://www.google.com/">
                    <button type="button" class="btn btn-info gumb" width="100%">
                        <img src="patient.png" class="img-thumbnail" id="pacient" onclick="preusmeri_pacient()">
                        <h4>Naroči se!</h4>
                    </button>
                </a>
            </div>
            <div class="col-lg-6">
                <a href="http://www.google.com/">
                    <button type="button" class="btn btn-info gumb" width="100%" onclick="preusmeri_zdravnik()">
                        <img src="doctors.png" class="img-thumbnail" id="pacient">
                        <h4>Preveri naročila!</h4>
                    </button>
                </a>
            </div>
          </div>
          
          
          <div class="panel panel-default" id="noga">
            <div class="panel-heading">
                <div class="row">
                  <div class="col-md-10">
                      <h5>&copy AppMojstri</h5>
                  </div>
                  <div class="col-md-1">
                      <a target="_blank" href="https://www.facebook.com/drdatum/"><img alt="follow me on facebook" src="https://c866088.ssl.cf3.rackcdn.com/assets/facebook30x30.png" id="fb"</a>
                  </div>
                  <div class="col-md-1">
                      <a target="_blank" href="https://twitter.com/dr_datum"><img alt="follow me on Twitter" src="https://c866088.ssl.cf3.rackcdn.com/assets/twitter30x30.png" id="twitter"</a>
                  </div>
                </div>  
            </div>
          </div>
        </div>
        
        
        
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
        <script src="https://netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
        <script src="js/app.js"></script>
    </body>

</html>