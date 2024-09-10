import { Link, useNavigate } from "react-router-dom";
import loginPageImage from "../../../public/images/loginpage images/login page.png";
import googleLogo from "../../../public/images/logos/google logo.png";
import facebookLogo from "../../../public/images/logos/facebook logo.svg";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { app } from "../../firebase/config";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

/* The LogIn Component Starts from here */

const LogIn = () => {
  const navigate = useNavigate();

  /* onsubmit event handler */
  const loginHandler = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        /* If logged in the switch the route */
        if (user) {
          navigate("/");
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  /* Google Authentication */
  const googleLogInHandler = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = result;
        console.log(credential.user);
        const loggedInUser = result.user;

        const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, role: "student" }

        fetch('https://assignment-11-serve-site-kdls-44zm0028t-anik12136s-projects.vercel.app/users', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
          .then(res => res.json())
        /* If logged in the switch the route */
        if (credential) {
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error, error.message);
      });
  };

  return (
    /* The whole container */
    <div className="flex items-center justify-center py-20">
      {/* Parent container */}
      <div className="flex justify-center items-center">
        {/* Child 1 */}
        <div className="bg-[#FBF4EC] lg:h-[520px] flex justify-center">
          <img className="w-full my-auto mx-0" src={loginPageImage} />
        </div>
        {/* Child 2 */}
        <div className="p-5">
          <h1 className="text-4xl font-extrabold mb-3 dark:text-white">
            Welcome!
          </h1>
          <p className="font-semibold dark:text-white">
            Log in to your account
          </p>
          {/* Form starts from here  */}
          <form action="" onSubmit={loginHandler}>
            <label htmlFor="email">
              <p className="pl-2  mt-3 dark:text-white">Email</p>
            </label>
            <input
              className="w-96 border-2 border-black rounded-full h-12 pl-4 focus:outline-none"
              type="email"
              name="email"
              id=""
              placeholder="example@mail.com"
              required
            />
            <label htmlFor="password">
              <p className="pl-2  mt-3 dark:text-white">Password</p>{" "}
            </label>
            <input
              className="w-96 border-2 border-black rounded-full h-12 pl-4 focus:outline-none"
              type="password"
              name="password"
              id=""
              placeholder="Please enter your password"
              required
            />
            <br />
            <div className="text-right pt-2">
              <Link to={""} className="underline dark:text-white">
                Forgot Password?
              </Link>
            </div>
            <button
              type="submit"
              className="block bg-[#27262A] dark:bg-[#D9D9D9] text-white dark:text-black font-bold py-3 w-96 rounded-full mt-3"
            >
              Log in
            </button>
            <button
              type="submit"
              className="border-2 border-black dark:border-white text-[#27262A] dark:text-white py-3 w-96 rounded-full mt-3 "
              onClick={googleLogInHandler}
            >
              <img className="inline w-6 h-6 mr-2" src={googleLogo} />
              Log in with Google
            </button>
            <button
              type="submit"
              className="block hidden border-2 border-black dark:border-white text-[#27262A] dark:text-white py-3 w-96 rounded-full mt-3"
            >
              <img className="w-6 h-6 mr-2 inline" src={facebookLogo} />
              Log in with Facebook
            </button>
          </form>

          <div className="mt-7 dark:text-white">
            <span>Do not have an account yet?</span>
            <Link to={"/signUp"} className="underline ml-5">
              Create a free account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
