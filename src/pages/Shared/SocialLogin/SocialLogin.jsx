import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import app from "../../../firebase/firebase.init";

const SocialLogin = () => {
  const navigate = useNavigate();
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);

        navigate(from, { replace: true });
      })

      .catch((err) => {
        console.log("Error: ", err);
      });
  };
  return (
    <div>
      <button
        className="btn btn-slate-400 flex items-center mb-5 w-1/2 mx-auto"
        onClick={handleGoogleSignIn}
      >
        <FcGoogle className="text-4xl mr-5" /> Google
      </button>
    </div>
  );
};

export default SocialLogin;
