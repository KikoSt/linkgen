const DEFAULT  = 0;
const POSTVIEW = 1;

const AFFILINET    = 0;
const TRADEDOUBLER = 1;
const TDPRIVATE    = 2;
const ZANOX        = 3;

const O            =  0;
const PREPAID      =  1;
const BLUE         =  2;
const GO           =  3;
const MYHANDY      =  4;
const DSL          =  5;
const SELF         =  6;
const STUDENT      =  7;
const START        =  8;
const TEXT_O     =  9;
const TEXT_PREPAID = 10;
const TEXT_BLUE    = 11;
const TEXT_GO      = 12;
const TEXT_MYHANDY = 13;
const TEXT_DSL     = 14;
const TEXT_SELF    = 15;
const TEXT_STUDENT = 16;
const TEXT_START   = 17;



var aa_links = [];
var partner_id = [];
var vo_nr = [];

aa_links[AFFILINET]    = [];
aa_links[TRADEDOUBLER] = [];
aa_links[TDPRIVATE]    = [];
aa_links[ZANOX]        = [];

aa_links[AFFILINET][DEFAULT]     = 'http:/www.actionallocator.com/cset.php?ex-id=1&….&url=';
aa_links[TRADEDOUBLER][DEFAULT]  = 'http:/www.actionallocator.com/cset.php?ex-id=1&….&url=';
aa_links[TDPRIVATE][DEFAULT]     = 'http:/www.actionallocator.com/cset.php?ex-id=1&….&url=';
aa_links[ZANOX][DEFAULT]         = 'http:/www.actionallocator.com/cset.php?ex-id=1&….&url=';

aa_links[AFFILINET][POSTVIEW]    = 'http:/www.actionallocator.com/cset.php?ex-id=1&….&url=';
aa_links[TRADEDOUBLER][POSTVIEW] = 'http:/www.actionallocator.com/cset.php?ex-id=1&….&url=';
aa_links[TDPRIVATE][POSTVIEW]    = 'http:/www.actionallocator.com/cset.php?ex-id=1&….&url=';
aa_links[ZANOX][POSTVIEW]        = 'http:/www.actionallocator.com/cset.php?ex-id=1&….&url=';


partner_id[ZANOX]        = 'ppzap';
partner_id[AFFILINET]    = 'ppaff';
partner_id[TRADEDOUBLER] = 'pptrd';
partner_id[TDPRIVATE]    = 'pptrd';


vo_nr[AFFILINET]    = [];
vo_nr[TRADEDOUBLER] = [];
vo_nr[TDPRIVATE]    = [];
vo_nr[ZANOX]        = [];

vo_nr[AFFILINET][DEFAULT]     = 'WB.07.1000';
vo_nr[TRADEDOUBLER][DEFAULT]  = 'WB.08.1000';
vo_nr[TDPRIVATE][DEFAULT]     = 'WB.08.1004';
vo_nr[ZANOX][DEFAULT]         = 'IV.80.1001';

vo_nr[AFFILINET][POSTVIEW]    = 'WB.60.1003';
vo_nr[TRADEDOUBLER][POSTVIEW] = 'WB.60.1003';
vo_nr[TDPRIVATE][POSTVIEW]    = 'WB.60.1003';
vo_nr[ZANOX][POSTVIEW]        = 'WB.60.1003';

pg_id = [];

pg_id[AFFILINET]    = [];
pg_id[TRADEDOUBLER] = [];
pg_id[TDPRIVATE]    = [];
pg_id[ZANOX]        = [];

pg_id[AFFILINET][DEFAULT]    = [];
pg_id[TRADEDOUBLER][DEFAULT] = [];
pg_id[TDPRIVATE][DEFAULT]    = [];
pg_id[ZANOX][DEFAULT]    = null;


