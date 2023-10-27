"use client";

import { Sun, Moon } from "react-feather";
import VisuallyHidden from "../VisuallyHidden";
import styles from "./DarkLightToggle.module.css";
import { useState } from "react";
import Cookie from "js-cookie";
import {
  LIGHT_TOKENS,
  DARK_TOKENS,
  COLOR_THEME_COOKIE_NAME,
} from "@/constants";

function DarkLightToggle({ initialTheme }) {
  const [theme, setTheme] = useState(initialTheme);
  const isDarkTheme = theme === "dark";

  function handleToggleTheme() {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);

    Cookie.set(COLOR_THEME_COOKIE_NAME, nextTheme, { expires: 1000 });

    const newTokens = nextTheme === "light" ? LIGHT_TOKENS : DARK_TOKENS;

    const root = document.documentElement;

    root.setAttribute("data-color-theme", nextTheme);
    Object.entries(newTokens).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }

  return (
    <button className={styles.action} onClick={handleToggleTheme}>
      {!isDarkTheme ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}
      <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
    </button>
  );
}

export default DarkLightToggle;
