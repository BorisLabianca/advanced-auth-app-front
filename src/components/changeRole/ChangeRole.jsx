import { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useNotification } from "../../hooks";
import { useDispatch, useSelector } from "react-redux";
import {
  RESET,
  getUsers,
  upgradeUser,
} from "../../redux/features/auth/authSlice";
import {
  EMAIL_RESET,
  sendAutomatedEmail,
} from "../../redux/features/email/emailSlice";

const ChangeRole = ({ id, email }) => {
  const dispatch = useDispatch();
  const { updateNotification } = useNotification();
  const [userRole, setUserRole] = useState("");
  const { message } = useSelector((store) => store.auth);

  const changeRole = async (event) => {
    event.preventDefault();
    if (!userRole)
      return updateNotification("warning", "PLease, select a role.");

    const userData = {
      role: userRole,
      id: id,
    };

    const emailData = {
      subject: "Role changed - AdvAUTH",
      send_to: email,
      reply_to: "noreply@advauth.com",
      template: "changeRole",
      url: "/login",
    };

    await dispatch(upgradeUser(userData));
    await dispatch(sendAutomatedEmail(emailData));
    await dispatch(getUsers());
    await dispatch(EMAIL_RESET());
    setUserRole("");
  };

  useEffect(() => {
    if (message) {
      updateNotification("success", message);
      dispatch(RESET());
    }
  }, [message]);

  return (
    <div className="sort">
      <form className="--flex-start" onSubmit={() => changeRole(event)}>
        <select
          value={userRole}
          onChange={(event) => setUserRole(event.target.value)}
        >
          <option value="" disabled>
            -- Select --
          </option>
          <option value="subscriber">Subscriber</option>
          <option value="author">Author</option>
          <option value="admin">Admin</option>
          <option value="suspended">Suspended</option>
        </select>
        <button className="--btn --btn-primary">
          <FaCheck size={15} />
        </button>
      </form>
    </div>
  );
};

export default ChangeRole;
