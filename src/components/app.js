import { h } from "preact";
import { Router } from "preact-router";
import { useState, useEffect } from "preact/hooks";

import Navbar from "./Navbar";
import Home from "../routes/home";
import Profile from "../routes/profile";

import AppStyle from "./style";
import DarkStyle from "./Dark";
import LightStyle from "./Light";

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
    var toggle = !hideSettings;
    toggleSettings(toggle);
  };

  const showShowSettings = () => {
    toggleSettings(false);
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
    <main
      id="App"
      className={`${AppStyle.App} ${
        darkMode === "true" ? DarkStyle.Dark : LightStyle.Light
      }`}
    >
      <Navbar color={color} showSettings={showSettings}/>
    </main>
  );
};

export default App;

{
  /* <Router>
<Home path="/" />
<Profile path="/profile/" user="me" />
<Profile path="/profile/:user" />
</Router> */
}
