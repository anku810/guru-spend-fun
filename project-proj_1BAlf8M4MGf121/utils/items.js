const SPENDING_ITEMS = [
  {
    id: 1,
    name: "Big Mac",
    price: 5,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop",
    category: "food"
  },
  {
    id: 2,
    name: "Coffee",
    price: 4,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=200&fit=crop",
    category: "food"
  },
  {
    id: 3,
    name: "iPhone 15 Pro",
    price: 1199,
    image: "https://images.unsplash.com/photo-1592286377123-2e2d0d2a3b80?w=300&h=200&fit=crop",
    category: "tech"
  },
  {
    id: 4,
    name: "MacBook Pro",
    price: 2499,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300&h=200&fit=crop",
    category: "tech"
  },
  {
    id: 5,
    name: "Tesla Model 3",
    price: 35000,
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=300&h=200&fit=crop",
    category: "vehicles"
  },
  {
    id: 6,
    name: "Rolex Watch",
    price: 15000,
    image: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=300&h=200&fit=crop",
    category: "luxury"
  },
  {
    id: 7,
    name: "Private Jet",
    price: 50000000,
    image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?w=300&h=200&fit=crop",
    category: "luxury"
  },
  {
    id: 8,
    name: "Mansion",
    price: 10000000,
    image: "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?w=300&h=200&fit=crop",
    category: "real-estate"
  },
  {
    id: 9,
    name: "Yacht",
    price: 25000000,
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&h=200&fit=crop",
    category: "luxury"
  },
  {
    id: 10,
    name: "Gaming Setup",
    price: 5000,
    image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=300&h=200&fit=crop",
    category: "tech"
  }
];

function formatMoney(amount) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}