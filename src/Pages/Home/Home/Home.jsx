import Banner from "../Banner/Banner";
import FeaturedTopicByCategory from "../FeaturedTopicByCategory/FeaturedTopicByCategory";
import InstructorJourney from "../InstructorJourney/InstructorJourney";
import JoinOurCommunity from "../JoinOurCommunity/JoinOurCommunity";
import PopularCourses from "../PopularCourses/PopularCourses";
import SchoolAndColleges from "../SchoolAndColleges/SchoolAndColleges";
import Sponsor from "../Sponsor/Sponsor";
import StudentThink from "../StudentThink/StudentThink";
import TopCategories from "../TopCategories/TopCategories";
import WonderfulJourney from "../WonderfulJourney/WonderfulJourney";
import ReqCourses from "../ReqCourses/ReqCourses";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider/AuthProvider";
import LoggedInHome from "../LoggedInHome/LoggedInHome";


const Home = () => {

const user = useContext(AuthContext);
    return (
        <>
        {
            !user?
            <div >
            <Banner></Banner>
            <TopCategories></TopCategories>
            <FeaturedTopicByCategory></FeaturedTopicByCategory>
            <PopularCourses></PopularCourses>
            <SchoolAndColleges></SchoolAndColleges>
            <StudentThink></StudentThink>
            <ReqCourses></ReqCourses>
            <JoinOurCommunity></JoinOurCommunity>
            <WonderfulJourney></WonderfulJourney>
            <InstructorJourney></InstructorJourney>
            <Sponsor></Sponsor>
        </div>
        :
        <LoggedInHome></LoggedInHome>

        }
        </>
    );
};

export default Home;