import "./App.css";
import Currency from "./components/Currency";
import Footer from "./components/Footer";
import rates from "./assets/data/rates.json";
import down from "./assets/img/down.jpg";
import up from "./assets/img/up.jpg";
import { useState } from "react";

function App() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [rate1, setRate1] = useState(1);
  const [rate2, setRate2] = useState(1.139283);
  return (
    <div className="App">
      <h1>💵 Converter 💵</h1>
      <Currency
        rates={rates}
        rate={rate1}
        setRate={setRate1}
        value={value1}
        setValue={setValue1}
      ></Currency>
      <div>
        <button
          onClick={() => {
            setValue2(((value1 / rate1) * rate2).toFixed(2));
          }}
        >
          <img src={down} alt="arrow-down" />
        </button>
        <button
          onClick={() => {
            setValue1(((value2 / rate2) * rate1).toFixed(2));
          }}
        >
          <img src={up} alt="arrow-up" />
        </button>
      </div>
      <Currency
        rates={rates}
        rate={rate2}
        setRate={setRate2}
        value={value2}
        setValue={setValue2}
      ></Currency>

      <Footer></Footer>
    </div>
  );
}

export default App;
