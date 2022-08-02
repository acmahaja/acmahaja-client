import { h } from "preact";
import { Router } from "preact-router";
import Navbar from "./Navbar";

const App = () => {
  return (
    <main id="app">
      <Navbar />

    </main>
  );
};

export default App;

{/* <Router>
<Home path="/" />
<Profile path="/profile/" user="me" />
<Profile path="/profile/:user" />
</Router> */}