var main = function() {
    prikaz_marocil(narocila);
    
    $(".potrdi").click(function(){
        alert("Pošlji mail.");
        
        if ($('#minute').val().length == 0) {
            $('.opozorilo').show(300);
        }
        else {
            $('.opozorilo').hide();
        }
    });
    
    $(".zavrni").click(function(){
        alert("Ponudi nove možnosti.");
    });
};

$(document).ready(main);


var narocila = [
    {
        ime: 'Marko',
        priimek: 'Zeman',
        mail: 'markozeman@gmail.com',
        razlog: 'biubsuzbsuzbduzddudzusvdszvduvdutdvatvdtuadb8zfg7rvuf',
        datum: '12.07.2016',
        ura: '15:00'
    },    
    {
        ime: 'Patricija',
        priimek: 'Brečko',
        mail: 'patra@gmail.com',
        razlog: 'biubsuzbsuzbduzddudzusvdszvduvdugfdfdhdhfhhgghfoiiiciniundtdvatvdtuadb8zfg7rvuf',
        datum: '13.07.2016',
        ura: '16:00'
    },  
    {
        ime: 'Neža',
        priimek: 'Đ',
        mail: 'neđa@gmail.com',
        razlog: 'POPODekjbuinbiubsuzbsuzbduzddudzusvdszvduvdugfdfdhdhfhhgghfoiiiciniundtdvatvdtuadb8zfg7rvuf',
        datum: '15.07.2016',
        ura: '17:00'
    }
];


function prikaz_marocil (narocila) {
    for (var i=0; i<narocila.length; i++) {
        var ime_priimek = narocila[i].ime + " " + narocila[i].priimek;
        var mail = narocila[i].mail;
        var razlog = narocila[i].razlog;
        var datum = narocila[i].datum;
        var ura =  narocila[i].ura;
        $('#narocilnice').append(
        '<div class="panel panel-info odmik"> \
            <div class="panel-heading">'+ ime_priimek +'</div> \
            <div class="panel-body" id="podrobno" display:none;> \
                <p class="change-font">'+ razlog +'</p> \
                <label class="change-font" id="datum"> Datum: ' + datum + '</label> </br> \
                <label class="change-font" id="ura"> Ura: ' + ura + '</label> \
                <div class="form-group"> \
                    <label class="change-font"> Predviden čas pregleda v minutah: </label> \
                    <input type="text" class="form-control" id="minute" style="width: 60px; display: inline;"> \
                </div> \
                <button class="btn btn-primary btn-md potrdi"> \
                  <span class="glyphicon glyphicon-ok"></span> Potrdi \
                </button> \
                <button class="btn btn-danger btn-md zavrni" style="display: inline;"> \
                  <span class="glyphicon glyphicon-remove"></span> Zavrni \
                </button> \
                <p class="text-danger change-font opozorilo" style="display: none;"> Izpolnite pričakovano trajanje pregleda. </p> \
             </div> \
        </div>');
    }
}


