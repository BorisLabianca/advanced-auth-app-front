import ReactDOM from "react-dom";
import loaderSpinner from "../../assets/loader.gif";
import "./Loader.scss";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="wrapper">
      <div className="loader">
        <img src={loaderSpinner} alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export const spinner = () => {
  return (
    <div className="--center-all">
      <img src={loaderSpinner} alt="Loading..." />
    </div>
  );
};

export default Loader;
