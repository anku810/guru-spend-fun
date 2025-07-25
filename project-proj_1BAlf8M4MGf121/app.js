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
    const [money, setMoney] = React.useState(1000000000); // Start with $1 billion
    const [purchases, setPurchases] = React.useState({});
    const [totalSpent, setTotalSpent] = React.useState(0);

    const handleBuy = (item) => {
      if (money >= item.price) {
        setMoney(prev => prev - item.price);
        setPurchases(prev => ({
          ...prev,
          [item.id]: (prev[item.id] || 0) + 1
        }));
        setTotalSpent(prev => prev + item.price);
      }
    };

    const handleSell = (item) => {
      if (purchases[item.id] > 0) {
        setMoney(prev => prev + item.price);
        setPurchases(prev => ({
          ...prev,
          [item.id]: prev[item.id] - 1
        }));
        setTotalSpent(prev => prev - item.price);
      }
    };

    const handleMoneyChange = (newAmount) => {
      setMoney(newAmount);
      setPurchases({});
      setTotalSpent(0);
    };

    return (
      <div className="min-h-screen bg-gray-50" data-name="app" data-file="app.js">
        <Header 
          money={money} 
          onMoneyChange={handleMoneyChange}
        />
        
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Receipt 
            purchases={purchases}
            totalSpent={totalSpent}
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SPENDING_ITEMS.map(item => (
              <ItemCard
                key={item.id}
                item={item}
                quantity={purchases[item.id] || 0}
                onBuy={handleBuy}
                onSell={handleSell}
                canAfford={money >= item.price}
              />
            ))}
          </div>
          
          {money === 0 && (
            <div className="text-center mt-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                💸 You've spent all your money!
              </h2>
              <p className="text-gray-600 mb-6">
                Total spent: {formatMoney(totalSpent)}
              </p>
              <button
                onClick={() => handleMoneyChange(1000000000)}
                className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold"
              >
                Start Over with $1B
              </button>
            </div>
          )}
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