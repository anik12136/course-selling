import Swal from "sweetalert2";
import AddTOCart from "../AddTOCart/AddTOCart";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useBookmark from "../../Hooks/useBookmark";

const CourseCardDesign = ({ course }) => {
    // console.log(course.features);

    const axiosSecure = useAxiosSecure();
  const [,refetch] = useBookmark();

  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.delete(`/bookmarks/${id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Removed!",
                text: "Your file has been Removed.",
                icon: "success"
              });
              refetch();
            }
          })
      }
    });
  }


    return (
        <div className="grid  justify-center items-center my-5">
            <div className="text-left border p-3 rounded-md shadow-lg w-72 flex flex-col justify-between">
                <div>
                    <div className="flex justify-end text-sm  ">
                    <button onClick={() => handleDelete(course._id)}
                    className="mb-2 border p-2 rounded-full text-white bg-red-800 hover:bg-red-500  ">Remove</button>
                    
                    </div>
                    
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
                    <p className="text-gray-500 text-xl">{course.teacherName}</p>
                    {/* ------------------Course Content details -------------------*/}
                    <div className="text-gray-500 grid grid-cols-2 gap-2 text-center my-3">
                        <p className="p-1 border border-gray-500 rounded-lg text-sm">
                            {course.courseHours}h+
                        </p>
                        <p className="p-1 border border-gray-500 rounded-lg text-sm">
                            {course.modules} modules
                        </p>
                        <p className="p-1 border border-gray-500 rounded-lg text-sm">
                            {course.numberOfVideos} videos
                        </p>
                        <p className="p-1 border border-gray-500 rounded-lg text-sm">
                            {course.numberOfQuizzes} Quizzes
                        </p>
                        <p className="p-1 border border-gray-500 rounded-lg text-sm">
                            {course.courseHours} milestones
                        </p>
                    </div>
                    {/* -------------Course Price & Bookmark----------------- */}
                    <div className="flex justify-between items-center">
                        <p className="font-bold text-lg mb-4">$ {course.coursePrice}</p>
                        {/* <BookmarkIcon className="h-7"></BookmarkIcon> */}
                        {/* <Bookmark
                            key={course._id}
                            course={course}
                        ></Bookmark> */}
                    </div>
                    {/*------------------------------ Features------------------------ */}
                   <p className="text-sm"><span className="font-bold">Features:</span>{course.features}</p>
                </div>
                {/* Add to cart button */}
                <div>
                    <AddTOCart course={course}></AddTOCart>
                </div>
            </div>
        </div>

    );

};
export default CourseCardDesign;