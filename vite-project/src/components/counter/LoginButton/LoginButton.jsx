import { Button } from "../../Button/Button";
import { useAuth } from "../../use-theme-context-user/useuser";
import styles from "./loginButton.module.css";
export const LoginButton = () => {
  const { user, authUser } = useAuth();
  const text = user ? `Logout ${user}` : "Login";
  return (
    <Button onClick={authUser} text={text} className={styles.loginButton} />
  );
};
