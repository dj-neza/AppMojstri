var main = function() {
    $('#calendar').fullCalendar({
        // put your options and callbacks here
        header: {
         left   : 'prev,next',
         center : 'title',
         right  : 'agendaDay, agendaWeek',
        },
        weekends: false, // will hide Saturdays and Sundays
        defaultView: 'agendaWeek',
        slotDuration: '00:10:00',
        minTime: '07:00:00',
        maxTime: '19:00:00'
    });

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
    
    
    // za design pacient.php
    
    // selectanje razpolozljivega termina
    $(".termin").on("click", function() {
        $('#razpolozljivi-termini').find('div').each(function(){
            $(this).removeClass("izbran-termin");
        });
        $(this).addClass("izbran-termin");
    });
    
    // selectanje ure pregleda
    $(".ura").on("click", function() {
        if ($(this).hasClass("izbrana-ura")) {
            $(this).removeClass("izbrana-ura");
        } else {
            $(this).addClass("izbrana-ura");
        }
        
    });
    
    // selectanje zeljenega datuma
    $(".datum").on("click", function() {
        if ($(this).hasClass("izbran-datum")) {
            $(this).removeClass("izbran-datum");
        } else {
            $('#razpolozljivi-datumi').find('div').each(function(){
                $(this).removeClass("izbran-datum");
            });
            $(this).addClass("izbran-datum");
        }
    });
    
    // filter
    $(".dodatne-moznosti").on("click", function() {
        if ($(".filter").hasClass("dont-display")) {
            $(".filter").removeClass("dont-display");
            $(".dodatne-moznosti").text("Skrij dodatne možnosti iskanja termina");
        } else {
            $(".filter").addClass("dont-display");
            $(".dodatne-moznosti").text("Prikaži dodatne možnosti iskanja termina");
        }
    });
    

    var zdravniki = []; // tukaj morajo biti zdravniki kot objekti s svojimi id-ji, id-ji ustanov kjer delajo, imeni...

    // val od optionov od selecta za izbrat ustanovo mora biti id ustanove
    
    $('#zd').change(function() {
        var value = $(this).find(':selected').val();
        $('#zd_zdravnik').empty();
        for (var i = 0; i < zdravniki.length; i++) {
            if (zdravniki[i].idUstanova == value) {
                var naziv; // to nekak sestavis iz imena, priimka
                $('#zd_zdravnik').append("<option val='" + zdravniki[i].idZdravnik + "'>" + naziv + "</option>");
            }
        }
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
            <div class="panel-body" id="podrobno"> \
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


