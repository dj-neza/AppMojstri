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
          <div class="jumbotron ozadje" align="center">
            <img src="stetoskop.png" class="img-rounded" width="120" height="120">
            <h1 class="change-font dr_datum">Dr. Datum</h1>
            <p class="change-font">Naročanje še nikoli ni bilo hitrejše in enostavnejše kot takrat, kadar je na izmeni Dr. Datum!</p>
            <p class="change-font"> Izberi, potrdi, pridi!</p>
          </div>
          
          <div class="row">
            <div class="col-lg-6">
                <a href="pacient.php">
                    <button type="button" class="btn btn-info gumb" width="100%">
                        <img src="pacient.png" class="img-rounded" id="pacient">
                        <h3 class="change-font">Naroči se!</h3>
                    </button>
                </a>
            </div>
            <div class="col-lg-6">
                <a href="zdravnik.php">
                    <button type="button" class="btn btn-info gumb" width="100%">
                        <img src="zdravnik.png" class="img-rounded" id="pacient">
                        <h3 class="change-font">Preveri naročila!</h3>
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