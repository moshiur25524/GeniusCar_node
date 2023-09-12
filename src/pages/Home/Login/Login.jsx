import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../../../assets/images/login/login.svg";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../../../firebase/firebase.init";
import { useState } from "react";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";

const auth = getAuth(app);

const Login = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Login Button info
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const passwrod = e.target.password.value;
    setError("");

    // Sign in User
    signInWithEmailAndPassword(auth, email, passwrod)
      .then((result) => {
        const user = result.user;
        console.log(user);

        // storeUserEmailInToken(user.email);

        navigate(from, { replace: true });
        console.log(user);
        setSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
    e.target.reset();
  };

  // get User Email from input field using onBlur
  const handleEmail = (e) => {
    const user = e.target.value;
    setUserEmail(user);
  };

  // Reset password
  const handleResetPassword = () => {
    if (!userEmail) {
      alert("Please Enter your Email address");
      return;
    }

    sendPasswordResetEmail(auth, userEmail)
      .then(() => {
        alert("Please check the Email to reset password");
      })
      .then((err) => {
        console.log(err);
      });
  };
  return (
    <div className="hero my-16">
      <div className="hero-content flex-col lg:flex-row">
        <div>
          <img src={login} alt="" />
        </div>

        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <h1 className="text-5xl font-bold">Login now!</h1>
            {/* {user.displayName} */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                onBlur={handleEmail}
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />

              <label className="label">
                <a
                  onClick={handleResetPassword}
                  href="#"
                  className=" text-xl text-blue-500 label-text-alt link link-hover"
                >
                  Forgot password? Reset Email
                </a>
              </label>
            </div>
            {success && (
              <p className="text-xl text-green-600">
                User Login Successfully !!
              </p>
            )}
            {error && <p className="text-xl text-red-600">{error}</p>}
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="Login" />
            </div>
          </form>
          <p className="text-center my-8">
            Do not have genius car ?{" "}
            <Link to="/signup" className="text-orange-600 font-semibold">
              Sign Up
            </Link>
          </p>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
