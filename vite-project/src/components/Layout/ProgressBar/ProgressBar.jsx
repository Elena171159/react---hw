import { useEffect, useState, React } from "react";

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
      style={{
        backgroundColor: "yellow",
        position: "fixed",
        height: "15px",
        top: "0",
        width: `${currentPercent}%`,
      }}
    />
  );
};
