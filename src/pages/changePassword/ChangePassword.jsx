import Card from "../../components/card/Card";
import PageMenu from "../../components/pageMenu/PageMenu";
import { useState } from "react";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import PasswordStrengthChecker from "../../components/passwordStrengthChecker/PasswordStrengthChecker";
import "./ChangePassword.scss";
import { useNotification } from "../../hooks";
import useRedirectLoggedOutUser from "../../hooks/useRedirectLoggedOutUser";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  RESET,
  changePassword,
  logout,
} from "../../redux/features/auth/authSlice";
import { Spinner } from "../../components/loader/Loader";
import { sendAutomatedEmail } from "../../redux/features/email/emailSlice";

const initialState = {
  currentPassword: "",
  newPassword: "",
  confirmNewPassword: "",
};

const ChangePassword = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { updateNotification } = useNotification();
  const [formData, setFormData] = useState(initialState);
  const { currentPassword, newPassword, confirmNewPassword } = formData;

  const { isLoading, user } = useSelector((store) => store.auth);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!currentPassword || !newPassword || !confirmNewPassword)
      return updateNotification("warning", "Please fill out all fields.");

    if (newPassword.length < 8)
      return updateNotification(
        "warning",
        "Your password must be at least 8 characters long."
      );
    if (!newPassword.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))
      return updateNotification(
        "warning",
        "Your password must contain at least one uppercased character."
      );

    if (!newPassword.match(/([0-9])/))
      return updateNotification(
        "warning",
        "Your password must contain at least one number."
      );

    if (!newPassword.match(/([!,@,#,$,%,^,&,*,_,?,+])/))
      return updateNotification(
        "warning",
        "Your password must contain at least one special character."
      );

    if (currentPassword === newPassword)
      return updateNotification(
        "warning",
        "Your new password must be different from your current password."
      );

    if (newPassword !== confirmNewPassword)
      return updateNotification(
        "warning",
        "Both new passwords must be the same."
      );

    const userData = { currentPassword, newPassword };
    const emailData = {
      subject: "Password changed - AdvAUTH",
      send_to: user.email,
      reply_to: "noreply@advauth.com",
      template: "changePassword",
      url: "/forgot",
    };

    try {
      await dispatch(changePassword(userData));
      await dispatch(sendAutomatedEmail(emailData));
      await dispatch(RESET());
      await dispatch(logout());
      updateNotification(
        "success",
        "Password successfully changed. Please log in again."
      );
      navigate("/login");
    } catch (error) {
      updateNotification("error", error);
    }
  };

  return (
    <section className="verify">
      <div className="container">
        <PageMenu />

        <div className="--flex-center change-password --dir-column">
          <h2>Change Password</h2>
          <Card cardClass="card">
            <>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Current Password:</label>
                  <PasswordInput
                    placeholder="Current Password"
                    name="currentPassword"
                    onChange={handleInputChange}
                    value={currentPassword}
                  />
                </div>
                <div>
                  <label>New Password:</label>
                  <PasswordInput
                    placeholder="New Password"
                    name="newPassword"
                    onChange={handleInputChange}
                    value={newPassword}
                  />
                </div>
                <div>
                  <label>Confirm New Password:</label>
                  <PasswordInput
                    placeholder="Confirm New Password"
                    name="confirmNewPassword"
                    onChange={handleInputChange}
                    value={confirmNewPassword}
                  />
                </div>
                <div className="group">
                  <PasswordStrengthChecker password={newPassword} />
                </div>
                {isLoading ? (
                  <Spinner />
                ) : (
                  <button
                    className="--btn --btn-danger --btn-block"
                    type="submit"
                  >
                    Change Password
                  </button>
                )}
              </form>
            </>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
