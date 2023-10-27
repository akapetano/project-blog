"use client";

import clsx from "clsx";
import { Play, Pause, RotateCcw } from "react-feather";

import Card from "@/components/Card";
import VisuallyHidden from "@/components/VisuallyHidden";

import styles from "./CircularColorsDemo.module.css";
import { motion, LayoutGroup } from "framer-motion";
import { CIRCULAR_COLORS } from "@/constants";
import { useCircularColors } from "@/hooks/useCircularColors";
import { useId } from "react";

function CircularColorsDemo() {
  const {
    selectedColor,
    timerIsRunning,
    timeElapsedInSeconds,
    handleTogglePlaying,
    handleReset,
  } = useCircularColors();
  const id = useId();

  return (
    <Card as="section" className={styles.wrapper}>
      <LayoutGroup>
        <ul className={styles.colorsWrapper}>
          {CIRCULAR_COLORS.map((color, index) => {
            const isSelected = color.value === selectedColor.value;
            const layoutId = `${id}-selected-color-outline`;

            return (
              <li className={styles.color} key={index}>
                {isSelected && (
                  <motion.div
                    layoutId={layoutId}
                    className={styles.selectedColorOutline}
                  />
                )}
                <div
                  className={clsx(
                    styles.colorBox,
                    isSelected && styles.selectedColorBox
                  )}
                  style={{
                    backgroundColor: color.value,
                  }}
                >
                  <VisuallyHidden>{color.label}</VisuallyHidden>
                </div>
              </li>
            );
          })}
        </ul>
      </LayoutGroup>

      <div className={styles.timeWrapper}>
        <dl className={styles.timeDisplay}>
          <dt>Time Elapsed</dt>
          <dd>{timeElapsedInSeconds}</dd>
        </dl>
        <div className={styles.actions}>
          <button onClick={handleTogglePlaying}>
            {!timerIsRunning ? (
              <>
                <Play />
                <VisuallyHidden>Play</VisuallyHidden>
              </>
            ) : (
              <>
                <Pause />
                <VisuallyHidden>Pause</VisuallyHidden>
              </>
            )}
          </button>
          <button onClick={handleReset}>
            <RotateCcw />
            <VisuallyHidden>Reset</VisuallyHidden>
          </button>
        </div>
      </div>
    </Card>
  );
}

export default CircularColorsDemo;
