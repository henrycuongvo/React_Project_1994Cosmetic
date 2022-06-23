import React from "react";
import "./App.css";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
