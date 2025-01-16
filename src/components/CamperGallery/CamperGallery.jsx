// import css from "./CamperGallery.module.css";

// const CamperGallery = ({ gallery }) => {
//   return (
//     <div className={css.imageWrapper}>
//       {gallery.map((image, index) => (
//         <img
//           key={index}
//           src={image.original}
//           alt={`Camper image ${index}`}
//           className={css.image}
//         />
//       ))}
//     </div>
//   );
// };

// export default CamperGallery;

import PropTypes from "prop-types";
import css from "./CamperGallery.module.css";

const Gallery = ({ gallery }) => {
  return (
    <ul className={css.gallery}>
      {gallery?.map((image, index) => (
        <li key={index} className={css.galleryItem}>
          <img
            src={image.thumb}
            alt="Picture of truck benefit"
            className={css.galleryImg}
          />
        </li>
      ))}
    </ul>
  );
};

Gallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      thumb: PropTypes.string.isRequired,
    })
  ),
};

export default Gallery;
