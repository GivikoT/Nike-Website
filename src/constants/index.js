import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../images";

import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../images/icons";

import shako from "../images/shako.png";
import gio from "../images/gio.png";
import dato from "../images/dato.png";
import Black from "../images/black.png";
import White from "../images/white.png";
import Red from "../images/red.png";
import Purple from "../images/purple.png";
import bigTest from "../images/bigTest.png";
import bigTest2 from "../images/bigTest2.png";
import ajko1 from "../images/nikeShoes/AJKO 1 Low/ajko-1-low.png";
import ajko2 from "../images/nikeShoes/AJKO 1 Low/dsadas.png";
import ajko3 from "../images/nikeShoes/AJKO 1 Low/dsa.png";
import ajko4 from "../images/nikeShoes/AJKO 1 Low/ajko-1-low-mens-shoes-HNz9psdasda.png";
import air1 from "../images/nikeShoes/Air Jordan 1 Mid/air-jordan-1.png";
import air2 from "../images/nikeShoes/Air Jordan 1 Mid/air-jordan-1-mid-shoes-X5pM09zas.png";
import air3 from "../images/nikeShoes/Air Jordan 1 Mid/air-jordan-1-mid-shoes-X5pM09132.png";
import air4 from "../images/nikeShoes/Air Jordan 1 Mid/air-jordan-1-mid-shoes-X5pM09324.png";
import force1 from "../images/nikeShoes/Nike Air Force 1 Low Retro/air-force-1.png";
import force2 from "../images/nikeShoes/Nike Air Force 1 Low Retro/dsa.png";
import force3 from "../images/nikeShoes/Nike Air Force 1 Low Retro/ew.png";
import force4 from "../images/nikeShoes/Nike Air Force 1 Low Retro/gfdg.png";
import purple1 from "../images/nikeShoes/Air Jordan 12 Retro/air-jordan-12.png";
import purple2 from "../images/nikeShoes/Air Jordan 12 Retro/d.png";
import purple3 from "../images/nikeShoes/Air Jordan 12 Retro/fds.png";
import purple4 from "../images/nikeShoes/Air Jordan 12 Retro/dsa.png";

export const navLinks = [
  {
    href: "#home",
    label: "Home",
  },
  {
    href: "#about-us",
    label: "About Us",
  },
  {
    href: "#products",
    label: "Products",
  },
  {
    href: "#contact-us",
    label: "Contact Us",
  },
];

export const statistics = [
  { id: 1, value: "1k+", label: "Brands" },
  { id: 2, value: "500+", label: "Shops" },
  { id: 3, value: "250k+", label: "Customers" },
];

export const shoes = [
  {
    id: 1,
    thumbnail: bigTest2,
    bigShoe: bigTest2,
  },
  {
    id: 2,
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    id: 3,
    thumbnail: bigTest,
    bigShoe: bigTest,
  },
];

export const products = [
  {
    id: 1,
    imgURL: Black,
    name: "Nike AJKO 1 Low",
    price: "$120.00",
    rating: "4.5",
  },
  {
    id: 2,
    imgURL: White,
    name: "Nike Air Jordan 1 Mid",
    price: "$125.00",
    rating: "4.7",
  },
  {
    id: 3,
    imgURL: Red,
    name: "Nike Air Force 1 Low Retro",
    price: "$150.00",
    rating: "4.8",
  },
  {
    id: 4,
    imgURL: Purple,
    name: "Nike Air Jordan 12 Retro",
    price: "$230.00",
    rating: "4.9",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: gio,
    customerName: "George Nadiradze",
    rating: 4.6,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: shako,
    customerName: "Shalva Esakia",
    rating: 4.7,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
  {
    imgURL: dato,
    customerName: "David Chelidze",
    rating: 4.9,
    feedback:
      "Absolutely delighted with my purchase! The product arrived on time and the quality is outstanding. I'm impressed!",
  },
];

export const socialMedia = [
  { id: 1, src: facebook, alt: "facebook logo" },
  { id: 2, src: twitter, alt: "twitter logo" },
  { id: 3, src: instagram, alt: "instagram logo" },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { id: 1, name: "Air Force 1", link: "/" },
      { id: 2, name: "Air Max 1", link: "/" },
      { id: 3, name: "Air Jordan 1", link: "/" },
      { id: 4, name: "Air Force 2", link: "/" },
      { id: 5, name: "Nike Waffle Racer", link: "/" },
      { id: 6, name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { id: 7, name: "About us", link: "/" },
      { id: 8, name: "FAQs", link: "/" },
      { id: 9, name: "How it works", link: "/" },
      { id: 10, name: "Privacy policy", link: "/" },
      { id: 11, name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { id: 12, name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { id: 13, name: "+92554862354", link: "tel:+92554862354" },
    ],
  },
];

export const detailedProduct = [
  {
    id: 1,
    name: "Nike AJKO 1 Low",
    color: "Black",
    oldPrice: "$150.00",
    price: "$120.00",
    rating: "4.5",
    website: "https://www.nike.com/t/ajko-1-low-mens-shoes-HNz9ps/DX4981-006",
    img1: ajko1,
    img2: ajko2,
    img3: ajko3,
    img4: ajko4,
    description: `Turn heads in the AJKO 1 Low. These kicks take MJ's original icon and repackage it in synthetic leather and canvas. 
    With a decidedly relaxed look and connection to the '85 original, 
    they'll earn nods of approval from longtime fans and brand new sneakerheads alike.`,
  },
  {
    id: 2,
    name: "Nike Air Jordan 1 Mid",
    color: "White",
    oldPrice: "$150.00",
    price: "$125.00",
    rating: "4.7",
    website: "https://www.nike.com/t/air-jordan-1-mid-shoes-X5pM09/554724-136",
    img1: air1,
    img2: air2,
    img3: air3,
    img4: air4,
    description: `Inspired by the original AJ1, the Air Jordan 1 Mid offers fans a chance to follow in MJ's footsteps. 
    Fresh color trims the clean, classic materials, imbuing modernity into a classic design.`,
  },
  {
    id: 3,
    name: "Nike Air Force 1 Low Retro",
    color: "Red",
    oldPrice: "$170.00",
    price: "$150.00",
    rating: "4.8",
    website:
      "https://www.nike.com/t/air-force-1-low-retro-mens-shoes-1VHstQ/FD7039-600",
    img1: force1,
    img2: force2,
    img3: force3,
    img4: force4,
    description: `A scorching edition to your AF1 collection, this head-turning take on the hoops-to-street icon brings the heat. 
    Contrasting colors add a bold look to any 'fit, while Nike Air cushioning puts the cherry on the bottom.`,
  },
  {
    id: 4,
    name: "Nike Air Jordan 12 Retro",
    color: "Purple",
    oldPrice: "$250.00",
    price: "$230.00",
    rating: "4.9",
    website:
      "https://www.nike.com/t/air-jordan-12-retro-mens-shoes-9rPt0x/CT8013-057",
    img1: purple1,
    img2: purple2,
    img3: purple3,
    img4: purple4,
    description: `No need to call for a ride—MJ's game-winning look from '96 will get you where you need to go. 
    This AJ12 is the return of Tinker Hatfield's celebrated design, the first to bring Zoom Air cushioning to Jordan's signature line.
     Premium materials give it a seasonal refresh, 
    while the sunrise-inspired stitch lines on the upper hook back to the original. This is buzzer-beater style, perfected.`,
  },
];
