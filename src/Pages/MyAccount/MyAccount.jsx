import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { getAuth, updateProfile,updatePassword } from "firebase/auth";
import { app } from "../../firebase/config";
const MyAccount = () => {
  const auth = getAuth(app);
  const user = useContext(AuthContext);
  console.log(user);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
/* Update profile section */
  const onSubmit = (data) => {
    console.log(typeof(data.photoURL));
    updateProfile(user, {
        displayName: data.name, photoURL: data.photoURL
      }).then(() => {
        console.log("Profile updated!");
  
      }).catch((error) => {
        console.log(error.message);
      
      });
       
   /*    updatePassword(user, data.newPassword).then(() => {
        console.log("Password updated!");
      }).catch((error) => {
        console.log(error.message);
      }); */

  };

  console.log(watch("example"));
  return (
    <div>
      <div className="min-h-[800px] flex flex-col pt-5 justify-center items-center">
        <div className="px-8 bg-slate-50 rounded-md w-[600px]">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-2xl mb-6">User Information</h1>

            <div>
              <label htmlFor="name" className="text-left text-md ml-4">
                Name
              </label>
              <br />
              <input
                type="text"
                className="w-full h-12 border-2 border-black rounded-full  ps-4 focus:outline-none mt-3"
                {...register("name", { required: true })}
                placeholder="Enter your full name"
              />
              <div>
                {errors.name && (
                  <p className="text-red-600 text-sm flex">
                    Please enter your full name
                  </p>
                )}
              </div>
            </div>
            <div>
              <label htmlFor="photoURL" className="text-left text-md ml-4">
                PhotURL
              </label>
              <br />
              <input
                type="text"
                className="w-full h-12 border-2 border-black rounded-full  ps-4 focus:outline-none mt-3"
                {...register("photoURL", { required: true })}
                placeholder="Provide a photoURL"
              />
              <div>
                {errors.photoURL && (
                  <p className="text-red-600 text-sm flex">
                    Please enter your full name
                  </p>
                )}
              </div>
            </div>
           {/*  <div>
              <label htmlFor="newPassWord" className="text-left text-md ml-4">
                New Password
              </label>
              <br />
              <input
                type="password"
                className="w-full h-12 border-2 border-black rounded-full  ps-4 focus:outline-none mt-3"
                {...register("newPassword", { required: true })}
                placeholder="Enter a new password"
              />
              <div>
                {errors.newPassword && (
                  <p className="text-red-600 text-sm flex">
                    Please enter your full name
                  </p>
                )}
              </div>
            </div> */}

            <button
              className="p-4 mt-2 w-full text-white bg-purple-600 flex justify-center items-center gap-3"
              type="submit"
              value="Post"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
