class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="btn btn-black"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    const initialMoney = 85838100000000.02;
    const [money, setMoney] = React.useState(initialMoney);
    const [purchases, setPurchases] = React.useState({});
    const [showReceipt, setShowReceipt] = React.useState(false);

    const items = [
      { id: 1, name: "कप चाय", price: 10, image: "☕", category: "daily" },
      { id: 2, name: "समोसा", price: 20, image: "🥟", category: "daily" },
      { id: 3, name: "पिज्जा", price: 500, image: "🍕", category: "food" },
      { id: 4, name: "iPhone 15 Pro", price: 134900, image: "📱", category: "tech" },
      { id: 5, name: "MacBook Pro", price: 239900, image: "💻", category: "tech" },
      
      // Bikes
      { id: 6, name: "Royal Enfield", price: 250000, image: "🏍️", category: "bikes" },
      { id: 7, name: "Harley Davidson", price: 1500000, image: "🏍️", category: "bikes" },
      { id: 8, name: "Ducati Panigale", price: 2500000, image: "🏍️", category: "bikes" },
      { id: 9, name: "BMW S1000RR", price: 2000000, image: "🏍️", category: "bikes" },
      
      // Cars
      { id: 10, name: "Maruti Swift", price: 800000, image: "🚗", category: "cars" },
      { id: 11, name: "BMW X5", price: 8000000, image: "🚗", category: "cars" },
      { id: 12, name: "Mercedes S-Class", price: 15000000, image: "🚗", category: "cars" },
      { id: 13, name: "Tesla Model S", price: 10000000, image: "🚗", category: "cars" },
      { id: 14, name: "Lamborghini", price: 50000000, image: "🏎️", category: "cars" },
      { id: 15, name: "Ferrari", price: 60000000, image: "🏎️", category: "cars" },
      { id: 16, name: "Bugatti", price: 180000000, image: "🏎️", category: "cars" },
      { id: 17, name: "Rolls Royce", price: 80000000, image: "🚗", category: "cars" },
      
      // Animals & Luxury
      { id: 18, name: "घोड़ा", price: 500000, image: "🐎", category: "animals" },
      { id: 19, name: "रेसिंग घोड़ा", price: 5000000, image: "🐎", category: "animals" },
      { id: 20, name: "हाथी", price: 10000000, image: "🐘", category: "animals" },
      { id: 21, name: "Rolex घड़ी", price: 5000000, image: "⌚", category: "luxury" },
      { id: 22, name: "हीरे का हार", price: 25000000, image: "💎", category: "luxury" },
      
      // Property
      { id: 23, name: "मुंबई में फ्लैट", price: 50000000, image: "🏠", category: "property" },
      { id: 24, name: "दिल्ली में बंगला", price: 100000000, image: "🏘️", category: "property" },
      { id: 25, name: "गोवा में रिसॉर्ट", price: 200000000, image: "🏖️", category: "property" },
      { id: 26, name: "प्राइवेट आइलैंड", price: 5000000000, image: "🏝️", category: "property" },
      
      // Ultra Luxury
      { id: 27, name: "प्राइवेट जेट", price: 500000000, image: "✈️", category: "luxury" },
      { id: 28, name: "यॉट", price: 1000000000, image: "🛥️", category: "luxury" },
      { id: 29, name: "हेलिकॉप्टर", price: 200000000, image: "🚁", category: "luxury" },
      
      // Business
      { id: 30, name: "फुटबॉल टीम", price: 50000000000, image: "⚽", category: "business" },
      { id: 31, name: "IPL टीम", price: 100000000000, image: "🏏", category: "business" },
      { id: 32, name: "होटल चेन", price: 500000000000, image: "🏨", category: "business" },
      { id: 33, name: "स्पेस मिशन", price: 1000000000000, image: "🚀", category: "space" }
    ];

    const formatMoney = (amount) => {
      return `₹${amount.toLocaleString('en-IN', { 
        minimumFractionDigits: 0, 
        maximumFractionDigits: 2 
      })}`;
    };

    const buyItem = (item) => {
      if (money >= item.price) {
        setMoney(prev => prev - item.price);
        setPurchases(prev => ({
          ...prev,
          [item.id]: (prev[item.id] || 0) + 1
        }));
      }
    };

    const sellItem = (item) => {
      if (purchases[item.id] > 0) {
        setMoney(prev => prev + item.price);
        setPurchases(prev => ({
          ...prev,
          [item.id]: prev[item.id] - 1
        }));
      }
    };

    const getTotalSpent = () => {
      return initialMoney - money;
    };

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100" data-name="app" data-file="app.js">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              मुकेश अंबानी की संपत्ति खर्च करें
            </h1>
            <p className="text-gray-600 mb-4">
              भारत के सबसे अमीर व्यक्ति की संपत्ति को खर्च करने का मजा लें!
            </p>
            <MoneyDisplay money={money} formatMoney={formatMoney} />
          </div>

          <div className="mb-6 text-center">
            <button
              onClick={() => setShowReceipt(!showReceipt)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              {showReceipt ? 'आइटम छुपाएं' : 'रसीद देखें'}
            </button>
          </div>

          {showReceipt && (
            <Receipt 
              purchases={purchases} 
              items={items} 
              getTotalSpent={getTotalSpent} 
              formatMoney={formatMoney} 
            />
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map(item => (
              <ItemCard
                key={item.id}
                item={item}
                quantity={purchases[item.id] || 0}
                onBuy={buyItem}
                onSell={sellItem}
                formatMoney={formatMoney}
                canAfford={money >= item.price}
              />
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);