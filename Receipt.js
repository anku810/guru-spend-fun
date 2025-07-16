function Receipt({ purchases, items, getTotalSpent, formatMoney }) {
  try {
    const purchasedItems = items.filter(item => purchases[item.id] > 0);
    
    if (purchasedItems.length === 0) {
      return (
        <div className="money-card max-w-2xl mx-auto mb-8" data-name="receipt" data-file="components/Receipt.js">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">रसीद</h2>
          <p className="text-center text-gray-600">अभी तक कुछ नहीं खरीदा गया है!</p>
        </div>
      );
    }

    return (
      <div className="money-card max-w-2xl mx-auto mb-8" data-name="receipt" data-file="components/Receipt.js">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">खरीदारी की रसीद</h2>
        
        <div className="space-y-3">
          {purchasedItems.map(item => (
            <div key={item.id} className="flex justify-between items-center py-2 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{item.image}</span>
                <span className="font-medium">{item.name}</span>
              </div>
              <div className="text-right">
                <div className="font-semibold">x{purchases[item.id]}</div>
                <div className="text-sm text-gray-600">
                  {formatMoney(item.price * purchases[item.id])}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t-2 border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold">कुल खर्च:</span>
            <span className="text-xl font-bold text-red-600">
              {formatMoney(getTotalSpent())}
            </span>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Receipt component error:', error);
    return null;
  }
}