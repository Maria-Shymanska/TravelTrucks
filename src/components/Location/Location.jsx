import css from "./location.module.css";
import Icon from "../Icon/Icon";
const Location = ({ location }) => (
  <div className={css.location}>
    <Icon id="location" className={css.iconLocation} width={16} height={16} />
    <p>{location}</p>
  </div>
);

export default Location;
