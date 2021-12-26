import ForgotPasswordForm from "./ForgotPasswordForm/ForgotPasswordForm";
import "./ForgotPasswordPage.scss";

export default function ForgotPasswordPage() {
  return (
    <>
      <div className="forgot-password-page-info">
        <p>
          Enter your <strong>Email address</strong> and we will send you your{" "}
          <strong>Password</strong>
        </p>
      </div>
      <ForgotPasswordForm />
    </>
  );
}
