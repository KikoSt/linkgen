const LNBR = "\n";

function report_error() {
    var data = [];
    data = get_link_data();
//    console.log(data);
//    data = JSON.stringify(get_link_data());
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
 * function create_link
 *
 * create the complete correctly encoded link
 *
 */
function create_link() {
    "use strict";

    var data = get_link_data();
    var link = get_link(data);

    // add the link itself to data
    // FOR CONVENIENCE ONLY!
    data['link'] = link;

    var log = get_log_text(data);

    console.log(log);

    // TODO: write log to log file!
    return(link);
}



function show_link(link) {
    $('#link_output').val(link);
    $('#output_link').show();
    $('#link_output').select();
}



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
            console.log('ZANOX');
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
 * function hide_all
 *
 * Hides all input elements except the program
 * selector
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
 * @param name  current "section" name ("product", "network", "prodgrp")
 *
 */
function hide_all(name) {
    reset_all(name);
    $('#program').show();

    if(name == 'program') {
        console.log('Hiding network');
        $('#network').hide();
    }
    if(name == 'program' || name == 'network') {
        $('#prodgrp').hide();
    }
    $('#input_link').hide();
    $('#output_link').hide();
}



function create_group_selector(name, data) {
    var selector;
    selector = $('<select id="' + name  + '_selector"></select>');

    for(var cid in data) {
        selector.append($('<option value="' + cid + '">' + data[cid] + '</option>'));
    }
    $('#select_' + name).append(selector);
}



function reset_all(name) {
//     $('#program_selector').children('[value=0]').attr('selected', '"selected"');

    if(name == 'program') {
    }
    console.log(name);
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



function handle_file_select(event) {
    var files = event.target.files; // FileList object

    var reader = new FileReader;

    reader.onload = (function(the_file) {
        return function(e) {
            alert(e);
        }
    });

    // files is a FileList of File objects!
    var output = [];

    for (var i=0, f; f = files[i]; i += 1) {
        output.push(escape(f.name));

        var text = reader.readAsText(f);
    }

    $('output').val(output);
}




function get_link(data) {
    var link = link_base;
    link += encodeURIComponent(aa_links[data['program']][data['is_postview']]);
    link += encodeURIComponent(encodeURIComponent(data['deeplink']));

    if(add_network) {
        link += encodeURIComponent(encodeURIComponent('?partnerId=' + partner_id[data['network']]));
        link += encodeURIComponent(encodeURIComponent('&vo_nr=' + vo_nr[data['network']][data['is_postview']]));
        link += encodeURIComponent(encodeURIComponent('&type=' + type[data['network']]));
    }

    link += pg_id[data['network']][data['prodgrp']];
    return(link);
}




function get_link_data() {

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
