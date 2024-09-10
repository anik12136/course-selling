
import { useEffect, useState } from 'react';
import PopularCourseComponent from '../../Pages/Home/PopularCourses/PopularCourseComponent/PopularCourseComponent';
import Loading from '../Loading/Loading';

const AllCourses = () => {


    // data fetch..............
    const [fetchData, setFetchData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/formCourses'); // Specify the path to your JSON file in the public folder
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setFetchData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    // console.log(fetchData);

    return (

        fetchData ?
            <div className='mx-40 h-full'>
                <h2 className="text-center text-3xl my-6 border-b-4 rounded-b-lg w-60  mx-auto  ">All Courses</h2>

                <>
                    <div className='mt-10 grid grid-cols-3 gap-y-10'>
                        {/* mapping---------- */}
                        {fetchData?.map(item => (

                            <PopularCourseComponent key={item._id} course={item}>
                            </PopularCourseComponent>

                        ))}

                    </div>
                </>
            </div>
            :
            <div>
                <Loading></Loading>
            </div>

    );
};

export default AllCourses;