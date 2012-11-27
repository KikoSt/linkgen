/*
 * function create_link
 *
 * create the complete correctly encoded link
 *
 */
function create_link() {

    // get the program, the network and the product group as
    // UPPERCASE keywords
    cur_program  = $('#program_selector').val().toUpperCase();
    cur_network  = $('#network_selector').val().toUpperCase();
    cur_prodgrp  = $('#prodgrp_selector').val().toUpperCase();
    // this can only be DEFAULT (not postview) or POSTVIEW
    // depending on the constant definition, this should  0 (DEFAULT)
    // respectively 1
    is_postview = $('#postview_selector').is(':checked') == true ? POSTVIEW : DEFAULT;

    deeplink     = $('#link_input').val();

    add_prodgrp = $('#prodgrp').css('display') == 'none' ? false : true;
    add_network = $('#network').css('display') == 'none' ? false : true;


    console.log(add_network + ' / ' + add_prodgrp);

    // convert string into constant
    program = JSON.parse(cur_program);
    network = JSON.parse(cur_network);
    prodgrp = JSON.parse(cur_prodgrp);

    // TODO:
    partner = DEFAULT;

    link = link_base;

    link += encodeURIComponent(aa_links[program][is_postview]);
    link += encodeURIComponent(encodeURIComponent(deeplink));
    link += encodeURIComponent(encodeURIComponent('&partnerId=' + partner_id[network]));
    link += encodeURIComponent(encodeURIComponent('&vo_nr=' + vo_nr[network][is_postview]));
    link += encodeURIComponent(encodeURIComponent('&type=' + type[network]));

    if(add_prodgrp) {
        link += pg_id[network][prodgrp];
    }

    console.log(link);

    $('#link_output').val(link);
    $('#output_link').show();
    $('#link_output').select();
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
