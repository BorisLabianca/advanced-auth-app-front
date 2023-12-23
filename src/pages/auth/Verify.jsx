import styles from "./Auth.module.scss";

const Verify = () => {
  return (
    <section className="verify --center-all">
      <div className="--center-all">
        <h2>Account Verification</h2>
        <p>To verify your account, click the button below.</p>
        <br />
        <button className="--btn --btn-primary">Verifry Account</button>
      </div>
    </section>
  );
};

export default Verify;
