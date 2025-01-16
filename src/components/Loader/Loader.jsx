import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <Oval
      ariaLabel="oval-loading"
      height={180}
      width={180}
      color="#475467"
      secondaryColor="#D84343"
      strokeWidth={4}
      strokeWidthSecondary={4}
    />
  );
};

export default Loader;
