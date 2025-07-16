function ItemCard({ item, quantity, onBuy, onSell, formatMoney, canAfford }) {
  try {
    return (
      <div className="money-card" data-name="item-card" data-file="components/ItemCard.js">
        <div className="text-center">
          <div className="text-4xl mb-3">{item.image}</div>
          <h3 className="font-semibold text-gray-800 mb-2">{item.name}</h3>
          <p className="text-xl font-bold text-blue-600 mb-4">
            {formatMoney(item.price)}
          </p>
          
          <div className="flex items-center justify-center gap-3 mb-4">
            <button
              onClick={() => onSell(item)}
              disabled={quantity === 0}
              className="sell-btn disabled:opacity-50 disabled:cursor-not-allowed"
            >
              बेचें
            </button>
            
            <span className="font-semibold text-lg min-w-[3rem] text-center">
              {quantity}
            </span>
            
            <button
              onClick={() => onBuy(item)}
              disabled={!canAfford}
              className="buy-btn disabled:opacity-50 disabled:cursor-not-allowed"
            >
              खरीदें
            </button>
          </div>
          
          {quantity > 0 && (
            <p className="text-sm text-gray-600">
              कुल: {formatMoney(item.price * quantity)}
            </p>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('ItemCard component error:', error);
    return null;
  }
}