import { BsArrowRightSquareFill } from 'react-icons/bs';
import bannerImage from '../../assets/banner-bike.png'
import bannerBg from '../../assets/bg.png'
import playButton from '../../assets/play button.png'
import OneImage from '../../assets/01.png'
import heroImage from '../../assets/hero.png'
const Hero = () => {
    return (

        <div >
            <div className=" lg:ml-3 text-all-color">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    {/* <div className='flex lg:w-1/2 lg:ml-96'>

                        <div className='-mr-96 mt-16 lg:ml-20 ' >
                            <img src={bannerBg} className='lg:w-[510px] lg:h-[558px]' alt="" />

                        </div>
                        <div className="lg:-ml-96 -ml-96 -mr-10">
                            <img
                                src={bannerImage}
                                className='w-[855.51px] h-[646px]'

                            />
                        </div>
                    </div> */}

                    <div>
                        <img src={heroImage} className='w-full lg:-mb-40 lg:ml-36 md:ml-24 ml-4 ' alt="" />

                    </div>




                    <div className='md:-ml-52 lg:ml-10'>
                        <h1 className="text-7xl ">LETS RIDE </h1>
                        <span className='font-bold text-7xl '>THE FUTURE.</span>
                        <div className="flex w-[335px] flex-col mt-10 mb-8">

                            <div className="divider "></div>

                        </div>
                        <p className="mt-4 mb-8 text-xl font-bold">
                            Simple and sleek design with users <br /> in mind.
                        </p>
                        <div className='flex items-center gap-5'>
                            <a href=""><BsArrowRightSquareFill className='w-12 h-12' /></a>
                            <a href=""><span className='text-xl font-semibold'> Buy now</span></a>
                            <h1 className='ml-20 font-semibold'>Watch our <br />
                                video how <br />
                                it works
                            </h1>
                            <img src={playButton} alt="" />
                        </div>
                    </div>
                </div>

            </div>
            {/* <div className='flex justify-end'>
                <img src={OneImage} alt="" />
            </div> */}
        </div>

    );
};

export default Hero;