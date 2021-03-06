/* eslint-disable */
import React, { useContext, useState } from "react";
import AppTheme from "../Colors";
import ThemeContext from "../Context/ThemeContext";

const HeroSection = () => {
  const [theme, setTheme] = useContext(ThemeContext)[0];
  const currectTheme = AppTheme[theme];

  return (
    <div
      style={{
        padding: "1rem",
        backgroundColor: "${currectTheme.backgroundColor}",
        color: "${currectTheme.textColor}",
        textAlign: "center",
      }}
    >
      <h1>Context API theme toggler</h1>
      <p>This is a nice paragraph</p>
      <button
        onClick={() => {
          setTheme(currectTheme === "light" ? "dark" : "light");
        }}
        style={{
          backgroundColor: "#26ae60",
          padding: "10px 150px",
          fontSize: "20px",
          color: "#FFF",
          border: "${currectTheme.border}",
        }}
      >
        Click Me
      </button>
    </div>
  );
};
export default HeroSection;
