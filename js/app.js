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
                    end    : '2016-07-11T11:50:00',
                    allDay: false
                },
                {
                    title  : 'Pregled',
                    start  : '2016-07-11T12:00:00',
                    end    : '2016-07-11T12:30:00',
                    allDay: false
                },
                {
                    title  : 'Pregled',
                    start  : '2016-07-11T12:40:00',
                    end    : '2016-07-11T13:10:00',
                    allDay: false
                },
                {
                    title  : 'Pregled',
                    start  : '2016-07-11T13:20:00',
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
                    end    : '2016-07-13T14:40:00',
                    allDay: false
                },
                {
                    title  : 'Pregled',
                    start  : '2016-07-13T14:50:00',
                    end    : '2016-07-13T15:20:00',
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
                    end    : '2016-07-13T17:50:00',
                    allDay: false
                },
                {
                    title  : 'Pregled',
                    start  : '2016-07-13T18:00:00',
                    end    : '2016-07-13T18:30:00',
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

    prikaz_narocil(narocila);
    
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
    

    //var zdravniki = []; // tukaj morajo biti zdravniki kot objekti s svojimi id-ji, id-ji ustanov kjer delajo, imeni...

    // val od optionov od selecta za izbrat ustanovo mora biti id ustanove
    
    pokazi_zd(ustanove);  
 
    $('#zd').change(function() {
        var value = $(this).find(':selected').val();
        $('#zd_zdravnik').empty();
        for (var i = 0; i < zdravniki.length; i++) {
            if (zdravniki[i].idUstanova == value) {
		var naziv =  zdravniki[i].ime + " " + zdravniki[i].priimek + ", dr. med., spec. splošne medicine"; 
                $('#zd_zdravnik').append("<option value='" + zdravniki[i].idZdravnik + "'>" + naziv + "</option>");
            }
        }
    });
    
    $('#zd_zdravnik').change(function() {
 
	    var term = vrni3termine(termini, zdravniki, ustanove);
	    prikazi_termine(term);
	});
    
    
    $(".gumbic").on("click", function() {
        var idGumba = "#" + $(this).attr("id");
        $(idGumba).css("display", "none");
    });

};

$(document).ready(main);

/*
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
*/

//alert(narocila);

function prikaz_narocil (narocila) {
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
        <div id="' + i + '" class="panel panel-info odmik"> \
            <div class="panel-heading">'+ ime_priimek +'</div> \
            <div class="panel-body" id="podrobno"> \
                <p class="change-font">'+ razlog +'</p> \
                <label class="change-font" id="datum"> Datum: ' + datum + '</label> </br> \
                <label class="change-font" id="ura"> Ura: ' + ura + '</label> \
                <div class="form-group"> \
                    <label class="change-font"> Predviden čas pregleda v minutah: </label> \
                    <input type="text" class="form-control" id="minute" style="width: 60px; display: inline;"> \
                </div> \
                <button id="' + i + '" class="btn btn-success btn-md potrdi gumbic"> \
                  <span class="glyphicon glyphicon-ok"></span> Potrdi \
                </button> \
                <button id="' + i + '" class="btn btn-danger btn-md zavrni gumbic" style="display: inline;"> \
                  <span class="glyphicon glyphicon-remove"></span> Zavrni \
                </button> \
             </div> \
        </div></div>');
        if (i%2 == 0) {
            $('#narocilnice').append('</div>');
        }
    }
}


