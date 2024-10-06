import { ProgressBar } from "./ProgressBar/ProgressBar";
export const Layout = ({ children }) => {
  return (
    <>
      <ProgressBar />
      <header></header>
      {children}
      <footer></footer>
    </>
  );
};
