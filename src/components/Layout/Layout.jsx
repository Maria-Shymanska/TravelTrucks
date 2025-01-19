import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import css from "./Layout.module.css";

function Layout() {
  return (
    <div className={css.layout}>
      <Header />
      <main className={css.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
