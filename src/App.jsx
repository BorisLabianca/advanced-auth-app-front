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

function App() {
  return (
    <>
      <Router>
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
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
