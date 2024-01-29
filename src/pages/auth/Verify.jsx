import { useDispatch, useSelector } from "react-redux";
import styles from "./Auth.module.scss";
import { RESET, verifyUser } from "../../redux/features/auth/authSlice";
import { useNavigate, useParams } from "react-router-dom";
import { useNotification } from "../../hooks";
import Loader from "../../components/loader/Loader";
import { useEffect } from "react";

const Verify = () => {
  const { updateNotification } = useNotification();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { verificationToken } = useParams();
  const { isLoading, isError, message, isVerified } = useSelector(
    (state) => state.auth
  );
  const verifyUserAccount = async () => {
    await dispatch(verifyUser(verificationToken));

    await dispatch(RESET());
    navigate("/profile");
  };
  useEffect(() => {
    if (isError && message) {
      updateNotification("error", message.error);
    } else if (message) {
      updateNotification("success", message);
    }
  }, [isError, message]);

  return (
    <section className="verify --center-all">
      {isLoading && <Loader />}
      <div className="--center-all">
        <h2>Account Verification</h2>
        <p>To verify your account, click the button below.</p>
        <br />
        <button className="--btn --btn-primary" onClick={verifyUserAccount}>
          Verifry Account
        </button>
      </div>
    </section>
  );
};

export default Verify;
