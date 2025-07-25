function Header({ money, onMoneyChange }) {
  try {
    const presetAmounts = [
      { label: "Millionaire", amount: 1000000 },
      { label: "Multi-Millionaire", amount: 10000000 },
      { label: "Billionaire", amount: 1000000000 },
      { label: "Elon Musk", amount: 200000000000 }
    ];

    return (
      <div className="bg-green-50 py-8 px-4" data-name="header" data-file="components/Header.js">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            💰 Spend Money Simulator
          </h1>
          <p className="text-gray-600 mb-6">
            How would you spend your fortune? Choose your starting amount and start shopping!
          </p>
          
          <div className="money-counter mb-6">
            {formatMoney(money)}
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {presetAmounts.map(preset => (
              <button
                key={preset.label}
                onClick={() => onMoneyChange(preset.amount)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
              >
                {preset.label} ({formatMoney(preset.amount)})
              </button>
            ))}
          </div>
          
          <button
            onClick={() => onMoneyChange(1000000000)}
            className="bg-gray-600 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
          >
            Reset to $1B
          </button>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}