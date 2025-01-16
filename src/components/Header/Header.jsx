import { Link, NavLink } from "react-router-dom";
import css from "./Header.module.css";
import clsx from "clsx";

const Header = () => {
  const buildLinkClass = ({ isActive }) => {
    return clsx(css.navItemLink, isActive && css.active);
  };

  return (
    <div className={css.container}>
      <Link to={"/"} className={css.logo}>
        <img src="../../../public/hero/hero.jpg" alt="TravelTrucks" />
      </Link>
      <nav className={css.nav}>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <NavLink className={buildLinkClass} to={"/"}>
              Home
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink className={buildLinkClass} to={"/catalog"}>
              Catalog
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
