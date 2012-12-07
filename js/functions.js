const LNBR = "\n";

/**
 *  Reports a given errornous link
 *
 *  currently NOT used
 *
 *  @return {boolean} true if mail could be sent, false otherwise
 */
function report_error() {
    var data = [];
    data = get_cfg_from_dom();
//    console.log(data);
//    data = JSON.stringify(get_cfg_from_dom());
//    console.log(data);

    $.ajax({
        url: "lib/report.ajax.php",
        type: "POST",
        data: data,
        dataType: "json",
    }).done(function() {
        console.log('Mail sent');
    });
}



/*
 * Creates the complete correctly encoded link
 *
 * TODO: This is crap. create_link is calling a function called get_link?
 *       Change this, if not by reworking then by renaming!!!!
 *
 * @return {string} the generated link
 */
function create_link() {
    "use strict";

    var data = get_cfg_from_dom();
    var link = get_link(data);

    // add the link itself to data
    // FOR CONVENIENCE ONLY!
    data['link'] = link;

    var log = get_log_text(data);

    console.log(log);
    console.log('----------');
    console.log(link);

    // TODO: write log to log file!
    return(link);
}



/*
 * Displays the link (text) in the HTML page
 *
 * @param link any string to be displayed in the output field
 */
function show_link(link) {
    $('#link_output').val(link);
    $('#output_link').show();
    $('#link_output').select();
}



/**
 * Create and return a complete log text for output (display and/or storage)
 *
 * @param {array} data The complete data used in creating the link
 * @param {string} the log string
 *
 */
function get_log_text(data) {
    var logM
    // prepare log
    log = 'Program: ' + data['cur_program'];
    log += LNBR;
    log += 'Network: ' + data['cur_network'];
    log += LNBR;
    log += 'Prodgrp: ' + data['cur_prodgrp'];
    log += LNBR;
    log += LNBR;
    log += 'is postview? ' + data['is_postview'];
    log += LNBR;
    log += 'Add network? ' + data['add_network'];
    log += LNBR;
    log += LNBR;
    log += 'deeplink: ' + data['deeplink'];
    log += LNBR;

    return log;
}



/**
 * unhide next element in "link gen chain"
 *
 * depending on what element has just been selected
 * (or "unselected", i.e. reset to "Select ...", mapped to DEFAULT or zero)
 * different elements have to be shown and/or hidden
 *
 * @param {string} src the DOM element from which the call was triggered
 */
