import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState("cold");

  const increaseTemperature = () => {
    if (temperatureValue === 30) return;
    const newTemperature = temperatureValue + 1;

    if (newTemperature >= 15) {
      setTemperatureColor("hot");
    }
    setTemperatureValue(newTemperature);
  };

  const decreaseTemperature = () => {
    if (temperatureValue === 0) return;

    const newTemperature = temperatureValue - 1;

    if (newTemperature < 15) {
      setTemperatureColor("cold");
    }
    setTemperatureValue(newTemperature);
  };
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>
          {temperatureValue}*С
        </div>

        <div>
          <button onClick={() => increaseTemperature()} className="btn-1">
            +
          </button>
          <button onClick={() => decreaseTemperature()} className="btn-2">
            -
          </button>
        </div>
      </div>
    </div>
  );
}
