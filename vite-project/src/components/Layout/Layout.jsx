import { ProgressBar } from "./ProgressBar/ProgressBar";
import React from "react";
export const Layout = ({ children }) => {
  return (
    <>
      <ProgressBar />
      <header />
      {children}
      <footer />
    </>
  );
};
