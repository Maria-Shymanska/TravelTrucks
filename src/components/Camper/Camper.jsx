// import css from "./Camper.module.css";
// import Icon from "../Icon/Icon.jsx";
// import { useDispatch, useSelector } from "react-redux";
// import { selectSelectedCamper } from "../../redux/campers/selectors.js";
// import {
//   addSelectedCamper,
//   removeSelectedCamper,
// } from "../../redux/campers/slice.js";
// import { Link } from "react-router-dom";
// import {
//   getBooleanFeatures,
//   getVariantFeatures,
// } from "../../services/services.js";

// const Camper = ({ camper }) => {
//   const { id, name, price, rating, location, description, gallery } = camper;
//   const dispatch = useDispatch();
//   const selected = useSelector(selectSelectedCamper);
//   const isFavorite = selected.some((item) => item.id === camper.id);

//   const handleToggleFavorite = () => {
//     if (isFavorite) {
//       dispatch(removeSelectedCamper(camper.id));
//     } else {
//       dispatch(addSelectedCamper(camper));
//     }
//   };
//   const booleanFeatures = getBooleanFeatures(camper);
//   const variantFeatures = getVariantFeatures(camper);

//   return (
//     <div className={css.card}>
//       <div className={css.imageWrapper}>
//         <img src={gallery[0].thumb} alt={name} className={css.image} />
//       </div>
//       <div className={css.info}>
//         <div className={css.titleWrapper}>
//           <h2 className={css.name}>{name}</h2>
//           <div className={css.priceWrapper}>
//             <p className={css.price}>&euro;{price.toFixed(2)}</p>
//             <button
//               type="button"
//               className={css.favoriteButton}
//               onClick={handleToggleFavorite}
//             >
//               <Icon
//                 id={isFavorite ? "selected" : "heart"}
//                 width={24}
//                 height={21}
//               />
//             </button>
//           </div>
//         </div>
//         <div className={css.ratingWrapper}>
//           <p className={css.rating}>
//             <span className={css.star}>
//               <Icon
//                 id={
//                   camper.reviews.length > 0 ? "icon-star-pressed" : "icon-star"
//                 }
//                 className={css.iconStar}
//                 width={16}
//                 height={15}
//               />
//             </span>
//             {rating} ({camper.reviews.length} Reviews)
//           </p>
//           <div className={css.location}>
//             <Icon
//               id="location"
//               className={css.iconLocation}
//               width={16}
//               height={16}
//             />
//             <p>{location}</p>
//           </div>
//         </div>
//         <p className={css.description}>{description}</p>
//         <div className={css.features}>
//           {booleanFeatures.map(({ key, label, icon }) => (
//             <span key={key} className={css.feature}>
//               <Icon
//                 id={icon}
//                 className={`${css.iconFeature} ${
//                   css[`icon-${label.toLowerCase()}`]
//                 }`}
//                 width={20}
//                 height={20}
//               />
//               {label}
//             </span>
//           ))}
//           {variantFeatures.map(({ key, iconAndLabelMap }) => {
//             const { icon, label } = iconAndLabelMap[camper[key]];
//             return (
//               <span key={key} className={css.feature}>
//                 <Icon
//                   id={icon}
//                   className={css.iconFeature}
//                   width={20}
//                   height={20}
//                 />
//                 {label}
//               </span>
//             );
//           })}
//         </div>
//         <Link to={`/catalog/${id}`} className={css.showMoreButton}>
//           Show more
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Camper;

import { useMemo } from "react";
import PropTypes from "prop-types";
import css from "./Camper.module.css";
import Icon from "../Icon/Icon.jsx";
import { useDispatch, useSelector } from "react-redux";
import { selectSelectedCamper } from "../../redux/campers/selectors.js";
import {
  addSelectedCamper,
  removeSelectedCamper,
} from "../../redux/campers/slice.js";
import { Link } from "react-router-dom";
import {
  getBooleanFeatures,
  getVariantFeatures,
} from "../../services/services.js";

const BooleanFeature = ({ label, icon }) => (
  <span className={css.feature}>
    <Icon
      id={icon}
      className={`${css.iconFeature} ${css[`icon-${label.toLowerCase()}`]}`}
      width={20}
      height={20}
    />
    {label}
  </span>
);

const VariantFeature = ({ icon, label }) => (
  <span className={css.feature}>
    <Icon id={icon} className={css.iconFeature} width={20} height={20} />
    {label}
  </span>
);

const Camper = ({ camper }) => {
  const { id, name, price, rating, location, description, gallery } = camper;
  const dispatch = useDispatch();
  const selected = useSelector(selectSelectedCamper);

  const isFavorite = useMemo(
    () => selected.some((item) => item.id === camper.id),
    [selected, camper.id]
  );

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeSelectedCamper(camper.id));
    } else {
      dispatch(addSelectedCamper(camper));
    }
  };

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  }).format(price);

  const booleanFeatures = getBooleanFeatures(camper);
  const variantFeatures = getVariantFeatures(camper);

  return (
    <div className={css.card}>
      <div className={css.imageWrapper}>
        <img src={gallery[0]?.thumb} alt={name} className={css.image} />
      </div>
      <div className={css.info}>
        <div className={css.titleWrapper}>
          <h2 className={css.name}>{name}</h2>
          <div className={css.priceWrapper}>
            <p className={css.price}>{formattedPrice}</p>
            <button
              type="button"
              className={css.favoriteButton}
              onClick={handleToggleFavorite}
              aria-pressed={isFavorite}
              title={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              <Icon
                id={isFavorite ? "selected" : "heart"}
                width={24}
                height={21}
              />
            </button>
          </div>
        </div>
        <div className={css.ratingWrapper}>
          <p className={css.rating}>
            <span className={css.star}>
              <Icon
                id={
                  camper.reviews.length > 0 ? "icon-star-pressed" : "icon-star"
                }
                className={css.iconStar}
                width={16}
                height={15}
              />
            </span>
            {rating} ({camper.reviews.length} Reviews)
          </p>
          <div className={css.location}>
            <Icon
              id="location"
              className={css.iconLocation}
              width={16}
              height={16}
            />
            <p>{location}</p>
          </div>
        </div>
        <p className={css.description}>{description}</p>
        <div className={css.features}>
          {booleanFeatures.map(({ key, label, icon }) => (
            <BooleanFeature key={key} label={label} icon={icon} />
          ))}
          {variantFeatures.map(({ key, iconAndLabelMap }) => {
            const { icon, label } = iconAndLabelMap[camper[key]];
            return <VariantFeature key={key} icon={icon} label={label} />;
          })}
        </div>
        <Link
          to={`/catalog/${id}-${name.toLowerCase().replace(/\s+/g, "-")}`}
          className={css.showMoreButton}
        >
          Show more
        </Link>
      </div>
    </div>
  );
};

Camper.propTypes = {
  camper: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    location: PropTypes.string.isRequired,
    description: PropTypes.string,
    gallery: PropTypes.arrayOf(
      PropTypes.shape({
        thumb: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default Camper;
