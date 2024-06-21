type MenuItem = {
  main: string;
  sub: string[];
};

type NavItem = {
  title: string;
  menu?: MenuItem[];
};

const navMenu: NavItem[] = [
  {
    title: 'our story',
    menu: [
      {
        main: 'our story',
        sub: [
          'our heritage',
          'coffee sourcing',
          'tea sourcing',
          'press information',
        ],
      },
    ],
  },
  {
    title: 'online store',
    menu: [
      {
        main: 'coffee',
        sub: [
          'light & subtle',
          'light & distinctive',
          'medium & smooth',
          'rick & smooth',
          'dark & distinctive',
          'reserved',
          'decaffeinated',
          'flavoured',
        ],
      },
      {
        main: 'tea',
        sub: ['green', 'oolong', 'black', 'flavoured', 'herbal & fruits'],
      },
      {
        main: 'cakes & event essentials',
        sub: [
          'seasonal cakes',
          'petite cakes',
          'singature classics',
          'party classics',
          'party signature',
          'party premium',
        ],
      },
      {
        main: 'machines & capsules',
        sub: ['machines', 'beverage capsules', 'CBTL Accessories'],
      },
      {
        main: 'merchandise',
        sub: ['accessories', 'drinkware', 'powders', 'limited edition'],
      },
    ],
  },
  {
    title: 'stores',
  },
  {
    title: 'caring cup',
  },
  {
    title: 'order ahead',
  },
];

export default navMenu;
