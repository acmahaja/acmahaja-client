import React, { useState } from "react";
import "../css/Settings.css";
import Switch from "react-switch";

const Settings = ({
  toggleDarkMode,
  randomColor,
  colorList,
  currColor,
  updateColor,
  toggleSettings
}) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    toggleDarkMode();
  };
  console.log(toggleSettings);
  return (
    <div
      id="settings"
      className={`useBorderBox ${!toggleSettings? "hide" : "show"}`}
    >
      <h5 className="useBorderBox">Settings</h5>
      <label id="toggle-switch">
        <span>Dark Mode</span>
        <Switch
          onChange={handleChange}
          className={`${checked ? "checked" : null}`}
          checked={checked}
          checkedIcon=""
          uncheckedIcon=""
        />
      </label>
      <label id="random-color">
        <span>Random Color</span>
        <button onClick={randomColor}>Click me!</button>
      </label>
      <label id="color-list">
        <span>Color List</span>
        <ul>
          {colorList.map((color, index) => (
            <li
              key={index}
              className={`${color === currColor ? "selected" : null}`}
            >
              <div
                onClick={() => updateColor(color)}
                style={{ backgroundColor: `rgb(${color})` }}
              ></div>
            </li>
          ))}
        </ul>
      </label>
    </div>
  );
};

export default Settings;
