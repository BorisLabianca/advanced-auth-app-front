import { createContext, useState } from "react";
import styles from "./NotificationProvider.module.scss";

export const NotificationContext = createContext();

let timeOutId;

const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState("");
  const [classes, setClasses] = useState("");

  const updateNotification = (type, value) => {
    if (timeOutId) clearTimeout(timeOutId);
    switch (type) {
      case "error":
        setClasses(styles.error);
        break;
      case "success":
        setClasses(styles.success);
        break;
      case "warning":
        setClasses(styles.warning);
        break;
      case "info":
        setClasses(styles.info);
        break;

      default:
        setClasses(styles.error);
    }
    setNotification(value);
    timeOutId = setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  return (
    <NotificationContext.Provider value={{ updateNotification }}>
      {children}

      {notification && (
        <div className={`${styles.container} ${styles.bounce}`}>
          <div className={`${styles.middle} `}>
            <p className={`${classes} ${styles.text}`}>{notification}</p>
          </div>
        </div>
      )}
    </NotificationContext.Provider>
  );
};

export default NotificationProvider;
