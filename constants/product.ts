interface IProductList {
  id: number;
  src: string;
  name: string;
  price: number;
  ratings: number;
  description: string;
}

export interface IProductLists extends Array<IProductList> {}

export const productList: IProductLists = [
  {
    id: 1,
    src: '/products/shirts/s1.jpg',
    price: 687,
    ratings: 3,
    name: 'BLACK SOLID COTTON SHIRT',
    description: 'SOLID COTTON SHIRT',
  },
  {
    id: 2,
    src: '/products/shirts/s2.jpg',
    price: 688,
    ratings: 4.5,
    name: 'BEIGE SOLID CASA LINEN SHIRT',
    description: 'SOLID COTTON SHIRT',
  },
  {
    id: 3,
    src: '/products/shirts/s3.jpg',
    price: 687,
    ratings: 4,
    name: 'RED SOLID COTTON-SATIN SHIRT',
    description: 'SOLID COTTON SHIRT',
  },
  {
    id: 4,
    src: '/products/shirts/s4.jpg',
    price: 687,
    ratings: 3,
    name: 'TERACOTTA BROWN SOLID COTTON SHIRT',
    description: 'SOLID COTTON SHIRT',
  },
  {
    id: 5,
    src: '/products/shirts/s5.jpg',
    price: 725,
    ratings: 2.5,
    name: 'SELF TEXTURED WAFFLE KNIT HALF SLEEVES SHIRT WITH CUBAN COLLAR',
    description: 'SOLID COTTON SHIRT',
  },
  {
    id: 6,
    src: '/products/shirts/s6.jpg',
    price: 749,
    ratings: 4,
    name: 'BLUE OXFORD SOLID SHIRT',
    description: 'SOLID COTTON SHIRT',
  },
  {
    id: 7,
    src: '/products/shirts/s7.jpg',
    price: 764,
    ratings: 3.5,
    name: 'CREAM OXFORD SOLID SHIRT',
    description: 'SOLID COTTON SHIRT',
  },
  {
    id: 8,
    src: '/products/shirts/s8.jpg',
    price: 764,
    ratings: 4,
    name: 'DOODLE SHIRT',
    description: 'SOLID COTTON SHIRT',
  },
  {
    id: 9,
    src: '/products/shirts/s9.jpg',
    price: 765,
    ratings: 5,
    name: 'MELANGE SKY BLUE SOLID SHIRT',
    description: 'SOLID COTTON SHIRT',
  },
  {
    id: 10,
    src: '/products/shirts/s10.jpg',
    price: 799,
    ratings: 3,
    name: 'MELANGE WHITE SOLID SHIRT',
    description: 'SOLID COTTON SHIRT',
  },
  {
    id: 11,
    src: '/products/shirts/s11.jpg',
    price: 809,
    ratings: 3.5,
    name: 'FIND YOUR PERFECT MENS WAFFLE KNIW SOLID SHIRT',
    description: 'SOLID COTTON SHIRT',
  },
  {
    id: 12,
    src: '/products/shirts/s12.jpg',
    price: 999,
    ratings: 4.5,
    name: 'MENS CUT AWAY COLLAR STRIPED SHIRT',
    description: 'SOLID COTTON SHIRT',
  },
];
