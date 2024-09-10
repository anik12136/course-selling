import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import schoolAndColleges from "../../../../public/images/homepage images/college-students.png"
const SchoolAndColleges = () => {
    return (
        <div className=" flex justify-center items-center bg-[#F1FDF7] py-10 mt-20">
            <div className="max-w-7xl flex items-center gap-80">
            <div className="w-80">
                <p className="text-[80px] font-extrabold">School & </p>
                <p className="text-[80px] font-extrabold  -mt-8">Colleges</p>
                <h2 className="text-3xl">From Class 5-12</h2>
                <h2 className="mt-2 text-xl">Find your best academic courses</h2>
                <div>
                    <Link>
                        <button className="bg-black text-white mt-4 border rounded-lg px-3 py-3 text-[12px] flex items-center gap-3">
                            Explore Courses
                            <FaRegArrowAltCircleRight className="text-lg"></FaRegArrowAltCircleRight>
                        </button>
                    </Link>
                </div>
            </div>
            <div className="">
                <img className="h-[520px]" src={schoolAndColleges} alt="" />

            </div>
            </div>
            
        </div>
    );
};

export default SchoolAndColleges;