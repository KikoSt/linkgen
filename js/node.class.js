function LinkGenNode () {

    this.name = '';
    this.next = {};



}


programs = [];
networks = [];
prodgrps = [];

programs['O2'] = new LinkGenNode();
programs['ALICE'] = new LinkGenNode();
programs['FREIKARTE'] = new LinkGenNode();

networks['AN'] = new LinkGenNode();
networks['ZX'] = new LinkGenNode();
networks['TD'] = new LinkGenNode();
networks['TDP'] = new LinkGenNode();

prodgrps[''] = new LinkGenNode();
prodgrps[''] = new LinkGenNode();
prodgrps[''] = new LinkGenNode();
prodgrps[''] = new LinkGenNode();
prodgrps[''] = new LinkGenNode();
prodgrps[''] = new LinkGenNode();
prodgrps[''] = new LinkGenNode();
prodgrps[''] = new LinkGenNode();
prodgrps[''] = new LinkGenNode();
prodgrps[''] = new LinkGenNode();
prodgrps[''] = new LinkGenNode();
prodgrps[''] = new LinkGenNode();
prodgrps[''] = new LinkGenNode();
prodgrps[''] = new LinkGenNode();
prodgrps[''] = new LinkGenNode();



programs['O2'].next = networks;
