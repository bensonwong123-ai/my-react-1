export const pageLinks = [
    {id: 1, href: "#home", text: "home"},
    {id: 2, href: "#about", text: "about"},
    {id: 3, href: "#services", text: "services"},
    {id: 4, href: "#tours", text: "tours"}
]

export const socialLinks = [
    {id: 1, href: "https://www.facebook.com", iconClass: "fa-brands fa-facebook"},
    {id: 2, href: "https://www.threads.com", iconClass: "fa-brands fa-threads"},
    {id: 3, href: "https://www.twitter.com", iconClass: "fa-brands fa-x-twitter"}
]

export const services = [
    {id: 1, image: "fa-solid fa-wallet", 
    title:"saving money", info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum!"},
    {id: 2, icon: "fa-solid fa-tree", title:"endless hiking", info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum!"},
    {id: 3, icon: "fa-solid fa-socks", title:"amazing comfort", info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum!"}
]

import tour1 from './src/assets/tour1.jpeg';
import tour2 from './src/assets/tour2.jpeg';
import tour3 from './src/assets/tour3.png';
import tour4 from './src/assets/tour4.png';

export const tours = [
    {   id: 1, 
        image: tour1, 
        date:"september 26th, 2026", 
        title:"mount everest", 
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum!",
        location: "china",
        duration: 6,
        price: 2100
    },
    {   id: 2, 
        image: tour2, 
        date:"september 29th, 2026", 
        title:"mount everest", 
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum!",
        location: "japan",
        duration: 8,
        price: 3100
    },
    {   id: 3,
        image: tour3, 
        date:"October 2th, 2026", 
        title:"mount everest", 
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum!",
        location: "india",
        duration: 9,
        price: 5100
    },
    {   id: 4, 
        image: tour4, 
        date:"october 16th, 2026", 
        title:"mount everest", 
        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, earum!",
        location: "usa",
        duration: 10,
        price: 6100
    }
]