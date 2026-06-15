import { Product } from '@/store/useCartStore';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Running Shoes',
    price: 99,
    category: 'Clothing',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFyo3y4QkZ8vfn6JjS9NDRfPGQvktBpi4cRA&s',
    // image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60',
    description: 'High-performance lightweight running shoes engineered with advanced responsive foam technology.'
  },
  {
    id: '2',
    title: 'Wireless Headphones',
    price: 179,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60',
    description: 'Premium wireless over-ear headphones featuring hybrid active noise cancellation.'
  },
  {
    id: '3',
    title: 'Backpack',
    price: 129,
    category: 'Home',
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60',
    description: 'Minimalist water-resistant everyday carry pack with a dedicated suspended laptop compartment.'
  },
  {
    id: '4',
    title: 'Smortwatch',
    price: 249,
    category: 'Electronics',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5_BiytIY6-VeVqdfWWCSRUmu4_1cvU4Pmiw&s',
    // image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60',
    description: 'Next-generation smart wearable with complete biometric telemetry and ultra-long battery life.'
  },
  {
    id: '5',
    title: 'Sunglasses',
    price: 149,
    category: 'Clothing',
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60',
    description: 'Classic polarized timeless designer shades offering 100% complete UVA/UVB ray shields.'
  },
  {
    id: '6',
    title: 'Digital Camera',
    price: 499,
    category: 'Electronics',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&auto=format&fit=crop&q=60',
    description: 'Compact mirroring system providing crisp high-resolution imaging configurations.'
  },
  {
    id: '7',
    title: 'T-shirt',
    price: 29,
    category: 'Clothing',
    image:'https://img.magnific.com/premium-vector/blue-vector-men-s-t-shirt-mockup_292608-166.jpg?semt=ais_hybrid&w=740&q=80',
    // image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=60',
    description: 'Ultra-soft pure combed organic cotton crewneck engineered for continuous regular daily wear.'
  },
  {
    id: '8',
    title: 'Smartphone',
    price: 699,
    category: 'Electronics',
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxxKn4f3bgtZ-ixK19J4v9BCuDuuzkyRK4gw&s',
    // image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&auto=format&fit=crop&q=60',
    description: 'Lorem ipsum dolor amet, conssectetur euisagend. Edge-to-edge screen display arrays.',
    rating: 4
  }
];