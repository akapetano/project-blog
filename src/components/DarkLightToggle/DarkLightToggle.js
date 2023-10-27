"use client";

import { Sun, Moon } from "react-feather";
import VisuallyHidden from "../VisuallyHidden";
import styles from "./DarkLightToggle.module.css";
import { useTheme } from "@/hooks/useTheme";

function DarkLightToggle({ initialTheme }) {
  const { isDarkTheme, handleToggleTheme } = useTheme(initialTheme);

  return (
    <button className={styles.action} onClick={handleToggleTheme}>
      {!isDarkTheme ? <Sun size="1.5rem" /> : <Moon size="1.5rem" />}
      <VisuallyHidden>Toggle dark / light mode</VisuallyHidden>
    </button>
  );
}

export default DarkLightToggle;
