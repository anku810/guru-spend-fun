function MoneyDisplay({ money, formatMoney }) {
  try {
    return (
      <div className="money-card max-w-md mx-auto mb-8" data-name="money-display" data-file="components/MoneyDisplay.js">
        <div className="text-center">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">उपलब्ध राशि</h2>
          <div className="text-3xl font-bold text-green-600">
            {formatMoney(money)}
          </div>
          <div className="text-sm text-gray-500 mt-2">
            मुकेश अंबानी की कुल संपत्ति
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('MoneyDisplay component error:', error);
    return null;
  }
}