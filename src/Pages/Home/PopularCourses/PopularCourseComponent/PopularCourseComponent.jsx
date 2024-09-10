// import PropTypes from 'prop-types';
// import { ShoppingCartIcon, BookmarkIcon } from "@heroicons/react/24/outline";
import Bookmark from "../../../../Components/Bookmark/Bookmark";
import AddTOCart from "../../../../Components/AddTOCart/AddTOCart";


const PopularCourseComponent = ({ course }) => {
  // console.log(course);



  return (
    <div className="grid  justify-center items-center">
      <div className="text-left border p-3 rounded-md shadow-lg w-72 flex flex-col justify-between">
        <div>
          {/* -----------------------Banner Image -------------------------*/}
          <img
            className="h-48 w-full object-fill"
            src={course.courseBanner}
            alt="course banner"
          />
          {/*----------------------- Course title ------------------------*/}
          <p className="text-left font-semibold my-4 text-lg">
            {course.courseTitle}
          </p>
          {/*------------------- Course Teacher Name -------------------*/}
          <p className="text-gray-500">{course.teacherName}</p>
          {/* ------------------Course Content details -------------------*/}
          <div className="text-gray-500 grid grid-cols-2 gap-2 text-center my-3">
            <p className="p-1 border border-gray-500 rounded-lg">
              {course.courseHours}h+
            </p>
            <p className="p-1 border border-gray-500 rounded-lg">
              {course.modules} modules
            </p>
            <p className="p-1 border border-gray-500 rounded-lg">
              {course.numberOfVideos} videos
            </p>
            <p className="p-1 border border-gray-500 rounded-lg">
              {course.numberOfQuizzes} Quizzes
            </p>
            <p className="p-1 border border-gray-500 rounded-lg">
              {course.courseHours} milestones
            </p>
          </div>
          {/* -------------Course Price & Bookmark----------------- */}
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg mb-4">$ {course.coursePrice}</p>
            {/* <BookmarkIcon className="h-7"></BookmarkIcon> */}
            <Bookmark
              key={course._id}
              course={course}
            ></Bookmark>
          </div>
          {/*------------------------------ Features------------------------ */}
          <div className="text-blue-800 grid grid-cols-2 gap-1">
            {course.features.map((feature, index) => (
              <p
                className="bg-blue-300 p-1 rounded-lg text-center"
                key={index}
              >
                {feature}
              </p>
            ))}
          </div>
        </div>
        {/* Add to cart button */}
        <div>
          <AddTOCart coursePrice={course.coursePrice}
          course = {course}
          ></AddTOCart>
        </div>
      </div>
    </div>

  );

};
export default PopularCourseComponent;
