import React from "react";

import NinebotKickScooterZingE8Pink from "./images/Ninebot eKickScooter Zing E8 Pink-PhotoRoom.png";
import NinebotKickScooterZingE10 from "./images//Ninebot eKickScooter Zing E10-PhotoRoom.png";
import NinebotKickScooterA6 from "./images/Ninebot KickScooter A6-PhotoRoom.png";
import NinebotKickScooterC10 from "./images//Ninebot KickScooter C10-PhotoRoom.png";
import NinebotKickScooterE22 from "./images/Ninebot KickScooter E22-PhotoRoom.png";
import NinebotKickScooterE25 from "./images//Ninebot KickScooter E25-PhotoRoom.png";
import NinebotKickScooterE45 from "./images//Ninebot KickScooter E45-PhotoRoom.png";
import NinebotKickScooterES1 from "./images//Ninebot KickScooter ES1-PhotoRoom.png";
import NinebotKickScooterES1L from "./images//Ninebot KickScooter ES1L-PhotoRoom.png";
import NinebotKickScooterES2 from "./images//Ninebot KickScooter ES2-PhotoRoom.png";
import NinebotKickScooterES4 from "./images//Ninebot KickScooter ES4-PhotoRoom.png";
import NinebotKickScooterF30 from "./images//Ninebot KickScooter F30-PhotoRoom.png";
import NinebotKickScooterF40A from "./images//Ninebot KickScooter F40A-PhotoRoom.png";
import NinebotKickScooterMAXG30LP from "./images//Ninebot KickScooter MAX G30LP-PhotoRoom.png";
import NinebotKickScooterZingE12 from "./images//Ninebot KickScooter Zing E12-PhotoRoom.png";

import payment1 from "../data/images/payment/1.png";
import payment2 from "../data/images/payment/2.png";
import payment3 from "../data/images/payment/3.png";
import payment4 from "../data/images/payment/4.png";
import payment5 from "../data/images/payment/5.png";
import payment6 from "../data/images/payment/6.png";
import payment7 from "../data/images/payment/7.png";
import payment8 from "../data/images/payment/8.png";
import payment9 from "../data/images/payment/9.png";
import payment10 from "../data/images/payment/10.png";
import payment11 from "../data/images/payment/11.png";
import payment12 from "../data/images/payment/12.png";
import payment13 from "../data/images/payment/13.png";
import payment14 from "../data/images/payment/14.png";
import payment15 from "../data/images/payment/15.png";

import description1 from "../data/images/description/1.png";
import description2 from "../data/images/description/2.png";
import description3 from "../data/images/description/3.png";
import description4 from "../data/images/description/4.png";

import descriptionItem1 from "../data/images/description/5.png";
import descriptionItem2 from "../data/images/description/6.png";
import descriptionItem3 from "../data/images/description/7.png";
import descriptionItem4 from "../data/images/description/8.png";

import ReceiptLongOutlinedIcon from "@mui/icons-material/ReceiptLongOutlined";
import ConstructionIcon from "@mui/icons-material/Construction";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import TravelExploreOutlinedIcon from "@mui/icons-material/TravelExploreOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import UnarchiveOutlinedIcon from "@mui/icons-material/UnarchiveOutlined";

import accessories1 from "../data/images/accessories/Ninebot Engine Speaker.png";
import accessories2 from "../data/images/accessories/Extension Rod.png";
import accessories3 from "../data/images/accessories/Segway Protective Gear Set.png";
import accessories4 from "../data/images/accessories/Ninebot Leisure Backpack.png";
import accessories5 from "../data/images/accessories/Segway External Battery.png";
import accessories6 from "../data/images/accessories/Segway Charger.png";
import accessories7 from "../data/images/accessories/Segway Scooter Bag.png";
import accessories8 from "../data/images/accessories/Segway Phone Holder.png";
import accessories9 from "../data/images/accessories/Segway Body Holder.png";

import CarlAdams from "../data/images/team/Carl Adams.png";
import JackCray from "../data/images/team/Jack Cray.png";
import JasonStewardt from "../data/images/team/Jason Stewardt.png";
import JohnSmith from "../data/images/team/John Smith.png";
import LisaMount from "../data/images/team/Lisa Mount.png";
import MaxNiklsen from "../data/images/team/Max Niklsen.png";

