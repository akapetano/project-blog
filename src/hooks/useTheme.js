import { useState } from "react";
import Cookie from "js-cookie";
import {
  LIGHT_TOKENS,
  DARK_TOKENS,
  COLOR_THEME_COOKIE_NAME,
} from "@/constants";

export function useTheme(initialTheme) {
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

  return { theme, isDarkTheme, handleToggleTheme };
}
