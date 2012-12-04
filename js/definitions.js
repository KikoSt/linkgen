const DEFAULT      = 0;
const POSTVIEW     = 1;

const O2           = 1;
const ALICE        = 2;
const FREIKARTE    = 3;

const AFFILINET    = 1;
const ZANOX        = 2;
const TRADEDOUBLER = 3;
const TDPRIVATE    = 4;

const O            =  1;
const PREPAID      =  2;
const BLUE         =  3;
const GO           =  4;
const MYHANDY      =  5;
const DSL          =  6;
const SELF         =  7;
const STUDENT      =  8;
const START        =  9;
const TEXT_O       = 10;
const TEXT_PREPAID = 11;
const TEXT_BLUE    = 12;
const TEXT_GO      = 13;
const TEXT_MYHANDY = 14;
const TEXT_DSL     = 15;
const TEXT_SELF    = 16;
const TEXT_STUDENT = 17;
const TEXT_START   = 18;

const link_base = "http://cct.o2online.de/index.php?redirect=";

var aa_links   = [];
var partner_id = [];
var vo_nr      = [];

// since we started the constant definitions ONE-BASED, we can easily
// use zero as "undefined" respectively 'Select ...'
var prodgrp_labels = [    'Select ...',
                          'Banner o2 o',
                          'Banner o2 Prepaid',
                          'Banner o2 Blue',
                          'Banner o2 go',
                          'Banner o2 MyHandy',
                          'Banner o2 DSL',
                          'Banner o2 Selbstständige',
                          'Banner o2 Student',
                          'Banner o2 Startseite',
                          'Textlink o2 o',
                          'Textlink o2 Prepaid',
                          'Textlink o2 Blue',
                          'Textlink o2 go',
                          'Textlink o2 MyHandy',
                          'Textlink o2 DSL',
                          'Textlink o2 Selbstständige',
                          'Textlink o2 Student',
                          'Textlink o2 Startseite'];

aa_links[AFFILINET]    = [];
aa_links[TRADEDOUBLER] = [];
aa_links[TDPRIVATE]    = [];
aa_links[ZANOX]        = [];

aa_links[AFFILINET][DEFAULT]     = 'http://www.actionallocator.com/cset.php?ex-aid=141&ex-cid=2752&ex-url=';
aa_links[TRADEDOUBLER][DEFAULT]  = 'http://www.actionallocator.com/cset.php?ex-aid=141&ex-cid=2754&ex-url=';
aa_links[TDPRIVATE][DEFAULT]     = 'http://www.actionallocator.com/cset.php?ex-aid=141&ex-cid=2766&ex-url=';
aa_links[ZANOX][DEFAULT]         = 'http://www.actionallocator.com/cset.php?ex-aid=141&ex-cid=2753&ex-url=';

aa_links[AFFILINET][POSTVIEW]    = 'http://www.actionallocator.com/cset.php?ex-aid=141&ex-cid=2763&ex-url=';
aa_links[TRADEDOUBLER][POSTVIEW] = 'http://www.actionallocator.com/cset.php?ex-aid=141&ex-cid=2765&ex-url=';
aa_links[TDPRIVATE][POSTVIEW]    = 'http://www.actionallocator.com/cset.php?ex-aid=141&ex-cid=2768&ex-url=';
aa_links[ZANOX][POSTVIEW]        = 'http://www.actionallocator.com/cset.php?ex-aid=141&ex-cid=2770&ex-url=';



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



type = [];

type[ZANOX]        = 'o2_AF';
type[AFFILINET]    = 'o2_AF';
type[TRADEDOUBLER] = 'o2_AF';
type[TDPRIVATE]    = 'o2_AF';



pg_id = [];

pg_id[AFFILINET]    = [];
pg_id[TRADEDOUBLER] = [];
pg_id[TDPRIVATE]    = [];
pg_id[ZANOX]        = [];

pg_id[AFFILINET][DEFAULT]    = '&cl=4383336303236323131303&bm=7&bmcl=8363036313236323131303&cp=10000000000&ag=1&crid=10000000000';
pg_id[TRADEDOUBLER][DEFAULT] = '&cl=4383336303236323131303&bm=56&bmcl=1393238373136323131303&cp=10000000000&ag=1&crid=10000000000';
pg_id[TDPRIVATE][DEFAULT]    = '&cl=4383336303236323131303&bm=56&bmcl=5333138363236323131303&cp=10000000000&ag=1&crid=10000000000';
pg_id[ZANOX][DEFAULT]    = '';


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