import CarabelleDurrad from "../data/images/writers/Carabelle Durrad.png";
import FarimaDelgadillo from "../data/images/writers/Farima Delgadillo.png";
import HamChuwon from "../data/images/writers/Ham Chuwon.png";
import HarrisonPhilips from "../data/images/writers/Harrison Philips.png";
import ShuHua from "../data/images/writers/Shu Hua.png";
import IzabellaTabakova from "../data/images/writers/Izabella Tabakova.png";
import JurrenOldhof from "../data/images/writers/Jurren Oldhof.png";
import NonkosiJoyi from "../data/images/writers/Nonkosi Joyi.png";
import WenYahui from "../data/images/writers/Wen Yahui.png";
import TallahCotton from "../data/images/writers/Tallah Cotton.png";
import PabloCambeiro from "../data/images/writers/Pablo Cambeiro.png";
import QinShoi from "../data/images/writers/Qin Shi.png";

export const scooters = [
  {
    name: "Ninebot KickScooter ES1",
    loadCapacity: 100,
    speed: 20,
    maxCorner: 10,
    range: 25,
    battery: 5200,
    watt: 250,
    cost: 307.99,
    imageURL: NinebotKickScooterES1,
    id: 0,
  },
  {
    name: "Ninebot KickScooter ES2",
    loadCapacity: 100,
    speed: 25,
    maxCorner: 10,
    range: 25,
    battery: 5200,
    watt: 300,
    cost: 461.99,
    imageURL: NinebotKickScooterES2,
    id: 1,
  },
  {
    name: "Ninebot KickScooter E25",
    loadCapacity: 100,
    speed: 25,
    maxCorner: 15,
    range: 25,
    battery: 5900,
    watt: 300,
    cost: 461.99,
    imageURL: NinebotKickScooterE25,
    id: 2,
  },
  {
    name: "Ninebot KickScooter ES4",
    loadCapacity: 100,
    speed: 30,
    maxCorner: 10,
    range: 45,
    battery: 6500,
    watt: 300,
    cost: 461.99,
    imageURL: NinebotKickScooterES4,
    id: 3,
  },
  {
    name: "Ninebot KickScooter E45",
    loadCapacity: 100,
    speed: 30,
    maxCorner: 20,
    range: 45,
    battery: 10200,
    watt: 300,
    cost: 929.99,
    imageURL: NinebotKickScooterE45,
    id: 4,
  },
  {
    name: "Ninebot KickScooter Zing E8 Blue",
    loadCapacity: 50,
    speed: 14,
    maxCorner: 7,
    range: 10,
    battery: 2550,
    watt: 260,
    cost: 261.99,
    imageURL: NinebotKickScooterZingE8Pink,
    id: 5,
  },
  {
    name: "Ninebot KickScooter Zing E10",
    loadCapacity: 60,
    speed: 16,
    maxCorner: 7,
    range: 10,
    battery: 2550,
    watt: 300,
    cost: 292.99,
    imageURL: NinebotKickScooterZingE10,
    id: 6,
  },
  {
    name: "Ninebot KickScooter C10",
    loadCapacity: 50,
    speed: 18,
    maxCorner: 7,
    range: 10,
    battery: 3820,
    watt: 250,
    cost: 230.99,
    imageURL: NinebotKickScooterC10,
    id: 7,
  },
  {
    name: "Ninebot KickScooter E22",
    loadCapacity: 100,
    speed: 20,
    maxCorner: 15,
    range: 22,
    battery: 5200,
    watt: 300,
    cost: 307.99,
    imageURL: NinebotKickScooterE22,
    id: 8,
  },
  {
    name: "Ninebot KickScooter Zing E8 Pink",
    loadCapacity: 50,
    speed: 14,
    maxCorner: 7,
    range: 10,
    battery: 2550,
    watt: 300,
    cost: 261.99,
    imageURL: NinebotKickScooterZingE8Pink,
    id: 9,
  },
  {
    name: "Ninebot KickScooter MAX G30LP",
    loadCapacity: 100,
    speed: 30,
    maxCorner: 20,
    range: 40,
    battery: 14400,
    watt: 320,
    cost: 769.99,
    imageURL: NinebotKickScooterMAXG30LP,
    id: 10,
  },
  {
    name: "Ninebot KickScooter ES1L",
    loadCapacity: 100,
    speed: 20,
    maxCorner: 7,
    range: 40,
    battery: 7600,
    watt: 300,
    cost: 769.99,
    imageURL: NinebotKickScooterES1L,
    id: 11,
  },
  {
    name: "Ninebot KickScooter F30",
    loadCapacity: 120,
    speed: 30,
    maxCorner: 15,
    range: 30,
    battery: 10200,
    watt: 350,
    cost: 538.99,
    imageURL: NinebotKickScooterF30,
    id: 12,
  },
  {
    name: "Ninebot KickScooter F40A",
    loadCapacity: 120,
    speed: 25,
    maxCorner: 20,
    range: 40,
    battery: 10200,
    watt: 350,
    cost: 538.99,
    imageURL: NinebotKickScooterF40A,
    id: 13,
  },
  {
    name: "Ninebot KickScooter A6",
    loadCapacity: 40,
    speed: 12,
    maxCorner: 7,
    range: 5,
    battery: 2550,
    watt: 250,
    cost: 153.99,
    imageURL: NinebotKickScooterA6,
    id: 14,
  },
  {
    name: "Ninebot KickScooter Zing E12",
    loadCapacity: 60,
    speed: 18,
    maxCorner: 7,
    range: 10,
    battery: 5500,
    watt: 300,
    cost: 230.99,
    imageURL: NinebotKickScooterZingE12,
    id: 15,
  },
];

