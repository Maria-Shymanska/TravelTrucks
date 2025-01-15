import css from "./Logo.module.css";

const Logo = () => {
  return (
    <svg className={css.logo}>
      <use href="/src/components/img/icons/sprite.svg#icon-logo"></use>
    </svg>
  );
};

export default Logo;
