import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./PasswordInput.scss";
import { useState } from "react";

const PasswordInput = ({ value, onChange, placeholder, onPaste, name }) => {
  const [showPassword, setshowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setshowPassword(!showPassword);
  };

  return (
    <div className="password">
      <input
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        required
        name={name}
        value={value}
        onChange={onChange}
        onPaste={onPaste}
      />
      <div className="icon" onClick={togglePasswordVisibility}>
        {showPassword ? (
          <AiOutlineEyeInvisible size={20} />
        ) : (
          <AiOutlineEye size={20} />
        )}
      </div>
    </div>
  );
};

export default PasswordInput;
