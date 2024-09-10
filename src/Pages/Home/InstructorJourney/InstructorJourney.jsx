import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import instructor from "../../../../public/images/homepage images/instructor journey.png"

const InstructorJourney = () => {
    return (
        <div className="flex items-center justify-between px-40 py-10">
            <div className="">
                <p className="text-[80px] font-extrabold">Become an </p>
                <p className="text-[80px] font-extrabold  -mt-8">Instructor</p>
                <h2 className="text-3xl">Got skills and want to share with people</h2>

                <Link>
                    <button className="bg-black text-white mt-4 border rounded-lg px-3 py-3 text-[12px] flex items-center gap-3">
                        Start teaching today
                        <FaRegArrowAltCircleRight className="text-lg"></FaRegArrowAltCircleRight>
                    </button>
                </Link>
            </div>
            <div>
                <img className="h-[520px]" src={instructor} alt="" />
            </div>
        </div>
    );
};

export default InstructorJourney;