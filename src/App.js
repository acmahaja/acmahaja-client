import React from "react";
import {AiFillGithub} from "react-icons/ai"
import "./css/App.css";
import "./css/building-blocks.css";


const App = () => {

  const goToRepo = () => {
    console.log("asd");
    window.location.href = "https://github.com/acmahaja/acmahaja.com"
    // return null
  }

  return (
    <div className="App">
      <div className="cloudBlur" />
      <h2>Hi, my name is ...</h2>
      <h1>Anjaney C Mahajan</h1>
      <p>
        I am overhauling my personal website, track my progress here on
        <span onClick={goToRepo}>
            Github 
            <AiFillGithub size={35}/>
        </span>
      </p>
    </div>
  );
};

export default App;
