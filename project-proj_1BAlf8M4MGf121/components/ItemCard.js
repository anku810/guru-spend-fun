function ItemCard({ item, quantity, onBuy, onSell, canAfford }) {
  try {
    return (
      <div className="item-card" data-name="item-card" data-file="components/ItemCard.js">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          {item.name}
        </h3>
        
        <p className="text-2xl font-bold text-green-600 mb-4">
          {formatMoney(item.price)}
        </p>
        
        {quantity > 0 && (
          <div className="mb-4 text-center">
            <span className="quantity-badge">
              Owned: {quantity}
            </span>
          </div>
        )}
        
        <div className="flex gap-2">
          <button
            onClick={() => onBuy(item)}
            disabled={!canAfford}
            className="buy-btn flex-1"
          >
            <div className="icon-plus text-sm mr-1"></div>
            Buy
          </button>
          
          {quantity > 0 && (
            <button
              onClick={() => onSell(item)}
              className="sell-btn flex-1"
            >
              <div className="icon-minus text-sm mr-1"></div>
              Sell
            </button>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('ItemCard component error:', error);
    return null;
  }
}