import { BsArrowRightSquareFill } from 'react-icons/bs';
import playButton from '../../assets/play button.png'
import heroImage from '../../assets/hero.png'
const Hero = () => {
    return (


        <div className=" lg:ml-3 pt-20 text-all-color">
            <div className="hero-content flex-col lg:flex-row-reverse ">
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


    );
};

export default Hero;