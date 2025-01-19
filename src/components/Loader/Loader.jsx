import { Circles } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Circles
        height="80"
        width="80"
        color="#3498db"
        ariaLabel="loading-indicator"
      />
    </div>
  );
};

export default Loader;
