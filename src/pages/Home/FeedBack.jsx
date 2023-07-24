// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import './Home.css'

import { Navigation } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'


const FeedBack = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://find-college-server.vercel.app/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className='my-52 '>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.reverse().map((review, idx) => <SwiperSlide
                        key={idx}
                    >
                        <div className='mx-12 lg:mx-32'>
                            <h3 className='text-2xl lg:text-3xl uppercase'>{review.university}</h3>
                            <p className='italic my-5'>{review.details}</p>
                            <h3 className='text-xl mt-10'>{review.name}</h3>
                            <div className='flex justify-center'>
                                <Rating
                                    style={{ maxWidth: 130 }}
                                    value={review.rating}
                                    readOnly
                                />
                            </div>
                            {/* <p>{review.rating}</p> */}
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default FeedBack;