import { Link } from "react-router-dom";


const FeaturedTopicByCategory = () => {
  return (
    <>
      <div className="px-40 -[#1B4242] bg-[#F5F5F5] py-8 my-20">
        <h2 className="mb-10 text-center text-3xl border-b-4 rounded-b-lg w-96  mx-auto ">Featured Topic By Category</h2>
        <div>
          <div className="grid grid-cols-4 justify-center  gap-x-20 mb-5">
            <h2 className="text-center">Development</h2>
            <h2 className="text-center">Business</h2>
            <h2 className="text-center">IT and Software</h2>
            <h2 className="text-center">Design</h2>
          </div>

          <div className="grid grid-cols-4 justify- justify-around gap-x-20 gap-y-4 text-sm ">
            <div className="bg-white ps-3 py-2 ">
              <h2 className="text-[#5624D0]  ">python</h2>
              <h2 className="text-[#6A6F73]">36,354,994 learners</h2>
            </div>
            <div className="bg-white ps-3 py-2 ">
              <h2 className="text-[#5624D0]  ">Financial Analysis</h2>
              <h2 className="text-[#6A6F73]">1,195,282 learners</h2>
            </div>
            <div className="bg-white ps-3 py-2 ">
              <h2 className="text-[#5624D0]  ">Amazon AWS</h2>
              <h2 className="text-[#6A6F73]">6,123,456 learners</h2>
            </div>
            <div className="bg-white ps-3 py-2 ">
              <h2 className="text-[#5624D0]  ">Photoshop</h2>
              <h2 className="text-[#6A6F73]">10,909,736 learners</h2>
            </div>
            <div className="bg-white ps-3 py-2 ">
              <h2 className="text-[#5624D0]  ">Web Development</h2>
              <h2 className="text-[#6A6F73]">11,415,615 learners</h2>
            </div>
            <div className="bg-white ps-3 py-2 ">
              <h2 className="text-[#5624D0]  ">SQL</h2>
              <h2 className="text-[#6A6F73]">5,977,561 learners</h2>
            </div>
            <div className="bg-white ps-3 py-2 ">
              <h2 className="text-[#5624D0]  ">Ethical Hacking</h2>
              <h2 className="text-[#6A6F73]">10,931,066 learners</h2>
            </div>
            <div className="bg-white ps-3 py-2 ">
              <h2 className="text-[#5624D0]  ">Graphic Design</h2>
              <h2 className="text-[#6A6F73]">3,381,052 learners</h2>
            </div>
            <div className="bg-white ps-3 py-2 ">
              <h2 className="text-[#5624D0]  ">Machine Learning</h2>
              <h2 className="text-[#6A6F73]">7,070,015 learners</h2>
            </div>
            <div className="bg-white ps-3 py-2 ">
              <h2 className="text-[#5624D0]  ">PMP</h2>
              <h2 className="text-[#6A6F73]">1,733,398 learners</h2>
            </div>
            <div className="bg-white ps-3 py-2 ">
              <h2 className="text-[#5624D0]  ">Cyber Security</h2>
              <h2 className="text-[#6A6F73]">3,998,037 learners</h2>
            </div>
            <div className="bg-white ps-3 py-2 ">
              <h2 className="text-[#5624D0]  ">Drawing</h2>
              <h2 className="text-[#6A6F73]">2,410,849 learners</h2>
            </div>


          </div>
        </div>
        <div className="grid justify-center mt-8">
          <Link to="/addCourse"><button className="text-center border px-3 py-2 border-zinc-950 hover:bg-black hover:text-white">Explore More</button></Link>
        </div>
      </div>
    </>
  )

}
export default FeaturedTopicByCategory;