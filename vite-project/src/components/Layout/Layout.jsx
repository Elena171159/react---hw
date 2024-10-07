import { ProgressBar } from "./ProgressBar/ProgressBar";
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
