import { AiFillHeart, AiOutlineHeart, AiOutlinePieChart } from 'react-icons/ai';
import image1 from '../assets/product1.jpg'
import image2 from "../assets/product2.jpg";
import image3 from "../assets/product3.jpg";

import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";
import user5 from "../assets/user5.jpg";



import { MdDeliveryDining, MdOutlineExplore, MdOutlinePermContactCalendar } from 'react-icons/md';
import { BsCart2, BsCreditCard2Front } from 'react-icons/bs';
import { BiTrendingUp } from 'react-icons/bi';
import { SlCalender } from 'react-icons/sl';

export const userImages = [user1, user2, user3, user4];
export const sideBarItems = [
    {
        icon: <AiOutlinePieChart />,
        title: "DashBoard",
    },
    {
        icon: <MdDeliveryDining />,
        title: "Orders",
    },
    {
        icon: <MdOutlineExplore />,
        title: "Explore",
    },
    {
        icon: <BsCart2 />,
        title: "Products",
    },
    {
        icon: <BiTrendingUp />,
        title: "Trends",
    },
    {
        icon: <MdOutlinePermContactCalendar />,
        title: "Contact",
    },
    {
        icon: <SlCalender />,
        title: "Calender",
    },
    {
        icon: <BsCreditCard2Front />,
        title: "Billing",
    },
];

export const products = [
    {
        icon: <AiFillHeart />,
        imageSrc: image1,
        title: "Sound Forge",
    }, {
        icon: <AiOutlineHeart />,
        imageSrc: image2,
        title: "Pulse Beats",
    },
    {
        icon: <AiOutlineHeart />,
        imageSrc: image3,
        title: "Echo Drift",
    },
];
const content = "Order a new Headphone";
export const customers = [
    {
        title: "Lila Mae",
        content: content,
        image: user2,
        duration: "2 min ago",
    },
    {
        title: "Luca James",
        content: content,
        image: user3,
        duration: "9 min ago",
    },
    {
        title: "Ethan Cole",
        content: content,
        image: user1,
        duration: "13 min ago",
    },
    {
        title: "Sofia Grace",
        content: content,
        image: user4,
        duration: "21 min ago",
    },
    {
        title: "Ava Rose",
        content: content,
        image: user5,
        duration: "32 min ago",
    },
];
