import { useSelector } from "react-redux";

export const ShowWhileLoggedIn = ({ children }) => {
  const { isLoggedIn } = useSelector((store) => store.auth);

  if (isLoggedIn) {
    return <>{children}</>;
  } else {
    return null;
  }
};

export const ShowWhileLoggedOut = ({ children }) => {
  const { isLoggedIn } = useSelector((store) => store.auth);

  if (!isLoggedIn) {
    return <>{children}</>;
  } else {
    return null;
  }
};

export const ForAdminAuthorOnly = ({ children }) => {
  const { user, isLoggedIn } = useSelector((store) => store.auth);

  if (isLoggedIn && (user.role === "admin" || user.role === "author")) {
    return <>{children}</>;
  } else {
    return null;
  }
};
