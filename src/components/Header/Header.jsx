import { NavLink, Link } from "react-router-dom";

import css from "./Header.module.css";
import logo from "../../components/img/logo/logo.svg"; // імпортуємо SVG файл
const Header = () => {
  return (
    <header className={css.header}>
      <div>
        <Link to="/">
          <img src={logo} alt="Logo" className={css.logo} />
        </Link>
        <nav className={css.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${css.navLink} ${css.navLinkActive}` : css.navLink
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive ? `${css.navLink} ${css.navLinkActive}` : css.navLink
            }
          >
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
