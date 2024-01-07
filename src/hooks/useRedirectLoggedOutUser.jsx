import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../redux/features/auth/authService";
import { useNotification } from ".";

const useRedirectLoggedOutUser = (path) => {
  const navigate = useNavigate();
  const { updateNotification } = useNotification();

  useEffect(() => {
    let isLoggedIn;
    const redirectLoggedOutUser = async () => {
      try {
        isLoggedIn = await authService.loginStatus();
      } catch (error) {
        console.log(error);
      }
      if (!isLoggedIn) {
        updateNotification(
          "warning",
          "Session expired. Please log in to continue."
        );
        navigate(path);
        return;
      }
    };
    redirectLoggedOutUser();
  }, [path, navigate]);
};

export default useRedirectLoggedOutUser;
