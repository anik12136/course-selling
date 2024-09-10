// import React from "react";
import { Link, useNavigate } from "react-router-dom";
import loginPageImage from "../../../public/images/loginpage images/login page.png";
import googleLogo from "../../../public/images/logos/google logo.png";
import facebookLogo from "../../../public/images/logos/facebook logo.svg";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { app } from "../../firebase/config";
import defaultUserProfile from "../../images/defaultUser.png";
import Swal from "sweetalert2";

const auth = getAuth(app);

const SignUp = () => {
  /* use navigate from react router dom */
  const navigate = useNavigate();
  /*submit Event Handler */
  const signUpHandler = (event) => {
    event.preventDefault();
    // const form = event.target;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const name = event.target.text.value;
    // role
    const role = event.target.role.value;

     /* console.log(email, password, name,role); */
     console.log(email, password, name,role);
    /* create a use with email and password */
    createUserWithEmailAndPassword(auth, email,password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log(user);
        navigate("/");

        /* Default name and image while sign up with email and password */
        updateProfile(user, {
          displayName: name,
          photoURL: defaultUserProfile,
          // role
          role: role,
        })
          .then(() => {

            // send user data to database.................
            const insertUser = {name:name, email:email, role:role }
            console.log(insertUser);
            fetch('https://assignment-11-serve-site-kdls-44zm0028t-anik12136s-projects.vercel.app/users', {
                            method: 'POST',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(insertUser)
                        })
                        .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    // reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User created successfully.',
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/');
                                }
                            })
      //------------end send user data to database
            console.log("Profile updated!");
            // console.log(role)
          })
          .catch((error) => {
            console.log("An error occurred!", error.message);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;

        console.log(errorMessage);
      });
  };
  
  return (
    /* The whole container */
    <div className="flex items-center justify-center py-20">
      {/* Parent container */}
      <div className="flex justify-center items-center">
        {/* Child 1 */}
        <div className="bg-[#FBF4EC] lg:h-[680px] flex justify-center">
          <img className="w-full my-auto mx-0" src={loginPageImage} />
        </div>
        {/* Child 2 */}
        <div className="p-5">
          <h1 className="text-4xl font-extrabold mb-3 dark:text-white">
            Welcome!
          </h1>
          <p className="font-semibold dark:text-white">
            Get started by creating a free account
          </p>

          {/* form starts from here */}
          <form onSubmit={signUpHandler}>
            <label htmlFor="name">
              <p className="pl-2  mt-3 dark:text-white">Name</p>
            </label>
            {/* Name Field */}
            <input
              className="w-96 border-2 border-black rounded-full h-12 pl-4 focus:outline-none"
              type="text"
              name="text"
              id=""
              placeholder="Enter your name"
              required
            />
            {/* Email Field */}
            <label htmlFor="email">
              <p className="pl-2  mt-3 dark:text-white">Email</p>
            </label>

            <input
              className="w-96 border-2 border-black rounded-full h-12 pl-4 focus:outline-none"
              type="email"
              name="email"
              id=""
              placeholder="Enter your email"
              required
            />
            {/* Password Field */}
            <label htmlFor="password">
              <p className="pl-2  mt-3 dark:text-white">Password</p>
            </label>
            <input
              className="w-96 border-2 border-black rounded-full h-12 pl-4 focus:outline-none"
              type="password"
              name="password"
              id=""
              placeholder="Enter a strong password"
              required
            />

            {/* Sign Up Button */}
            <label htmlFor="sign-up"></label>
            <input
              type="submit"
              value="Sign up"
              className="block bg-[#27262A] dark:bg-[#D9D9D9] text-white dark:text-black font-semibold py-3 w-96 rounded-full mt-3 cursor-pointer"
            />
            {/* GOOGLE sign up */}
            <button className="border-2 border-black dark:border-white text-[#27262A] dark:text-white py-3 w-96 rounded-full mt-3 hidden">
              <img className="inline w-6 h-6 mr-2" src={googleLogo} />
              Sign up with Google
            </button>
            {/* Facebook SignUp */}
            <button className="block border-2 border-black dark:border-white text-[#27262A] dark:text-white  py-3 w-96 rounded-full mt-3 hidden">
              <img className="w-6 h-6 mr-2 inline" src={facebookLogo} />
              Sign up with Facebook
            </button>


            {/* role------------- */}
            <label htmlFor="role">
              <p className="pl-2  mt-3 dark:text-white hidden">role</p>
            </label>

            <input
              className="w-96 border-2 border-black rounded-full h-12 pl-4 focus:outline-none hidden  "
              type="text"
              name="role"
              id=""
              placeholder="Enter your role"
              value="student"
            />
            {/* end role------------- */}

          </form>

          <div className="mt-7 dark:text-white">
            <span>Already have an account?</span>
            <Link to={"/logIn"} className="underline ml-5">
              Back to log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
