import { useEffect, useState, React } from "react";
import styles from "./progress.module.css";

export const ProgressBar = () => {
  const [currentPercent, setCurrentPercent] = useState(0);

  useEffect(() => {
    const updateProgress = () =>
      setCurrentPercent(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) *
          100
      );

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);
  return (
    <div
      className={styles.progressBar}
      style={{
        width: `${currentPercent}%`,
      }}
    />
  );
};
