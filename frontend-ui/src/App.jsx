import React from "react";
import "./assets/fonts/Poppins/Poppins-Medium.ttf";
import "./index.css";
import Header from "./components/Header";
import Settings from "./components/Settings";

const App = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
      <Header />
      <Settings />
    </div>
  );
};

export default App;
