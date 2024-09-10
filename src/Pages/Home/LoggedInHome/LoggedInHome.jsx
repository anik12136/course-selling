import AllCourses from "../../../Components/AllCourses/AllCourses";
import PopularCourses from "../PopularCourses/PopularCourses";
import TopCategories from "../TopCategories/TopCategories";

const LoggedInHome = () => {
    return (
        <div>
            <TopCategories></TopCategories>
            <PopularCourses></PopularCourses>
            <AllCourses></AllCourses>
        </div>
    );
};

export default LoggedInHome;