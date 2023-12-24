import Card from "../../components/card/Card";
import PageMenu from "../../components/pageMenu/PageMenu";
import { useState } from "react";
import PasswordInput from "../../components/passwordInput/PasswordInput";
import PasswordStrengthChecker from "../../components/passwordStrengthChecker/PasswordStrengthChecker";
import "./ChangePassword.scss";
import { useNotification } from "../../hooks";

const initialState = {
  currentPassword: "",
  newPassword: "",
  confirmNewPassword: "",
};

const ChangePassword = () => {
  const [formData, setFormData] = useState(initialState);
  const { currentPassword, newPassword, confirmNewPassword } = formData;
  const { updateNotification } = useNotification();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    return updateNotification("info", "Test to see if it works");
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
                <button className="--btn --btn-danger --btn-block">
                  Change Password
                </button>
              </form>
            </>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
