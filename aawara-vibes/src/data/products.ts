export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'Coffee' | 'Pizza';
  image: string;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Midnight Espresso',
    description: 'A intense, velvety double shot of our specialty roasted beans.',
    price: 180,
    category: 'Coffee',
    image: '/assets/coffee.png',
  },
  {
    id: '2',
    name: 'Creamy Cappuccino',
    description: 'Perfectly balanced espresso with silky steamed milk and a thick layer of foam.',
    price: 220,
    category: 'Coffee',
    image: '/assets/coffee.png',
  },
  {
    id: '3',
    name: 'Aawara Signature Latte',
    description: 'Our secret blend with a hint of vanilla and a toasted hazelnut finish.',
    price: 250,
    category: 'Coffee',
    image: '/assets/coffee.png',
  },
  {
    id: '4',
    name: 'Classic Margherita',
    description: 'Fresh mozzarella, San Marzano tomatoes, and fragrant basil on an artisan crust.',
    price: 450,
    category: 'Pizza',
    image: '/assets/pizza.png',
  },
  {
    id: '5',
    name: 'Truffle Mushroom Pizza',
    description: 'Earthy mushrooms, truffle oil, and creamy fontina cheese.',
    price: 580,
    category: 'Pizza',
    image: '/assets/pizza.png',
  },
  {
    id: '6',
    name: 'Spicy Pepperoni',
    description: 'Premium pepperoni, hot honey, and red pepper flakes for an extra kick.',
    price: 520,
    category: 'Pizza',
    image: '/assets/pizza.png',
  },
];
