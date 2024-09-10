import Business from "../../../../public/images/homepage images/Business.png";
import Photography from "../../../../public/images/homepage images/Photography.png";
import Music from "../../../../public/images/homepage images/Music.png";
import Design from "../../../../public/images/homepage images/Design.png";
import Development from "../../../../public/images/homepage images/development.png";
import Marketing from "../../../../public/images/homepage images/Marketing.png";
import ITAndSoftware from "../../../../public/images/homepage images/IT and Software.png";
import PersonalDevelopment from "../../../../public/images/homepage images/PersonalDevelopment.png";
const TopCategories = () => {
    return (
        <div className=" my-14 mx-40">
            <h2 className="text-center text-3xl my-8 border-b-4 rounded-b-lg w-56  mx-auto ">TopCategories</h2>
            <div className="grid  grid-cols-4 gap-y-6 gap-x-20">
                <div className="">
                    <img className="h-56 w-56 my-3 grid" src={Design} alt="" />
                    <h2 className="text-center">Design</h2>
                </div>
                <div className="">
                    <img className="h-56 w-56 my-3" src={Development} alt="" />
                    <h2 className="text-center">Development</h2>               
                </div>
                <div className="">
                    <img className="h-56 w-56 my-3" src={Marketing} alt="" />
                    <h2 className="text-center">Marketing</h2>                
                </div>
                <div className="">
                    <img className="h-56 w-56 my-3" src={ITAndSoftware} alt="" />
                    <h2 className="text-center">IT and Software</h2>                
                </div>
                <div className="">
                    <img className="h-56 w-56 my-3" src={PersonalDevelopment} alt="" />
                    <h2 className="text-center">Personal development</h2>                
                </div>
                <div className="">
                    <img className="h-56 w-56 my-3" src={Business} alt="" />
                    <h2 className="text-center">Business</h2>                
                </div>
                <div className="">
                    <img className="h-56 w-56 my-3" src={Photography} alt="" />
                    <h2 className="text-center">Photography</h2>                
                </div>
                <div className="">
                    <img className="h-56 w-56 my-3" src={Music} alt="" />
                    <h2 className="text-center">Music</h2>
                </div>
            </div>
        </div>
    );
};

export default TopCategories;