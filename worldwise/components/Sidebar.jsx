import styles from "./Sidebar.module.css";
import Logo from "../components/Logo";
import { Outlet } from "react-router-dom";
import AppNav from "./AppNav";
function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by Zena
        </p>
      </footer>
    </div>
  );
}

export default Sidebar;