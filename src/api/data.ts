import { Coffee } from '@/lib/type';
import BCImg from '@/assets/brazil_cerrado.webp';
import CNImg from '@/assets/colombia_narino.webp';
import CRImg from '@/assets/costa_rica.webp';
import DEImg from '@/assets/decaf_espresso.webp';
import DHImg from '@/assets/decaf_house_blend.webp';
import ERImg from '@/assets/espresso_roast.webp';
import EYImg from '@/assets/ethiopia_yirgacheffe.webp';
import FVImg from '@/assets/ethiopia_yirgacheffe.webp';
import HZImg from '@/assets/hazelnut_12OZ.webp';
import HBImg from '@/assets/holiday-blend.webp';
import HSImg from '@/assets/house_blend.webp';
import KYImg from '@/assets/kenya.webp';
import MJImg from '@/assets/mocha_java.webp';
import PNImg from '@/assets/papua.webp';
import SMImg from '@/assets/sumatra.webp';
import VNImg from '@/assets/viennese.webp';

export const coffeeData: Coffee[] = [
  {
    id: 1,
    title: 'brazil cerrado',
    price: 38,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'light & subtle',
    image: BCImg,
    stock: 10,
    reviews: [
      {
        id: 1,
        nickname: 'John Doe',
        summary: 'Good taste!',
        review:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
    ],
  },
  {
    id: 2,
    title: 'colombia narino',
    price: 42,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'medium & smooth',
    image: CNImg,
    stock: 2,
    reviews: [
      {
        id: 1,
        nickname: 'John Doe',
        summary: 'Good taste!',
        review:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
      {
        id: 2,
        nickname: 'Jane Smith',
        summary: 'Excellent coffee!',
        review:
          'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      },
    ],
  },
  {
    id: 3,
    title: 'costa rica la cascada tarrazu',
    price: 45,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'medium & smooth',
    image: CRImg,
    stock: 1,
    reviews: [
      {
        id: 1,
        nickname: 'Jane Doe',
        summary: 'Smooth and rich!',
        review:
          'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
      },
    ],
  },
  {
    id: 4,
    title: 'Decaf Espresso Roast',
    price: 45,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'decaffeinated',
    image: DEImg,
    stock: 6,
    reviews: [],
  },
  {
    id: 5,
    title: 'Decaf House Blend',
    price: 48,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'decaffeinated',
    image: DHImg,
    stock: 0,
    reviews: [],
  },
  {
    id: 6,
    title: 'espresso roast',
    price: 48,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'dark & distinctive',
    image: ERImg,
    stock: 4,
    reviews: [
      {
        id: 1,
        nickname: 'John Doe',
        summary: 'Good taste!',
        review:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
    ],
  },
  {
    id: 7,
    title: 'ethiopia yirgachefee',
    price: 48,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'light & distinctive',
    image: EYImg,
    stock: 3,
    reviews: [],
  },
  {
    id: 8,
    title: 'french vanilla 12OZ',
    price: 78,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'flavoured',
    image: FVImg,
    stock: 10,
    reviews: [
      {
        id: 1,
        nickname: 'John Doe',
        summary: 'Good taste!',
        review:
          'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      },
      {
        id: 2,
        nickname: 'Jane Doe',
        summary: 'Love the flavor!',
        review:
          'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.',
      },
    ],
  },
  {
    id: 9,
    title: 'hazelnut 12OZ',
    price: 78,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'flavoured',
    image: HZImg,
    stock: 0,
    reviews: [],
  },
  {
    id: 10,
    title: 'holiday blend',
    price: 88,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'dark & distinctive',
    image: HBImg,
    stock: 1,
    reviews: [],
  },
  {
    id: 11,
    title: 'house blend',
    price: 58,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'light & subtle',
    image: HSImg,
    stock: 3,
    reviews: [],
  },
  {
    id: 12,
    title: 'kenya aa',
    price: 58,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'medium & smooth',
    image: KYImg,
    stock: 10,
    reviews: [],
  },
  {
    id: 13,
    title: 'mocha java',
    price: 58,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'medium & smooth',
    image: MJImg,
    stock: 0,
    reviews: [],
  },
  {
    id: 14,
    title: 'papua new guinea sigri',
    price: 58,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'medium & smooth',
    image: PNImg,
    stock: 0,
    reviews: [],
  },
  {
    id: 15,
    title: 'sumatra mandheling',
    price: 58,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'dark & distinctive',
    image: SMImg,
    stock: 1,
    reviews: [],
  },
  {
    id: 16,
    title: 'viennese',
    price: 68,
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    category: 'dark & distinctive',
    image: VNImg,
    stock: 8,
    reviews: [],
  },
];
