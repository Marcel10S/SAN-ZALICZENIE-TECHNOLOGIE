import React from "react";
import Header from "./Header";
import Footer from "./Footer";

import "./index.css";
import "./../index.css";

export default function Theme({ children }) {
  return (
    <div id="page-theme">
      <Header />
      <div className="theme__content-container">
        <div className="theme__content-container__content">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}