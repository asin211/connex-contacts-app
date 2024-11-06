import "./App.css";
import React from "react";
import ContactList from "./components/ContactList";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <ContactList />
      </div>
      <Footer />
    </div>
  );
}

export default App;
