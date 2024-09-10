import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const WonderfulJourney = () => {
    return (
        <div className="flex items-center justify-between px-40 bg-[#F1FDF7]  py-10 my-20">

            <div>
                <img className="h-[420px]" src="../../../../public/images/homepage images/become a student.png" alt="" />
            </div>
            <div className=" ">
                <p className="text-[70px] font-extrabold">Lets Start</p>
                <p className="text-[70px] font-extrabold  -mt-8">Your Wonderful</p>
                <p className="text-[70px] font-extrabold  -mt-8">Journey</p>

                <Link>
                    <button className="bg-black text-white mt-4 border rounded-lg px-3 py-3 text-[12px] flex items-center gap-3">
                        Become a Student
                        <FaRegArrowAltCircleRight className="text-lg"></FaRegArrowAltCircleRight>
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default WonderfulJourney;