function vrni3termine(termini, zdr, ust) {
    var cas_v_dnevu = [0, 0, 0];
    var kdaj_datum = 0;
    var dodatne_moznosti = false;
    
    var termini_3 = [];
    $('#razpolozljivi-termini').empty(); 
    $('#razpolozljive-ure').find('div').each(function(){
        if($(this).hasClass("izbrana-ura")) {
            cas_v_dnevu[parseInt($(this).attr('id'))] = 1;            
        }
    });
    
    $('#razpolozljivi-datumi').find('div').each(function(){
        if($(this).hasClass("izbran-datum")) {
             if (parseInt($(this).attr('id')) == 10) {
                 kdaj_datum = 1;
             } 
             else if (parseInt($(this).attr('id')) == 11) {
                 kdaj_datum = 2;
             }  
             else if (parseInt($(this).attr('id')) == 12) {
                 kdaj_datum = 3;
             }  
        }
    });
    
    var id_izbranZdravnik = $('#zd_zdravnik').find(':selected').val();
    
    
    for (var i=0; i<termini.length; i++) {
        if(termini[i].idZdravnik == id_izbranZdravnik) {
            for (var j=0; j<3; j++) {
                if (cas_v_dnevu[j] != 0 || kdaj_datum != 0) {
                    dodatne_moznosti = true;
                }
            }
            if(!dodatne_moznosti) {
                termini_3.push(termini[i]);
            }
            else {
		var y = termini[i].datum.split('-')[0];
		var m = termini[i].datum.split('-')[1] - 1;
		var d = termini[i].datum.split('-')[2];

                var datum_termina = new Date(y,m,d,0,0,0,0);
                var ura_zacetka = parseInt(termini[i].zacetek.split(':')[0]);
           	//alert(ura_zacetka + ' aaa ' + JSON.stringify(termini[i]));
 
                if (kdaj_datum == 1) {
                    if (ura_zacetka < 11 && cas_v_dnevu[0] == 1) {
                        termini_3.push(termini[i]);
                    } 
                    else if (ura_zacetka < 15 && ura_zacetka >= 11 && cas_v_dnevu[1] == 1) {
                        termini_3.push(termini[i]);
                    }
                    else if (ura_zacetka < 19 && ura_zacetka >= 15 && cas_v_dnevu[2] == 1) {
                        termini_3.push(termini[i]);
                    }
                }
                
                else if (kdaj_datum == 2) {
                    var danes = new Date();
                    var razlika = danes - datum_termina;
                    razlika = Math.floor(razlika / (1000*60*60*24));
                    
                    if (razlika > 7 && razlika < 31) {
                        if (ura_zacetka < 11 && cas_v_dnevu[0] == 1) {
                            termini_3.push(termini[i]);
                        } 
                        else if (ura_zacetka < 15 && ura_zacetka >= 11 && cas_v_dnevu[1] == 1) {
                            termini_3.push(termini[i]);
                        }
                        else if (ura_zacetka < 19 && ura_zacetka >= 15 && cas_v_dnevu[2] == 1) {
                            termini_3.push(termini[i]);
                        }
                    }
                }
                
                else if (kdaj_datum == 3) {
                    var danes = new Date();
                    var razlika = datum_termina - danes;
                    razlika = Math.floor(razlika / (1000*60*60*24));
                    if (razlika > 30) {
                        if (ura_zacetka < 11 && cas_v_dnevu[0] == 1) {
                            termini_3.push(termini[i]);
                        } 
                        else if (ura_zacetka < 15 && cas_v_dnevu[1] == 1) {
                            termini_3.push(termini[i]);
                        }
                        else if (ura_zacetka < 19 && cas_v_dnevu[2] == 1) {
                            termini_3.push(termini[i]);
                        }
                    }
                }
            }
        }
        
        if(termini_3.length == 3) {
            break;
        }
    }
    
   /* 
    for(var i=0; i<termini_3.length; i++) {
        var datum2 = new Date(termini_3[i].datum);
        termini_3[i].datum = datum2.toLocaleDateString();
        termini_3[i].zacetek = datum2.toLocaleTimeString();
    }
 */  
    return termini_3;
}


function prikazi_termine(termini3) {
    for (var i=0; i<termini3.length; i++) {
        var u = termini3[i].zacetek;
        
        var d = new Date(termini3[i].datum);
        var weekday = new Array(7);
        weekday[0] = "NED";
        weekday[1] = "PON";
        weekday[2] = "TOR";
        weekday[3] = "SRE";
        weekday[4] = "ČET";
        weekday[5] = "PET";
        weekday[6] = "SOB";
        var dan = weekday[d.getDay()];
        
        var kdaj = dan + ', ' + termini3[i].datum + ' ob ' + u;
        $('#razpolozljivi-termini').append('<div class="panel panel-info odmik termin change-font-barva">' + kdaj + '</div>');
    }
    
}

function pokazi_zd(ustanove) {
	for (var i = 0; i < ustanove.length; i++) {
        	$('#zd').append('<option value="' + ustanove[i].idUstanova  + '" style=" font-family: \'Trebuchet MS\'">' + ustanove[i].naziv  + '</option>');
	}
}
