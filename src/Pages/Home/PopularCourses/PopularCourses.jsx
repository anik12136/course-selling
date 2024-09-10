// import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import PopularCourseComponent from './PopularCourseComponent/PopularCourseComponent';
import Loading from '../../../Components/Loading/Loading';

const PopularCourses = () => {


    // data fetch..............
    const [fetchData, setFetchData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/demoCourses'); 
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
                <h2 className="text-center text-3xl my-6 border-b-4 rounded-b-lg w-60  mx-auto  ">Popular Courses</h2>

                <>
                    <div className='mt-10'>
                        <Swiper
                            slidesPerView={3}
                            centeredSlides={false}
                            slidesPerGroupSkip={10}
                            grabCursor={true}
                            keyboard={{
                                enabled: true,
                            }}
                            breakpoints={{
                                10: {
                                    slidesPerView: 3,
                                    slidesPerGroup: 3,
                                },
                            }}
                            scrollbar={true}
                            navigation={true}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                            className="mySwiper"
                        >

                            {/* mapping---------- */}

                            {fetchData?.map(item => (
                                <SwiperSlide
                                    key={item._id}
                                    item={item}
                                >
                                    <PopularCourseComponent key={item._id} course={item}>

                                    </PopularCourseComponent>

                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </>
            </div>
            :
            <div>
                <Loading></Loading>
            </div>

    );
};

export default PopularCourses;