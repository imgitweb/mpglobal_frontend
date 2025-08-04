import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import "./styles/App.scss";
import Chatbot from "./components/chatbot/Chatbot";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        {/* <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
          <Chatbot />
        </div> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
