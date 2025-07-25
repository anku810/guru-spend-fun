function Receipt({ purchases, totalSpent }) {
  try {
    const purchasedItems = Object.entries(purchases).filter(([_, quantity]) => quantity > 0);
    
    if (purchasedItems.length === 0) {
      return null;
    }

    return (
      <div className="bg-white rounded-lg shadow-md p-6 mb-8" data-name="receipt" data-file="components/Receipt.js">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
          <div className="icon-receipt text-xl mr-2"></div>
          Your Shopping Receipt
        </h2>
        
        <div className="space-y-3">
          {purchasedItems.map(([itemId, quantity]) => {
            const item = SPENDING_ITEMS.find(i => i.id.toString() === itemId);
            if (!item) return null;
            
            const itemTotal = item.price * quantity;
            
            return (
              <div key={itemId} className="flex justify-between items-center border-b border-gray-200 pb-2">
                <div className="flex items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded mr-3"
                  />
                  <div>
                    <p className="font-medium text-gray-900">{item.name}</p>
                    <p className="text-sm text-gray-600">
                      {formatMoney(item.price)} × {quantity}
                    </p>
                  </div>
                </div>
                <p className="font-semibold text-gray-900">
                  {formatMoney(itemTotal)}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="border-t border-gray-300 pt-4 mt-4">
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold text-gray-900">Total Spent:</p>
            <p className="text-xl font-bold text-red-600">{formatMoney(totalSpent)}</p>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Receipt component error:', error);
    return null;
  }
}