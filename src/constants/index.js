import { Twitter, Instagram, Facebook } from "lucide-react";

export const NAV_LINKS = [
    { href: '#home', key: 'home', label: 'Home' },
    { href: '#about', key: 'about', label: 'About us' },
    { href: '#products', key: 'products', label: 'Products' },
  ]
export const socialLinks = [
    { id: "twitter", icon: Twitter, url: "https://twitter.com" },
    { id: "instagram", icon: Instagram, url: "https://instagram.com" },
    { id: "facebook", icon: Facebook, url: "https://facebook.com" },
  ];

export const menuSections = [
    {
      id: "home",
      title: "Home",
      items: [
        "About Us",
        "News & Articles",
        "Connect with us",
        "Terms & Conditions",
      ],
    },
    {
      id: "products",
      title: "Products",
      items: [
        "About Us",
        "News & Articles",
        "Connect with us",
        "Terms & Conditions",
      ],
    },
    {
      id: "blogs",
      title: "Blogs",
      items: [
        "About Us",
        "News & Articles",
        "Connect with us",
        "Terms & Conditions",
      ],
    },
  ];