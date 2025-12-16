import { Box, Package, Sticker, ShoppingBag, Stamp } from 'lucide-react';

export const BUSINESS_INFO = {
  name: "PrimePack Packaging Solutions",
  phone: "+8801700000000", // Demo phone
  whatsapp: "8801700000000",
  address: "House 12, Road 5, Sector 10, Uttara, Dhaka-1230",
  mapLink: "https://share.google/YE4yYRc7TfziFs0Z7", // Provided link
  hours: "Sat - Thu: 9:00 AM - 8:00 PM",
  email: "info@primepackbd.com"
};

export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  icon: any;
}

export const PRODUCTS: Product[] = [
  {
    id: "paper-box",
    name: "পেপার বক্স প্যাকেজিং",
    description: "Eco-friendly corrugated boxes perfect for e-commerce shipping and gifts.",
    price: "শুরু মাত্র ৳১২ / পিস",
    image: "https://picsum.photos/id/1080/600/400",
    icon: Box
  },
  {
    id: "custom-box",
    name: "কাস্টম প্রিন্টেড বক্স",
    description: "Premium branded boxes with your logo. Ideal for luxury items and branding.",
    price: "শুরু মাত্র ৳২৫ / পিস",
    image: "https://picsum.photos/id/20/600/400",
    icon: Package
  },
  {
    id: "plastic-pouch",
    name: "প্লাস্টিক পাউচ",
    description: "Durable, sealable pouches for food, spices, and small accessories.",
    price: "শুরু মাত্র ৳৮ / পিস",
    image: "https://picsum.photos/id/431/600/400",
    icon: ShoppingBag
  },
  {
    id: "food-container",
    name: "ফুড প্যাকেজিং কন্টেইনার",
    description: "Hygenic, food-grade disposable containers for restaurants and catering.",
    price: "শুরু মাত্র ৳১৫ / পিস",
    image: "https://picsum.photos/id/493/600/400",
    icon: Package
  },
  {
    id: "sticker-branding",
    name: "লেবেল স্টিকার ও ব্র্যান্ডিং",
    description: "High-quality adhesive labels to give your product a professional finish.",
    price: "শুরু মাত্র ৳৫০০ (বান্ডেল)",
    image: "https://picsum.photos/id/366/600/400",
    icon: Sticker
  }
];

export const NAV_LINKS = [
  { name: "Home", href: "hero" },
  { name: "Products", href: "products" },
  { name: "About", href: "about" },
  { name: "Location", href: "location" },
  { name: "Contact", href: "contact" },
];