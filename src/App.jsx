import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Forgot from "./pages/auth/Forgot";
import Reset from "./pages/auth/Reset";
import LoginWithCode from "./pages/auth/LoginWithCode";
import Verify from "./pages/auth/Verify";
import Profile from "./pages/profile/Profile";
import ChangePassword from "./pages/changePassword/ChangePassword";
import UserList from "./pages/userList/UserList";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, loginStatus } from "./redux/features/auth/authSlice";
import { GoogleOAuthProvider } from "@react-oauth/google";

axios.defaults.withCredentials = true;

function App() {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector((store) => store.auth);

  useEffect(() => {
    dispatch(loginStatus());
    if (isLoggedIn && user === null) dispatch(getUser());
  }, [dispatch, isLoggedIn, user]);
  return (
    <>
      <Router>
        <GoogleOAuthProvider
          clientId={import.meta.env.VITE_ADV_AUTH_GOOGLE_CLIENT_ID}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<Forgot />} />
            <Route path="/reset-password/:resetToken" element={<Reset />} />
            <Route path="/login-with-code/:email" element={<LoginWithCode />} />
            <Route path="/verify/:verificationToken" element={<Verify />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/change-password" element={<ChangePassword />} />
            <Route path="/users" element={<UserList />} />
          </Routes>
          <Footer />
        </GoogleOAuthProvider>
      </Router>
    </>
  );
}

export default App;
