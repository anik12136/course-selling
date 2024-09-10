import { Link } from "react-router-dom";
import applyAsInstructor from "../../images/applyAsInstructor.png";
import { useContext,  } from 'react';
// import { useContext} from 'react';
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
// import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
// import { useQuery } from "@tanstack/react-query";

const ApplyInstructor = () => {

  const user = useContext(AuthContext);
    console.log(user?.email);
    const email = user?.email ;


  //make instructor function
  const handleMakeInstructor = userEmail =>{
    // const role = user.role;
    console.log("receive from click", userEmail)
    const role = 'instructor'; //did not work
    fetch(`https://assignment-11-serve-site-kdls-44zm0028t-anik12136s-projects.vercel.app/users/${userEmail}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          body: JSON.stringify(role)
        }
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.modifiedCount){
            // refetch();
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                // title: `${user.name} is an instructor Now!`,
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
}
  

  return (
    <div className="">
      <div className="flex justify-center items-center h-[800px] gap-14">
        <div className="max-h-96">

          <img src={applyAsInstructor} alt="apply as an instructor" />
        </div>
        <div>
          <h1 className="text-3xl text-blue-950 dark:text-white w-80 text-justify leading-relaxed mb-6 font-serif font-semibold">Join as Instructor and inspire students around the world</h1>
          <Link to={"/instructor"}>
            <button onClick={() => handleMakeInstructor(email)} className="p-5 rounded-full  text-white bg-indigo-700">Start teaching</button>
            {/* <button className="p-5 rounded-full  text-white bg-indigo-700">Start teaching</button> */}
          </Link>

        </div>
      </div>
    </div>
  );
};

export default ApplyInstructor;