export const accessories = [
  {
    name: "Ninebot Engine Speaker",
    description:
      "The built-in engine sound simulation system can simulate the realistic engine roar based on the vehicles accelerator, brake, speed, and other signals",
    cost: 149.99,
    imageURL: accessories1,
    id: 1,
  },
  {
    name: "Ninebot Extension Rod",
    description:
      "The Extension Rod helps you to easily maneuver your scooter, so you no longer need to bend over and push it, making it easier to take with you anywhere.",
    cost: 29.99,
    imageURL: accessories2,
    id: 2,
  },
  {
    name: "Segway Protective Gear Set",
    description:
      "The curved, streamlined design of the helmet shell, coupled with the thick, high-quality fabrics create a helmet that is stylish, protective and comfortable to wear.",
    cost: 29.99,
    imageURL: accessories3,
    id: 3,
  },
  {
    name: "Ninebot Leisure Backpack",
    description:
      "The Ninebot leisure backpack adopts a stylish gray-yellow color contrast, adding a trendy accessory to your wardrobe.",
    cost: 69.99,
    imageURL: accessories4,
    id: 4,
  },
  {
    name: "Segway External Battery",
    description:
      "It is easy to install and increases the range of the ES1, ES2 & E22 to 27.9, 28 and 27 miles respectively and It also increases the speed",
    cost: 249.99,
    imageURL: accessories5,
    id: 5,
  },
  {
    name: "Ninebot Segway Charger",
    description:
      "Whether at home, the office, or on your KickScooter journey, this Ninebot KickScooter by Segway Charger is designed to provide a safe and stable charge anytime, anywhere.",
    cost: 79.99,
    imageURL: accessories6,
    id: 6,
  },
  {
    name: "Segway Scooter Bag",
    description:
      "Tough EVA material, suitable for the entire Ninebot KickScooter by Segway line. 3L capacity gives you plenty of room to carry your phone, charger, bottled water, and other personal items.",
    cost: 49.99,
    imageURL: accessories7,
    id: 7,
  },
  {
    name: "Segway Phone Holder",
    description:
      "The dual screw, non-slip design offers ultimate security and versatility. The phone holder is applicable to multiple vehicle series.",
    cost: 29.99,
    imageURL: accessories8,
    id: 8,
  },
  {
    name: "Segway Body Holder",
    description:
      "This scooter seat is designed to work with the MAX. It offers high quality, comfort and safety that is in line with the MAX KickScooter.",
    cost: 119.99,
    imageURL: accessories9,
    id: 9,
  },
];

export const sliderScooters = scooters.slice(4);

export const newCollectionScooters = scooters.slice(0, 7);

export const headerItems = [
  { title: "catalog", link: "/catalog", id: 0 },
  { title: "accessories", link: "/accessories", id: 1 },
  { title: "about us", link: "/about", id: 2 },
  { title: "contacts", link: "/contacts", id: 3 },
];

export const footerItems = [
  { title: "+1 (888) 888-88-88", id: 1 },
  { title: "2637 Fairfax Ave, Culver City, CA 90232, USA", id: 2 },
  { title: "segway.contacts@example.com", id: 3 },
  { title: "Segway  California © 2022", id: 4 },
];

export const warrantyButtons = [
  { title: "1 Year - $139", id: 0, value: 139, period: 1 },
  { title: "2 Year - $209", id: 1, value: 139, period: 2 },
  { title: "3 Year - $279", id: 2, value: 279, period: 3 },
];

