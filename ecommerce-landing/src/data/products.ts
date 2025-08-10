export interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  stock: number;
  category: string;
  discount: number;
  description: string;
  image: string;
}

export const productsData: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 49.99,
    rating: 4.5,
    stock: 12,
    category: "Electronics",
    discount: 10,
    description: "High-quality wireless headphones with noise cancellation.",
    image: "https://via.placeholder.com/200x200"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 89.99,
    rating: 4.0,
    stock: 8,
    category: "Wearables",
    discount: 0,
    description: "Track fitness, monitor health, and receive notifications.",
    image: "https://via.placeholder.com/200x200"
  },
  {
    id: 3,
    name: "Leather Wallet",
    price: 29.99,
    rating: 4.8,
    stock: 20,
    category: "Accessories",
    discount: 15,
    description: "Stylish genuine leather wallet with multiple compartments.",
    image: "https://via.placeholder.com/200x200"
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: 39.99,
    rating: 4.3,
    stock: 0,
    category: "Electronics",
    discount: 5,
    description: "Portable speaker with deep bass and long battery life.",
    image: "https://via.placeholder.com/200x200"
  },
];
