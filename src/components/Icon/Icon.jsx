import css from "./Icon.module.css";

const Icon = ({ text, icon }) => {
  return (
    <div className={css.conteiner}>
      <svg width="32" height="32">
        <use
          href={`../../../../public/images/icon/icon.svg#icon-${icon}`}
        ></use>
      </svg>
      <p className={css.text}>{text}</p>
    </div>
  );
};

export default Icon;
