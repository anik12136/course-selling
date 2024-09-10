import { useContext, useState } from "react";

import { useForm } from "react-hook-form";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import CommunityPost from "./CommunityPost/CommunityPost";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import RecentlyAskedQuestionInCommunity from "./RecentlyAskedQuestionInCommunity/RecentlyAskedQuestionInCommunity";
const Community = () => {
  const user = useContext(AuthContext);
  console.log(user);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState({});
  console.log("Form data inside community", formData);
  const onSubmit = (data) => {
    setFormData(data);
    // send user data to database.................
    fetch(
      "https://assignment-11-serve-site-kdls-44zm0028t-anik12136s-projects.vercel.app/communityPost",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          //  navigate('/');
        }
      });
    //------------end send user data to database
  };

  // Extract day, month, and year
  // const day = String(getDatabase())
  // console.log(day)
  // const month = String(getMonth() + 1).padStart(2, '0'); // Month is zero-based
  // const year = getFullYear();

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="flex justify-center">
      {/* --------------------------------------------------------------
      Parent Grid div
      --------------------------------------------------------------- */}

      <div className="my-9 w-3/4 grid grid-cols-4 gap-6">


        {/* ---------------------------------------------------------------
        Grid Child 1 : Ask a question in here. the form will receive the data
        ------------------------------------------------------------------- */}
        <div className="px-4 bg-slate-50 rounded-md  border shadow-md">
          <h1 className="text-2xl my-4">Ask a public question</h1>
          {/* -----------------------------------------------
          Form for question submission
          ----------------------------------------------- */}
          <form onSubmit={handleSubmit(onSubmit)}>

            {/* default user name and email  */}
            <div className="hidden">
              <input
                className="w-full h-12 border-2 border-black rounded-full  ps-4 focus:outline-none mt-3"
                {...register("name")}
                value={user?.displayName}
              />
              <input
                className="w-full h-12 border-2 border-black rounded-full  ps-4 focus:outline-none mt-3"
                {...register("email")}
                value={user?.email}
              />
              <input
                className="w-full h-12 border-2 border-black rounded-full  ps-4 focus:outline-none mt-3"
                {...register("date")}
                value={new Date().toLocaleString()}
              />
            </div>

            {/* Question Title */}
            <div>
              <label htmlFor="question" className="text-xl ml-2">
                Question title
              </label>
              <br />
              <input
                className="w-full h-12 border-2 border-black rounded-full  ps-4 focus:outline-none mt-3"
                {...register("questionTitle", { required: true })}
                placeholder="Provide a title that is related to your question"
              />
              <div>
                {errors.questionTitle && (
                  <p className="text-red-600 text-sm flex">
                    Please provide a course title
                  </p>
                )}
              </div>
            </div>
            {/* Question Description */}
            <div className="mt-4">
              <label
                htmlFor="questionDescription"
                className="text-xl ml-2"
              >
                Question description
              </label>
              <br />

              <textarea
                className="w-full h-52 border-2 border-black rounded-lg ps-4 focus:outline-none mt-3"
                name="questionDescription"
                id="questionDescription"
                cols="30"
                rows="10"
                placeholder="Explain your question"
                {...register("questionDescription", { required: true })}
              ></textarea>

              <div>
                {errors.questionDescription && (
                  <p className="text-red-600 text-sm flex">
                    Please provide a course description
                  </p>
                )}
              </div>
            </div>
            <button
              className="p-2 my-2  text-white bg-purple-600 flex justify-center items-center gap-3"
              type="submit"
              value="Post"
            >
              Post
              <PaperAirplaneIcon className="inline-block w-4"></PaperAirplaneIcon>{" "}
            </button>
            {/*  <div className="cursor-pointer p-4 mt-2 w-28 text-white bg-purple-600 flex justify-center items-center gap-3">
              <input type="submit" value="Post" />
              <PaperAirplaneIcon className="inline-block w-4"></PaperAirplaneIcon>
            </div> */}
          </form>
        </div>

        {/*---------------------------------------------------------------
         Grid Child 2 :All community posts will be shown here 
         ------------------------------------------------------------*/}
        <div className="px-4 bg-slate-50 rounded-md col-span-2 border shadow-md">

          {/* ---------------------------------------
        আনিক এইখান থেকে community এর সকল পোস্ট দেখা যাবে। তাই communityPost component এ যা. তার আগে from এর post button এ click করলে
        form এর data গুলো data base এ পাঠিয়ে রাখ। তাহলে communityPost component হতে fetch করে use করতে পারবি। 
        -----------------------------------------------*/}
          <CommunityPost />
        </div>

        {/* ---------------------------------------------------------------
        Grid Child 3 : Your Recently Asked Question in Community  
        -------------------------------------------------------- */}
        <div className="px-4 bg-slate-50 rounded-md border shadow-md">
          <RecentlyAskedQuestionInCommunity></RecentlyAskedQuestionInCommunity>
        </div>

      </div>
    </div>
  );
};

export default Community;
