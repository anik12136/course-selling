import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import requestCourse from "../../../../public/images/homepage images/RequestCourses.png"

const ReqCourses = () => {
  return (
    <div className="flex justify-center  bg-[#F5F5F5] py-10 mt-20">
      <div className="flex items-center item-center justify-center gap-80">
        <div>
          <img
            className="h-[520px]"
            src={requestCourse}
            alt=""
          />
        </div>

        <div className="w-80">
          <p className="text-[80px] font-extrabold">Request </p>
          <p className="text-[80px] font-extrabold  -mt-8">Courses </p>
          <h2 className="text-3xl">Did not find the course you want?</h2>
          <h2 className=" text-lg my-5 mt-10">
            Don’t worry! We provide an option where students can request their
            favorable courses. Our wonderful teachers will help you any time
          </h2>

          <Link>
            <button className="bg-black text-white mt-4 border rounded-lg px-3 py-3 text-[12px] flex items-center gap-3">
              Request Courses
              <FaRegArrowAltCircleRight className="text-lg"></FaRegArrowAltCircleRight>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReqCourses;
