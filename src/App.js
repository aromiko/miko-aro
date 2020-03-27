import { Route, Router } from "react-router-dom";

import Footer from "./components/Footer";
import { History } from "./helpers/History";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Navmenu from "./components/Navmenu";
import React from "react";

function App() {
  return (
    <div className="App">
      <Router history={History}>
        <Navbar />
        <Navmenu />
        <div className="pt-26">
          <Route path="/" component={Home} />
        </div>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
