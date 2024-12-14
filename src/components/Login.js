import Header from "./Header";
import { NetflixBG } from "./Constaints";
import { useState } from "react";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true)
    const handleSigningForm = () => {
        setIsSignIn(!isSignIn);
    }

    return (
      <div>
        <Header />
        <div>
          <img src={NetflixBG} alt="Netflix" />
        </div>
        <form className="rounded-md bg-opacity-80 text-white absolute top-20 left-1/3 p-8 m-5 bg-black w-3/12 text-left">
          <h1 className="text-2xl font-bold">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Your Name"
              className="text-md w-full p-2 bg-gray-700 outline-none my-3"
            />
          )}
          <input
            type="mail"
            placeholder="Enter mail id"
            className="text-md w-full p-2 bg-gray-700 outline-none my-3"
          />
          <input
            type="password"
            placeholder="Password"
            className="text-md w-full p-2 outline-none bg-gray-700 my-3"
          />
          {!isSignIn &&
            <input
              type="password"
              placeholder="Confirm password"
              className="text-md w-full p-2 outline-none bg-gray-700 my-3"
            />
          }
          <button className="text-sm font-semibold mt-2 w-full p-3 bg-red-600 border-none rounded-sm">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="cursor-pointer py-3 text-sm"
            onClick={handleSigningForm}
          >
            {isSignIn ? "New to Netflix? Sign Up Now.": "Already Registered? Sign In Now."}
          </p>
        </form>
      </div>
    );
}

export default Login;