export const payments = [
  { image: payment1, id: 1 },
  { image: payment2, id: 2 },
  { image: payment3, id: 3 },
  { image: payment4, id: 4 },
  { image: payment5, id: 5 },
  { image: payment6, id: 6 },
  { image: payment7, id: 7 },
  { image: payment8, id: 8 },
  { image: payment9, id: 9 },
  { image: payment10, id: 10 },
  { image: payment11, id: 11 },
  { image: payment12, id: 12 },
  { image: payment13, id: 13 },
  { image: payment14, id: 14 },
  { image: payment15, id: 15 },
];

export const description = [
  {
    image: description1,
    title: "Delivery within 1 business day",
    subTitle: "we are in los angeles, ca",
    text: "Free California 1 day shipping. US free shipping 3-5 days",
    subImage: descriptionItem1,
    icon: <Inventory2OutlinedIcon />,
    id: 1,
  },
  {
    image: description2,
    title: "Basic 1 year warranty",
    subTitle: "one year manufacturer`s warranty",
    text:
      "The basic warranty is 1 year. You can also extend the warranty up" +
      " to 4 years",
    subImage: descriptionItem2,
    icon: <ReceiptLongOutlinedIcon />,
    id: 2,
  },
  {
    image: description3,
    title: "After Sales Support",
    subTitle: "After Sales Support",
    text:
      "If you have any difficulties with your kickscooter, our" +
      " specialists will contact you within 15 minutes",
    subImage: descriptionItem3,
    icon: <ConstructionIcon />,
    id: 3,
  },
  {
    image: description4,
    title: "Up to 40 miles per charge",
    subTitle: "Up to 40 miles of range on a single charge",
    text:
      "With a range of up to 40 miles, the longest range on the market, and " +
      "a 20˚uphill climbing angle, the KickScooter MAX allows you to ride from " +
      "San Francisco Bay Area to Palo Alto on a single charge.",
    subImage: descriptionItem4,
    icon: <TravelExploreOutlinedIcon />,
    id: 4,
  },
];

export const aboutUs = [
  {
    nane: "Jason Stewardt",
    job: "founder",
    phone: "+1 (245) 809-23-45",
    mail: "JasonStewardt@exemple.com",
    avatar: JasonStewardt,
    id: 0,
  },
  {
    nane: "Lisa Mount",
    job: "CO founder",
    phone: "+1 (245) 235-14-14",
    mail: "LisaMount@exemple.com",
    avatar: LisaMount,
    id: 1,
  },
  {
    nane: "John Smith",
    job: "developer",
    phone: "+1 (245) 645-23-71",
    mail: "JohnSmith@exemple.com",
    avatar: JohnSmith,
    id: 2,
  },
  {
    nane: "Jack Cray",
    job: "CEO",
    phone: "+1 (245) 457-09-19",
    mail: "JackCray@exemple.com",
    avatar: JackCray,
    id: 3,
  },
  {
    nane: "Max Niklsen",
    job: "sales manager",
    phone: "+1 (245) 298-18-40",
    mail: "MaxNiklsen@exemple.com",
    avatar: MaxNiklsen,
    id: 4,
  },
  {
    nane: "Carl Adams",
    job: "designer",
    phone: "+1 (245) 456-10-56",
    mail: "CarlAdams@exemple.com",
    avatar: CarlAdams,
    id: 5,
  },
];

