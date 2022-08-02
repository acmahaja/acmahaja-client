import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Settings from "../Components/Settings";

// import App from "../styles/App.module.css";
// import DarkApp from "../styles/Dark.module.css";
// import LightApp from "../styles/Light.module.css";

import { appConfig } from "../Config";

const Home = () => {
  const [darkMode, setDarkMode] = useState("penis");
  const [color, setColor] = useState([]);

  const [hideSettings, toggleSettings] = useState("false");

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("darkMode"))) {
      const getDarkMode = JSON.parse(localStorage.getItem("darkMode"));
      setDarkMode(getDarkMode);
    }
  }, []);

  useEffect(() => {
    if (darkMode !== "penis") {
      localStorage.setItem("darkMode", JSON.stringify(darkMode));
    }
  }, [darkMode]);


  const showSettings = () => {
    var toggle = !hideSettings;
    toggleSettings(toggle);
  };

  const showShowSettings = () => {
    toggleSettings(false);
  };

  const toggleDarkMode = () => {
    setDarkMode(darkMode === "true" ? "false" : "true");
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  };

  const updateColor = (newColor) => {
    setColor(newColor);
    localStorage.setItem("color", JSON.stringify(color));
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
      <Navbar color={color} showSettings={showSettings} />
      <Settings
        toggleDarkMode={toggleDarkMode}
        updateColor={updateColor}
        currColor={color}
        randomColor={randomColor}
        colorList={appConfig.colorList}
        toggleSettings={hideSettings}
        setViewSettings={showShowSettings}
      />
    </div>
  );
};

export default Home;
