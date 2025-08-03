import React, { useState } from 'react';

function CurrencyConvertor() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  const [converted, setConverted] = useState('');

  const conversionRates = {
    euro: 90,
    dollar: 75,
    yen: 0.65
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const currencyLower = currency.toLowerCase();
    const rate = conversionRates[currencyLower];

    if (!rate) {
      alert("Conversion rate for this currency is not available.");
      return;
    }

    const result = parseFloat(amount) * rate;
    alert(`Converting to ${currency} → Amount is ${result}`);
    setConverted(`${amount} ${currency} = ₹${result.toFixed(2)}`);
  };

  return (
    <div>
      <h2 style={{ color: "green" }}>Currency Convertor!!!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Amount: </label>
          <input
            type="number"
            placeholder="Enter amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Currency: </label>
          <input
            type="text"
            placeholder="e.g. Euro"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {converted && <p><strong>{converted}</strong></p>}
    </div>
  );
}

export default CurrencyConvertor;
