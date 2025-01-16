import css from "./Rating.module.css";
import Icon from "../Icon/Icon";
const Rating = ({ rating, reviewsCount }) => (
  <div className={css.ratingWrapper}>
    <p className={css.rating}>
      <span className={css.star}>
        <Icon
          id={reviewsCount > 0 ? "icon-star-pressed" : "icon-star"}
          className={css.iconStar}
          width={16}
          height={15}
        />
      </span>
      {rating} ({reviewsCount} Reviews)
    </p>
  </div>
);

export default Rating;
