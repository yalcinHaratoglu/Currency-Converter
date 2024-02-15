import { useState, useEffect } from "react";

import "./App.css";

export default function App() {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState("USD");
  const [toCur, setToCur] = useState("TRY");
  const [converted, setConverted] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectSize, setSelectSize] = useState(0);
  const [selectSizeTo, setSelectSizeTo] = useState(0);

  useEffect(() => {
    async function convert() {
      setIsLoading(true);
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
      );
      const data = await res.json();
      setConverted(data.rates[toCur]);
      setIsLoading(false);
    }
    if (fromCur === toCur) return setConverted(amount);
    convert();
  }, [amount, fromCur, toCur]);

  return (
    <div className="container">
      <h1>💸 Currency Converter 💸</h1>
      <div className="currency">
        <div className="input-container">
          <input
            type="text"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
              setSelectSize(0);
            }}
            disabled={!amount && amount !== "" && isLoading}
          ></input>
        </div>

        <select
          value={fromCur}
          onChange={(e) => {
            setFromCur(e.target.value);
            setSelectSize(0);
          }}
          disabled={isLoading}
          className="custom-select"
          onMouseDown={() => selectSize === 0 && setSelectSize(5)}
          onBlur={() => setSelectSize(0)}
          size={selectSize}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="TRY">TRY</option>
          <option value="CAD">CAD</option>
          <option value="AUD">AUD</option>
          <option value="BGN">BGN</option>
          <option value="CHF">CHF</option>
          <option value="CNY">CNY</option>
          <option value="CZK">CZK</option>
          <option value="DKK">DKK</option>
          <option value="HKD">HKD</option>
          <option value="HUF">HUF</option>
          <option value="IDR">IDR</option>
          <option value="ILS">ILS</option>
          <option value="INR">INR</option>
          <option value="ISK">ISK</option>
          <option value="JPY">JPY</option>
          <option value="KRW">KRW</option>
          <option value="MXN">MXN</option>
          <option value="MYR">MYR</option>
          <option value="NOK">NOK</option>
          <option value="NZD">NZD</option>
          <option value="PHP">PHP</option>
          <option value="PLN">PLN</option>
          <option value="RON">RON</option>
          <option value="SEK">SEK</option>
          <option value="SGD">SGD</option>
          <option value="THB">THB</option>
          <option value="ZAR">ZAR</option>
        </select>
        <select
          value={toCur}
          onChange={(e) => {
            setToCur(e.target.value);
            setSelectSizeTo(0);
          }}
          disabled={isLoading}
          className="custom-select"
          onMouseDown={() => selectSizeTo === 0 && setSelectSizeTo(5)}
          onBlur={() => setSelectSizeTo(0)}
          size={selectSizeTo}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          <option value="TRY">TRY</option>
          <option value="CAD">CAD</option>
          <option value="AUD">AUD</option>
          <option value="BGN">BGN</option>
          <option value="CHF">CHF</option>
          <option value="CNY">CNY</option>
          <option value="CZK">CZK</option>
          <option value="DKK">DKK</option>
          <option value="HKD">HKD</option>
          <option value="HUF">HUF</option>
          <option value="IDR">IDR</option>
          <option value="ILS">ILS</option>
          <option value="INR">INR</option>
          <option value="ISK">ISK</option>
          <option value="JPY">JPY</option>
          <option value="KRW">KRW</option>
          <option value="MXN">MXN</option>
          <option value="MYR">MYR</option>
          <option value="NOK">NOK</option>
          <option value="NZD">NZD</option>
          <option value="PHP">PHP</option>
          <option value="PLN">PLN</option>
          <option value="RON">RON</option>
          <option value="SEK">SEK</option>
          <option value="SGD">SGD</option>
          <option value="THB">THB</option>
          <option value="ZAR">ZAR</option>
        </select>
      </div>
      {!isLoading ? (
        <div className="output">
          <h3>
            {Number(converted).toFixed(2)} {toCur}
          </h3>
        </div>
      ) : (
        <p className="output">⌛ LOADING... ⌛</p>
      )}
    </div>
  );
}
