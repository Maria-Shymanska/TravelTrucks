// import Camper from "../Camper/Camper";
// import css from "./CamperList.module.css";

// const CamperList = ({ campers }) => {
//   return (
//     <ul className={css.campersList}>
//       {campers.map((camper) => {
//         return (
//           <li key={camper.id}>
//             <Camper camper={camper} />
//           </li>
//         );
//       })}
//     </ul>
//   );
// };
// export default CamperList;

import Camper from "../Camper/Camper";
import css from "./CamperList.module.css";

const CamperList = ({ campers }) => {
  // Фільтрація дублікатів за id
  const uniqueCampers = [
    ...new Map(campers.map((camper) => [camper.id, camper])).values(),
  ];

  return (
    <ul className={css.campersList}>
      {uniqueCampers.map((camper) => (
        <li key={camper.id}>
          <Camper camper={camper} />
        </li>
      ))}
    </ul>
  );
};

export default CamperList;
