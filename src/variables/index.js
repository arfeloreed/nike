import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons/index.js";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images/index.js";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Products" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "1k+", label: "Brands" },
  { value: "500+", label: "Shops" },
  { value: "250k+", label: "Customers" },
];

export const products = [
  {
    imgURL: shoe4,
    name: "Nike Air Jordan-01",
    price: "₱7299",
  },
  {
    imgURL: shoe5,
    name: "Nike Air Jordan-10",
    price: "₱5699",
  },
  {
    imgURL: shoe6,
    name: "Nike Air Jordan-100",
    price: "₱8999",
  },
  {
    imgURL: shoe7,
    name: "Nike Air Jordan-001",
    price: "₱6299",
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
    imgURL: customer2,
    customerName: "Reed Pogi",
    rating: 4.7,
    feedback:
      "Grabe, napakatibay talaga ng mga gawa ng nike. Pwde ipampalo pag may kaaway ka. Kaya I approved!",
  },
  {
    imgURL: customer2,
    customerName: "Arfelo Reed",
    rating: 4.5,
    feedback:
      "Grabe mga Lodi, the best talaga ang Nike. Check na check. Solid ang quality, ganda pa ng mga designs. One pipti lang!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "/" },
      { name: "Air Max 1", link: "/" },
      { name: "Air Jordan 1", link: "/" },
      { name: "Air Force 2", link: "/" },
      { name: "Nike Waffle Racer", link: "/" },
      { name: "Nike Cortez", link: "/" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "/" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+639959813002", link: "mobile:+639959813002" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