pg_id[ZANOX][O]            = '&cl=4383336303236323131303&bm=100&bmcl=3383735313236323131303&cp=101&ag=101&crid=101&subid=Keyword1';
pg_id[ZANOX][PREPAID]      = '&cl=4383336303236323131303&bm=100&bmcl=3383735313236323131303&cp=111&ag=117&crid=101&subid=Keyword1';
pg_id[ZANOX][BLUE]         = '&cl=4383336303236323131303&bm=100&bmcl=3383735313236323131303&cp=151&ag=101&crid=101&subid=Keyword1';
pg_id[ZANOX][GO]           = '&cl=4383336303236323131303&bm=100&bmcl=3383735313236323131303&cp=175&ag=101&crid=101&subid=Keyword1';
pg_id[ZANOX][MYHANDY]      = '&cl=4383336303236323131303&bm=100&bmcl=3383735313236323131303&cp=200&ag=101&crid=101&subid=Keyword1';
pg_id[ZANOX][DSL]          = '&cl=4383336303236323131303&bm=100&bmcl=3383735313236323131303&cp=262&ag=101&crid=101&subid=Keyword1';
pg_id[ZANOX][SELF]         = '&cl=4383336303236323131303&bm=100&bmcl=3383735313236323131303&cp=280&ag=101&crid=101&subid=Keyword1';
pg_id[ZANOX][STUDENT]      = '&cl=4383336303236323131303&bm=100&bmcl=3383735313236323131303&cp=217&ag=101&crid=101&subid=Keyword1';
pg_id[ZANOX][START]        = '&cl=4383336303236323131303&bm=100&bmcl=3383735313236323131303&cp=240&ag=119&crid=101&subid=Keyword1';
pg_id[ZANOX][TEXT_O]       = '&cl=4383336303236323131303&bm=100&bmcl=3383735313236323131303&cp=101&ag=101&crid=101&subid=Keyword1';
pg_id[ZANOX][TEXT_PREPAID] = '&cl=4383336303236323131303&bm=100&bmcl=3383735313236323131303&cp=111&ag=117&crid=101&subid=Keyword1';
pg_id[ZANOX][TEXT_BLUE]    = '&cl=4383336303236323131303&bm=100&bmcl=3383735313236323131303&cp=151&ag=101&crid=101&subid=Keyword1';
pg_id[ZANOX][TEXT_GO]      = '&cl=4383336303236323131303&bm=100&bmcl=3383735313236323131303&cp=175&ag=101&crid=101&subid=Keyword1';
pg_id[ZANOX][TEXT_MYHANDY] = '&cl=4383336303236323131303&bm=100&bmcl=3383735313236323131303&cp=200&ag=101&crid=101&subid=Keyword1';
pg_id[ZANOX][TEXT_DSL]     = '&cl=4383336303236323131303&bm=100&bmcl=3383735313236323131303&cp=262&ag=120&crid=101&subid=Keyword1';
pg_id[ZANOX][TEXT_SELF]    = '&cl=4383336303236323131303&bm=100&bmcl=3383735313236323131303&cp=280&ag=126&crid=101&subid=Keyword1';
pg_id[ZANOX][TEXT_STUDENT] = '&cl=4383336303236323131303&bm=100&bmcl=3383735313236323131303&cp=217&ag=101&crid=101&subid=Keyword1';
pg_id[ZANOX][TEXT_START]   = '&cl=4383336303236323131303&bm=100&bmcl=3383735313236323131303&cp=240&ag=119&crid=101&subid=Keyword1';





function create_link(src) {

    cur_program = $('#program_selector').val();
    cur_network = $('#network_selector').val();
    cur_prodgrp = $('#prodgrp_selector').val();

    console.log(cur_program.toUpperCase() + cur_network.toUpperCase() + cur_prodgrp.toUpperCase());
}


function show_next(src) {
    var cur, id, name, value;

    id = $(src).attr('id');
    name = id.replace(/select_/, '');
    value = $(src).children().val();

    if(value == 'Select ...') {
            hide_all(name);
    } else if(name == 'program') {
        if(value == 'Freikarte') {
            name = 'prodgrp';
        } else {
            $('#network').show();
            $('#input_link').hide();
        }
    } else if (name == 'network') {
        if(value == 'Zanox') {
            $('#input_link').hide();
            $('#prodgrp').show();
        } else {
            name = 'prodgrp';
        }
    }

    if (name == 'prodgrp') {
        $('#input_link').show();
    }
}



function hide_all(name) {
    console.log(name);
    $('#program').show();
    if(name == 'program') {
        $('#network').hide();
        $('#prodgrp').hide();
    }
    if(name == 'network') {
        $('#prodgrp').hide();
    }
    $('#input_link').hide();
}


function create_group_selector(name, data) {
    var selector;
    selector = $('<select id="' + name  + '_selector"></select>');

    for(var cid in data) {
        selector.append($('<option value="' + data[cid] + '">' + data[cid] + '</option>'));
    }
    $('#select_' + name).append(selector);
}

