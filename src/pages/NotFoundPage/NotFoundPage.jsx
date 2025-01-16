import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css";

function NotFound() {
  return (
    <div className={css.container}>
      <h1 className={css.errorCode}>404</h1>
      <h2 className={css.text}>Page not found</h2>
      <button className={css.btn}>
        <Link to="/">Home page</Link>
      </button>
    </div>
  );
}

export default NotFound;
