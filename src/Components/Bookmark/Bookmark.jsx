import { BookmarkIcon } from '@heroicons/react/24/outline';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import { useForm } from "react-hook-form";
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

const Bookmark = ({ course }) => {
    const user = useContext(AuthContext);
    // console.log(user)
    // console.log(course?._id)

    const {
        register,
        handleSubmit,
        // formState: { errors },
    } = useForm();


    const [formData, setFormData] = useState({});
    const onSubmit = (data) => {
        setFormData(data);
        // send user data to database.................
        if (user && user.email) {

            fetch(
                "http://localhost:5000/bookmarks",
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(data),
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    if (data.insertedId) {
                        // reset();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Bookmarked successfully.",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        //  navigate('/');
                    }
                });

        }
        //------------end send user data to database
        else {
            Swal.fire({
              title: 'Please login first',
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Login now!'
            }).then((result) => {
              if (result.isConfirmed) {
                Navigate('/login', { state: { from: location } })
              }
            })
          }
    };
    // console.log(course)
    // console.log(formData)


    if (!user) {
        return (
            <Link to={'/login'}>
                <BookmarkIcon className="w-6 h-6 cursor-pointer dark:text-white"></BookmarkIcon>
            </Link>
        );
    }
    else {
        return (
            <div>

                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <button>
                            <BookmarkIcon className="w-6 h-6 cursor-pointer dark:text-white"
                                type="submit"
                                value="Post"
                            ></BookmarkIcon>
                        </button>

                        {/* default user name and email  */}
                        <div className="hidden">
                            <input
                                {...register("date")}
                                value={new Date().toLocaleString()}
                            />
                            <input
                                {...register("idEmail")}
                                value={course._id + user.email}
                            />
                            <input
                                {...register("email")}
                                value={user?.email}
                            />

                            <input
                                {...register("bookmarkId")}
                                value={course._id}
                            />
                            <input
                                {...register("courseBanner")}
                                value={course.courseBanner}
                            />
                            <input
                                {...register("courseCategories")}
                                value={course.courseCategories}
                            />
                            <input
                                {...register("courseHours")}
                                value={course.courseHours}
                            />
                            <input
                                {...register("coursePrice")}
                                value={course.coursePrice}
                            />
                            <input
                                {...register("courseTitle")}
                                value={course.courseTitle}
                            />
                            <input
                                {...register("enrollCount")}
                                value={course.enrollCount}
                            />
                            <input
                                {...register("features")}
                                value={course.features}
                            />
                            <input
                                {...register("milestones")}
                                value={course.milestones}
                            />
                            <input
                                {...register("modules")}
                                value={course.modules}
                            />
                            <input
                                {...register("numberOfQuizzes")}
                                value={course.numberOfQuizzes}
                            />
                            <input
                                {...register("numberOfVideos")}
                                value={course.numberOfVideos}
                            />
                            <input
                                {...register("teacherName")}
                                value={course.teacherName}
                            />

                        </div>


                    </form>
                </div>
            </div>
        );
    }
};

export default Bookmark;