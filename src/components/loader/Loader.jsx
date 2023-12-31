import ReactDOM from "react-dom";
import loaderImage from "../../assets/loader.gif";
import "./Loader.scss";

const Loader = () => {
  return ReactDOM.createPortal(
    <div className="wrapper">
      <div className="loader">
        <img src={loaderImage} alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export const Spinner = () => {
  return (
    <div className="--center-all">
      <img src={loaderImage} alt="Loading..." />
    </div>
  );
};

export default Loader;
