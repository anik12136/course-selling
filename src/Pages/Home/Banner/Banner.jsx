import bannerImage from '../../../../public/images/homepage images/banner_person.png'
const Banner = () => {
    return (
        <div className='flex justify-around items-center bg-[#10612E]'>
            <div>
                <h2 className='text-white font-bold text-5xl'>Start Your Journey </h2>
                <h2 className='text-white font-bold text-5xl'>from today</h2>
                <div className='flex gap-6 text-white text-center mt-10'>
                    <div className='bg-[#003A55] px-7 py-4 text-sm rounded-md'>
                        <p className='text-[#00FF7B]'>25k+</p>
                        <p>CLASSES</p>
                    </div>
                    <div className='bg-[#003A55] px-7 py-4 text-sm rounded-md'>
                        <p className='text-[#00FF7B]'>600k+</p>
                        <p>MEMBERS</p>
                    </div>
                    <div className='bg-[#003A55] px-7 py-4 text-sm rounded-md'>
                        <p className='text-[#00FF7B]'>8k+</p>
                        <p>TEACHERS</p>
                    </div>
                    <div className='bg-[#003A55] px-7 py-4 text-sm rounded-md'>
                        <p className='text-[#00FF7B]'>4.8 </p>
                        <p>APP STORE RATING</p>
                    </div>
                </div>
            </div>
            <div>
                <img className='h-[480px]' src={bannerImage} alt=""/>
            </div>
        </div>
    );
};

export default Banner;