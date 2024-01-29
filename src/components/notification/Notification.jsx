import { useDispatch } from "react-redux";
import "./Notification.scss";
import {
  RESET,
  sendVerificationEmail,
} from "../../redux/features/auth/authSlice";

const Notification = () => {
  const dispatch = useDispatch();
  const sendVerMail = async () => {
    await dispatch(sendVerificationEmail());
    await dispatch(RESET());
  };

  return (
    <div className="container">
      <div className="alert">
        <p>
          <b>Message:</b> &nbsp;
        </p>
        <p>
          To verify your account, check your email for a verification link.
          &nbsp;
        </p>
        <p className="v-link" onClick={sendVerMail}>
          <b>Resend Link</b>
        </p>
      </div>
    </div>
  );
};

export default Notification;
