import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const JoinOurCommunity = () => {
    return (
        <div className="flex items-center justify-between px-40  py-10 my-20">
            <div className="w-80 ">
                <p className="text-[80px] font-extrabold">Join Our  </p>
                <p className="text-[80px] font-extrabold  -mt-8">Community</p>
                <h2 className="mt-2 text-sm mb-8">We have wonderful people in our community
                    who will always help you with you study and
                    course related problem</h2>

                <Link>
                    <button className="bg-black text-white mt-4 border rounded-lg px-3 py-3 text-[12px] flex items-center gap-3">
                        Community
                        <FaRegArrowAltCircleRight className="text-lg"></FaRegArrowAltCircleRight>
                    </button>
                </Link>
            </div>
            <div>
                <img className="h-[520px]" src="../../../../public/images/homepage images/community.png" alt="" />
            </div>
        </div>
    );
};

export default JoinOurCommunity;