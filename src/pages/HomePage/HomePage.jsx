import css from "./HomePage.module.css";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button.jsx";

const HomePage = () => {
  return (
    <>
      <div className={css.hero}>
        <div className={css.title}>
          <h1 className={css.title_main_text}>Campers of your dreams</h1>
          <p className={css.title_text}>
            You can find everything you want in our catalog
          </p>
          <Link to="/catalog">
            <Button text="View Now" className={css.title_button} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
