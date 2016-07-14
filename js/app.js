var main = function() {
    $('#calendar').fullCalendar({
        header: {
			left: 'title',
			center: 'agendaDay,agendaWeek,month',
			right: 'prev,next today'
		},
		editable: true,
		selectable: true,
			
        weekends: false, // will hide Saturdays and Sundays
        defaultView: 'agendaWeek',
        slotDuration: '00:20:00',
        minTime: '07:00:00',
        maxTime: '19:00:00',
        
        axisFormat: 'h:mm',
		columnFormat: {
            month: 'ddd',    // Mon
            week: 'ddd d', // Mon 7
            day: 'dddd M/d',  // Monday 9/7
            agendaDay: 'dddd d'
        },
        titleFormat: {
            month: 'MMMM yyyy', // September 2009
            week: "MMMM yyyy", // September 2009
            day: 'MMMM yyyy' // Tuesday, Sep 8, 2009
        },
		allDaySlot: false,
		
        eventSources: [
        // delavnik
        {
            events: [
                {
                    title  : '',
                    start  : '2016-07-11T07:00:00',
                    end    : '2016-07-11T14:00:00',
                    allDay: false
                },
                {
                    title  : '',
                    start  : '2016-07-12T07:00:00',
                    end    : '2016-07-12T14:00:00',
                    allDay: false
                    
                },
                {
                    title  : '',
                    start  : '2016-07-13T12:00:00',
                    end    : '2016-07-13T19:00:00',
                    allDay: false
                },
                {
                    title  : '',
                    start  : '2016-07-15T07:00:00',
                    end    : '2016-07-15T14:00:00',
                    allDay: false
                }
            ],
            color: '#5bc0de',
            textColor: '#103d47'
            
        },
        // dopust
        {
            events: [
                {
                    title  : 'DOPUST',
                    start  : '2016-07-14T07:00:00',
                    end    : '2016-07-14T19:00:00',
                    allDay: false
                }
            ],
            color: '#f1f1f2',
            textColor: '#545454'
        },
        // narocila
        {
            events: [
                {
                    title  : 'Pregled',
                    start  : '2016-07-11T07:10:00',
                    end    : '2016-07-11T07:40:00',
                    allDay: false
                },
                {
                    title  : 'Pregled',
                    start  : '2016-07-11T07:50:00',
                    end    : '2016-07-11T08:20:00',
                    allDay: false
                    
                },
                {
                    title  : 'Sestanek',
                    start  : '2016-07-11T09:30:00',
                    end    : '2016-07-11T10:30:00',
                    allDay: false
                },
                {
                    title  : 'Pregled',
                    start  : '2016-07-11T11:20:00',
                    end    : '2016-07-11T11:40:00',
                    allDay: false
                },
                {
                    title  : 'Pregled',
                    start  : '2016-07-11T11:50:00',
                    end    : '2016-07-11T12:00:00',
                    allDay: false
                },
                {
                    title  : 'Pregled',
                    start  : '2016-07-11T12:30:00',
                    end    : '2016-07-11T12:50:00',
                    allDay: false
                },
                {
                    title  : 'Pregled',
                    start  : '2016-07-11T13:00:00',
                    end    : '2016-07-11T13:20:00',
                    allDay: false
                },
                {
                    title  : 'Pregled',
                    start  : '2016-07-11T13:30:00',
                    end    : '2016-07-11T13:50:00',
                    allDay: false
                },
                {
                    title  : 'Sistematski pregledi',
                    start  : '2016-07-12T08:00:00',
                    end    : '2016-07-12T14:00:00',
                    allDay: false
                },
                {
                    title  : 'Pregled',
                    start  : '2016-07-13T14:10:00',
                    end    : '2016-07-13T14:30:00',
                    allDay: false
                },
                {
                    title  : 'Pregled',
                    start  : '2016-07-13T14:50:00',
                    end    : '2016-07-13T15:10:00',
                    allDay: false
                    
                },
                {
                    title  : 'Sestanek',
                    start  : '2016-07-13T15:30:00',
                    end    : '2016-07-13T16:30:00',
                    allDay: false
                },
                {
                    title  : 'Pregled',
                    start  : '2016-07-13T17:20:00',
                    end    : '2016-07-13T17:40:00',
                    allDay: false
                },
                {
                    title  : 'Pregled',
                    start  : '2016-07-13T17:50:00',
                    end    : '2016-07-13T18:00:00',
                    allDay: false
                },
                {
                    title  : 'Pregled',
                    start  : '2016-07-13T18:30:00',
                    end    : '2016-07-13T18:50:00',
                    allDay: false
                },
                {
                    title  : 'Pregled',
                    start  : '2016-07-13T12:10:00',
                    end    : '2016-07-13T12:30:00',
                    allDay: false
                },
                {
                    title  : 'Sistematski pregledi',
                    start  : '2016-07-15T08:00:00',
                    end    : '2016-07-15T14:00:00',
                    allDay: false
                }
            ],
            color: '#dda299',
            textColor: '#f76346'
        }
        ]
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
            $(".dodatne-moznosti").html('Skrij dodatne možnosti iskanja termina<span class="presledek"></span> <span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span>');
        } else {
            $(".filter").addClass("dont-display");
            $(".dodatne-moznosti").html('Prikaži dodatne možnosti iskanja termina<span class="presledek"></span> <span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span>');
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
        razlog: 'Pozdravljeni! Včeraj sem igral nogomet in grdo padel. Rad bi prišel na pregled kolena.',
        datum: '12.07.2016',
        ura: '15:00'
    },    
    {
        ime: 'Patricija',
        priimek: 'Brečko',
        mail: 'patra@gmail.com',
        razlog: 'Pozdravljeni, spet mi je zmanjkalo železa. Mislim, da potrebujem samo napotnico za laboratorij, da mi pregledajo kri.',
        datum: '13.07.2016',
        ura: '16:00'
    },  
    {
        ime: 'Neža',
        priimek: 'Đ',
        mail: 'neđa@gmail.com',
        razlog: 'Pozdravljeni! Imam vročino, boli me glava, smrkam, kašljam, kiham, ko se premikam pa čutim tudi bolečine v želodcu. Zdi se mi, da je moje stanje precej nujno, zato bi se čimprej naročila na pregled.',
        datum: '15.07.2016',
        ura: '17:00'
    },
    {
        ime: 'Neža',
        priimek: 'Đ',
        mail: 'neđa@gmail.com',
        razlog: 'Res me boli!!.',
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
        if (i%2 == 0) {
            $('#narocilnice').append('<div class="row">');
        }
        $('#narocilnice').append(
        '<div class="col-md-6"> \
        <div class="panel panel-info odmik"> \
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
        </div></div>');
        if (i%2 == 0) {
            $('#narocilnice').append('</div>');
        }
    }
}


