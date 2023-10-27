"use client";

import { MotionConfig } from "framer-motion";

function ReducedMotionPreferences({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export default ReducedMotionPreferences;
