// import { useContext } from 'react';
import { getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import login from "../../assets/images/login/login.svg";
import { Link } from "react-router-dom";
import app from "../../firebase/firebase.init";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/UserContext/UserContext";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
// import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const auth = getAuth(app);

const Signup = () => {
  const { createUser } = useContext(AuthContext);

  // const {createUser} = useContext(AuthContext)
  const [passwordError, setPasswordError] = useState("");
  const [success, setSuccess] = useState(false);

  const verifyEmail = () => {
    sendEmailVerification(auth.currentUser).then(() => {
      alert("Please check your email and verify");
    });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    setSuccess(false);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // password verify
    if (!/[a-z]/i.test(password)) {
      setPasswordError("Please Provide a letter");
      return;
    }

    if (password.length < 6) {
      setPasswordError("Password will be at least 6 digits");
      return;
    }

    setPasswordError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess(true);
        verifyEmail();
        handleUpdateProfile(name);
      })
      .catch((error) => {
        console.log(error);
        setPasswordError(error.message);
      });
    form.reset();
  };

  const handleUpdateProfile = (name) => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then(() => {
        console.log("User name is updated");
      })
      .catch((err) => {
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
          <form className="card-body" onSubmit={handleSignUp}>
            <h1 className="text-5xl font-bold">Signup now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
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
            </div>
            <p className="text-xl text-red-600">{passwordError}</p>
            {success && (
              <p className="text-xl text-green-600">
                User created Successfully
              </p>
            )}
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-primary" value="SIGNUP" />
            </div>
          </form>
          <p className="text-center my-8">
            Already Have an account ?{" "}
            <Link to="/login" className="text-orange-600 font-semibold">
              Login
            </Link>
          </p>
          <SocialLogin />
        </div>
      </div>
    </div>
  );
};

export default Signup;