export const reviewsData = [
  {
    writer: "Ham Chuwon",
    avatar: HamChuwon,
    review:
      "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis autem vel eum iure reprehenderit, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Ut enim ad minima veniam, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, sed do eiusmod tempor incididunt ut labore et dolore...",
    date: "23.12.2020",
    id: 0,
  },
  {
    writer: "Nonkosi Joyi",
    avatar: NonkosiJoyi,
    review:
      "Nemo enim ipsam voluptatem, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, ut et voluptates repudiandae sint et molestiae non recusandae. Lorem ipsum dolor sit amet, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem eum fugiat, quo voluptas nulla pariatur? Excepteur sint occaecat cupidatat non proident, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, sunt in culpa qui officia deserunt mollit anim id est laborum? Quis autem vel eum...",
    date: "14.01.2021",
    id: 1,
  },
  {
    writer: "Izabella Tabakova",
    avatar: IzabellaTabakova,
    review:
      "Quis autem vel eum iure reprehenderit, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Nemo enim ipsam voluptatem, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minim...",
    date: "28.12.2019",
    id: 2,
  },
  {
    writer: "Wen Yahui",
    avatar: WenYahui,
    review:
      "Ut enim ad minima veniam, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, ut et voluptates repudiandae sint et molestiae non recusandae! Nemo enim ipsam voluptatem, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet,...",
    date: "13.05.2018",
    id: 3,
  },
  {
    writer: "Jurren Oldhof",
    avatar: JurrenOldhof,
    review:
      "Sed ut perspiciatis, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua! Itaque earum rerum hic tenetur a sapiente delectus, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, ut et voluptates repudiandae sint et molestiae non recusandae? Nemo enim...",
    date: "16.09.2022",
    id: 4,
  },
  {
    writer: "Farima Delgadillo",
    avatar: FarimaDelgadillo,
    review:
      "At vero eos et accusamus et iusto odio dignissimos ducimus, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga! Itaque earum rerum hic tenetur a sapiente delectus, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, sunt in culpa qui officia deserunt mollit anim id est laborum. Nemo enim ipsam voluptatem, qui blanditiis praesentium voluptatum deleniti atque corrupti,...",
    date: "18.11.2019",
    id: 5,
  },
  {
    writer: "Harrison Philips",
    avatar: HarrisonPhilips,
    review:
      "Itaque earum rerum hic tenetur a sapiente delectus, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, quis nostrud...",
    date: "29.09.2020",
    id: 6,
  },
  {
    writer: "Tallah Cotton",
    avatar: TallahCotton,
    review:
      "Duis aute irure dolor in reprehenderit in voluptate, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Ut enim ad minim veniam, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. At vero eos et accusamus et iusto odio dignissimos ducimus, qui...",
    date: "31.01.2021",
    id: 7,
  },
  {
    writer: "Pablo Cambeiro",
    avatar: PabloCambeiro,
    review:
      "Excepteur sint occaecat cupidatat non proident, quis nostrum exercitationem ullam corporis suscipit laboriosam, qui dolorem eum fugiat, quo voluptas nulla pariatur. Nemo enim ipsam voluptatem, consectetur adipiscing elit, velit esse cillum dolore eu fugiat nulla pariatur! Et harum quidem rerum facilis est et expedita distinctio, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minima veniam, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis autem...",
    date: "14.05.2022",
    id: 8,
  },
  {
    writer: "Qin Shi",
    avatar: QinShoi,
    review:
      "Excepteur sint occaecat cupidatat non proident, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Sed...",
    date: "27.9.2019",
    id: 9,
  },
  {
    writer: "Carabelle Durrad",
    avatar: CarabelleDurrad,
    review:
      "Et harum quidem rerum facilis est et expedita distinctio, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem eum fugiat, quo voluptas nulla pariatur. At vero eos et accusamus et iusto odio dignissimos ducimus, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, ut et voluptates repudiandae sint et molestiae non recusandae. Ut enim ad minima veniam, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, qui dolorem eum fugiat,...",
    date: "19.09.2021",
    id: 10,
  },
  {
    writer: "Shu Hua",
    avatar: ShuHua,
    review:
      "Nemo enim ipsam voluptatem, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Duis aute irure dolor in reprehenderit in voluptate, nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, quis nostrum exercitationem ullam corporis suscipit laboriosam, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Duis aute irure dolor in reprehenderit in...",
    date: "20.12.2021",
    id: 11,
  },
];

export const benefits = [
  {
    title: "shop worldwide",
    icon: <LocalShippingOutlinedIcon fontSize="large" />,
    text: "Lorem ipsum dolor sit amet. Ut iusto voluptatem ut eius iste est quod autem ad ullam reprehenderit eos nostrum accusamus aut veniam quidem et ullam sunt. ",
    id: 1,
  },
  {
    title: "24/7 support",
    icon: <ContactSupportOutlinedIcon fontSize="large" />,
    text: "Non mollitia reiciendis ut placeat quis rem consequatur minima suscipit quibusdam est esse deserunt rem aliquam possimus. Ut similique sunt vel iure commodi sit nostrum veritatis.",
    id: 2,
  },
  {
    title: "big saving shop",
    icon: <UnarchiveOutlinedIcon fontSize="large" />,
    text: " Et perspiciatis excepturi At alias temporibus sit consequatur quis quo quis nulla ut consequuntur quia eum repellendus quam est temporibus perspiciatis.",
    id: 3,
  },
];
