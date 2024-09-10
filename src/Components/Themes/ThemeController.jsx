import React, { useEffect } from "react";

const ThemeController = ({ mode }) => {
  useEffect(() => {
    if (mode === "light") {
      localStorage.setItem("theme", mode);
    } else if (mode === "dark") {
      localStorage.setItem("theme", mode);
    } else if (mode === "system") {
      localStorage.removeItem("theme");
    }

    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);
  return (
    <>
    </>
  );
};

export default ThemeController;