function show_next(src) {
    var cur, id, name, value;

    id = $(src).attr('id');
    name = id.replace(/select_/, '');
    value = $(src).children().val();

    reset_all(name);

    if(value == DEFAULT) {
        hide_all(name);
    } else if(name == 'program') {
        $('#prodgrp').hide();
        $('#input_link').hide();
        if(value == FREIKARTE) {
            $('#network').hide();
            name = 'prodgrp';
        } else {
            $('#network').show();
        }
    } else if (name == 'network') {
        if(value == ZANOX) {
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



/*
 * Hide all input elements except the program selector
 * Currently, there are the following input elements:
 * - program  selector
 * - network  selector
 * - prodgrp  selector
 * - baselink input
 *
 * While the program selector must be visible all
 * the time, the other's must be hidden/disabled when
 * a previous input field is reset to it's default
 * value ('Select ...', currently).
 *
 * @param {string} name current "section" name ("product", "network", "prodgrp")
 *
 */
function hide_all(name) {
    reset_all(name);
    $('#program').show();

    if(name == 'program') {
        $('#network').hide();
    }
    if(name == 'program' || name == 'network') {
        $('#prodgrp').hide();
    }
    $('#input_link').hide();
    $('#output_link').hide();
}



/**
 * create complete <select><option />...</select> HTML structure
 * based on a given array of values
 *
 * @param {string} domID the name of the element, will become the ID
 * @param {array} data the data array containing ALL required information
 */
function create_group_selector(domID, data) {
    var selector;
    selector = $('<select id="' + domID  + '_selector"></select>');

    for(var cid in data) {
        selector.append($('<option value="' + cid + '">' + data[cid] + '</option>'));
    }
    $('#select_' + domID).append(selector);
}



/**
 * reset all form elements subsequent to a specified element to its initial status
 *
 * @param {string} name the name of the last element that should NOT be reset
 */
function reset_all(name) {
//     $('#program_selector').children('[value=0]').attr('selected', '"selected"');

    if(name == 'program') {
        $('#network_selector').children('[value=0]').attr('selected', '"selected"');
    }
    if(name == 'program' || name == 'network') {
        $('#prodgrp_selector').children('[value=0]').attr('selected', '"selected"');
        $('#prodgrp').hide();
    }
    $('#input_link').hide();
    $('#link_output').val('');
}



/*
 * handle a file input action
 *
 * read the file,
 * parse the cfg string and
 * create a link for every deeplink entry
 *
 * @param {event} event the event object required for handling the file request
 */
function handle_file_select(event) {
    var files = event.target.files; // FileList object

    console.log('processing');

    var reader = new FileReader;

    reader.onload = function(event) {
        var fileListString = event.target.result;

        if(fileListString == '') {
            return false;
        } else {
            var fileListArray = fileListString.split('\n');
            cfgstring = fileListArray.shift();
            data = get_cfg_from_cfgstring(cfgstring);

//            console.log(data);

            var output = [];

            for(var i=0; i<fileListArray.length; i+=1) {
                if(fileListArray[i] != '') {
//                    console.log(fileListArray[i]);
                    var deeplink = fileListArray[i];
                    deeplink = deeplink.replace(/(\r\n|\n|\r)/gm,"");
                    console.log(deeplink);
                    data['deeplink'] = deeplink;
                    var curLink = get_link(data);
                    output.push(curLink);
//                    console.log(curLink);
                }
            }
            outputString = output.join("\n\n");
            outputStringHtml = output.join("\n<br />\n<br />\n");
            console.log('-----------------------------------------------');
            console.log(outputString);
            console.log('-----------------------------------------------');
            $('#list_output').html(outputStringHtml);
            $('#list_output').show();
        }
    };

    // files is a FileList of File objects!
    var output = [];

    for (var i=0, f; f = files[i]; i += 1) {
        output.push(escape(f.name));

        var text = reader.readAsText(f);
    }

    $('output').val(output);
}



/**
 * create the entire link
 *
 */
function get_link(data) {
    var link = link_base;
    link += encodeURIComponent(aa_links[data['program']][data['is_postview']]);
    link += encodeURIComponent(encodeURIComponent(data['deeplink']));

    console.log(data['deeplink']);

    param_delimiter = '?';
    if(data['deeplink'].indexOf('?') != -1) {
        param_delimiter = '&';
    }

    if(data['add_network']) {
        link += encodeURIComponent(encodeURIComponent(param_delimiter + 'partnerId=' + partner_id[data['network']]));
        link += encodeURIComponent(encodeURIComponent('&vo_nr=' + vo_nr[data['network']][data['is_postview']]));
        link += encodeURIComponent(encodeURIComponent('&type=' + type[data['network']]));
    }

    link += pg_id[data['network']][data['prodgrp']];
    return(link);
}




function get_cfg_from_dom() {

    var data = [];

    data['cur_program'] = get_cur_program();
    data['cur_network'] = get_cur_network();
    data['cur_prodgrp'] = get_cur_prodgrp();

    data['is_postview'] = get_is_postview();
    data['deeplink'] = get_deeplink();

    data['add_prodgrp'] = get_add_prodgrp();
    data['add_network'] = get_add_network();

    data['program'] = JSON.parse(cur_program);
    data['network'] = JSON.parse(cur_network);
    data['prodgrp'] = JSON.parse(cur_prodgrp);

    data['partner'] = DEFAULT;

    return data;
}



function get_cfg_from_cfgstring(cfgstring) {

    var data = [];

    if(cfgstring.charAt(0) != '#') {
        return false;
    } else {
        cfgstring = cfgstring.substr(1, cfgstring.length);
    }

    var cfg_array = cfgstring.split(':');
    var index_base = 0;
    if(cfg_array[0] != 'O2' && cfg_array[0] != 'ALICE' && cfg_array[0] != 'FREIKARTE') {
        // check if first value is NETWORK
        if(cfg_array[0] != 'AFFILINET' && cfg_array[0] != 'ZANOX' && cfg_array[0] != 'TRADEDOUBLER' && cfg_array[0] != 'TDPRIVATE') {
            // ERROR!
            // Cannot read configuration string
        } else {
            index_base = -1;
        }
    }

    data['cur_program'] = 'O2'; //cfg_array[0];
    data['cur_network'] = cfg_array[index_base + 1];
    data['cur_prodgrp'] = cfg_array[index_base + 3];

    data['is_postview'] = eval(cfg_array[index_base + 2]);

    data['add_prodgrp'] = 1; // data['cur_network'] == 2 ? 1 : 0;
    data['add_network'] = 1; //get_add_network();

    data['program'] = eval(data['cur_program']);
    data['network'] = eval(data['cur_network']);
    data['prodgrp'] = eval(data['cur_prodgrp']);

    if(data['network'] != ZANOX) {
        data['prodgrp'] = DEFAULT;
    }

    //console.log(data['prodgrp']);

    data['partner'] = DEFAULT;

    //console.log(data);

    return data;
}



function get_cur_program() {
    cur_program  = $('#program_selector').val().toUpperCase();
    cur_program  = O2; // $('#program_selector').attr('value').toUpperCase();
    return cur_program;
}



function get_cur_network() {
    cur_network  = $('#network_selector').val().toUpperCase();
    return cur_network;
}



function get_cur_prodgrp() {
    cur_prodgrp  = $('#prodgrp_selector').val().toUpperCase();
    return cur_prodgrp;
}



function get_is_postview() {
    var is_postview = $('#postview_selector').is(':checked') == true ? POSTVIEW : DEFAULT;
    return is_postview;
}



function get_deeplink() {
    var deeplink = $('#link_input').val();
    if(deeplink.substr(0, 7) != 'http://') {
        deeplink = 'http://' + deeplink;
    }
    return deeplink;
}



function get_add_prodgrp() {
    add_prodgrp = $('#prodgrp').css('display') == 'none' ? false : true;
    return add_prodgrp;
}



function get_add_network() {
    add_network = $('#network').css('display') == 'none' ? false : true;
    return add_network;
}


// we need to map an entire path ...
//
// PROGRAM
//    |
//    v
// NETWORK
//    |
//    v
// PRODGRP
//    |
//    v
//  LINK
//
//
//                 PROGRAM
//      [O2]       [ALICE]       [FREIKARTE]
//       |            |               |
//       \            /               |
//        \          /                |
//           NETWORK                  |
//     [AN] [ZX] [TD] [TDP]           |
//              |                    /
//          POSTVIEW                /
//        [true] [false]           /
//              |                 /
//              |                /
//              |               /
//            LINK ------------
//              |
//
//
// apppath[PROGRAM][NETWORK][POSTVIEW][PRODGRP]
//
// every element would need a value and a "pointer"
// value = name
// pointer = next step
//
//
