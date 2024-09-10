import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import useCart from "../../Hooks/useCart";

const AddTOCart = ({ course }) => {

  const user = useContext(AuthContext)
  const [, refetch] = useCart();

  const handleAddToCart = course => {
    console.log(course);
    if (user && user.email) {
      const cartItem = {
        idEmail: course._id + user?.email, courseId: course._id, courseHours: course.courseHours, courseBanner: course.courseBanner,
        coursePrice: course.coursePrice, teacherName: course.teacherName, numberOfVideos: course.numberOfVideos,
        email: user.email, teacherEmail: course.email, courseCategories: course.courseCategories,
        courseTitle: course.courseTitle, milestones: course.milestones, modules: course.modules, features: course.features,
        numberOfQuizzes: course.numberOfQuizzes
      }

      fetch('https://assignment-11-serve-site-kdls-6ww02uv0l-anik12136s-projects.vercel.app/carts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartItem)
      })
        .then(res => res.json())
        .then(data => {
          if (data.insertedId) {
            // refetch(); // refetch cart to update the number of items in the cart
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Course added on the cart.',
              showConfirmButton: false,
              timer: 1500
            })
            refetch()
          }
        })
    }
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
  }
  return (
    <button onClick={() => handleAddToCart(course)} className="border my-3 w-full p-2 text-2xl font-semibold bg-violet-600 hover:bg-violet-700 text-white
      ">
      Add To Cart
      <ShoppingCartIcon className="h-6 inline-block ml-4"></ShoppingCartIcon>

    </button>
  );
};

export default AddTOCart;
