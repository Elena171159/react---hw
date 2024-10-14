import { useTheme } from "./use-theme";
export const ThemeButton = () => {
  const { toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Toggle</button>;
};
