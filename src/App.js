import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoMatch from "./NoMatch";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Settings from "./Components/Settings";

import "./css/App.css";
import "./css/Dark.css";
import "./css/Light.css";

import { appConfig } from "./Config";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || "true"
  );

  const [color, setColor] = useState(
    JSON.parse(localStorage.getItem("color")) || "135, 57, 250"
  );

  const [hideSettings, toggleSettings] = useState(false);

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    localStorage.setItem("color", JSON.stringify(color));
  });

  const showSettings = () => {
    var toggle = !hideSettings
    toggleSettings(toggle);
  };

  const toggleDarkMode = () => {
    setDarkMode(darkMode === "true" ? "false" : "true");
  };

  const updateColor = (newColor) => {
    setColor(newColor);
  };

  const randomColor = () => {
    console.log("randomColor");
    updateColor(
      `${Math.floor(Math.random() * 155) + 100},
      ${Math.floor(Math.random() * 155) + 100}, 
      ${Math.floor(Math.random() * 155) + 100}`
    );
  };

  return (
    <div className={`App ${darkMode === "true" ? "Dark" : "Light"}`}>
      <Router>
        <Navbar color={color} showSettings={showSettings} />
        <Settings
          toggleDarkMode={toggleDarkMode}
          updateColor={updateColor}
          currColor={color}
          randomColor={randomColor}
          colorList={appConfig.colorList}
          toggleSettings={hideSettings}
        />
        <Routes>
          <Route index element={<Home toggleDarkMode={toggleDarkMode} />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
