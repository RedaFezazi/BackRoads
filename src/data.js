import imgTour1 from "./images/tour-1.jpeg";
import imgTour2 from "./images/tour-2.jpeg";
import imgTour3 from "./images/tour-3.jpeg";
import imgTour4 from "./images/tour-4.jpeg";

export const anchorLinks = [
  {
    id: 1,
    href: "#home",
    value: "Home",
  },
  {
    id: 2,
    href: "#about",
    value: "About",
  },
  {
    id: 3,
    href: "#services",
    value: "Services",
  },
  {
    id: 4,
    href: "#tours",
    value: "Tours",
  },
];

export const socialLinks = [
  { website: "twitter", id: 1 },
  { website: "squarespace", id: 2 },
  { website: "facebook", id: 3 },
];

export const services = [
  { id: 1, text: "saving money", icon: "fas fa-wallet fa-fw" },
  { id: 2, text: "endless hiking", icon: "fas fa-tree fa-fw" },
  { id: 3, text: "amazing comfort", icon: "fas fa-socks fa-fw" },
];

export const tours = [
  {
    id: 1,
    img: imgTour1,
    date: "august 26th, 2020",
    title: "Tibet Adventure",
    info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    country: "china",
    duration: "6 days",
    price: "from $2100",
  },
  {
    id: 2,
    img: imgTour2,
    date: "october 1th, 2020",
    title: "best of java",
    info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    country: "indonesia",
    duration: "11 days",
    price: "from $1400",
  },
  {
    id: 3,
    img: imgTour3,
    date: "september 15th, 2020",
    title: "explore hong kong",
    info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    country: "HONG KONG",
    duration: "8 DAYS",
    price: "from $5000",
  },
  {
    id: 4,
    img: imgTour4,
    date: "december 5th, 2019",
    title: "kenya highlights",
    info: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
              vitae tempore voluptatum maxime reprehenderit eum quod
              exercitationem fugit, qui corporis.`,
    country: "kenya",
    duration: "20 days",
    price: "from $3300",
  },
];
