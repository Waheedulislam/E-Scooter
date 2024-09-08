import { BsArrowRightSquareFill } from 'react-icons/bs';
import bannerImage from '../../assets/banner-bike.png'
import bannerBg from '../../assets/bg.png'
import playButton from '../../assets/play button.png'
// import OneImage from '../../assets/01.png'
const Hero = () => {
    return (

        <div className="hero  min-h-screen text-all-color">
            <div className="hero-content flex-col lg:flex-row-reverse ">



                <img
                    style={{ backgroundImage: `url(${bannerBg})` }}
                    src={bannerImage}
                    className=" rounded-lg -mr-20" />



                <div>
                    <h1 className="text-7xl ">LETS RIDE <span className='font-bold'><br />THE FUTURE.</span></h1>
                    <div className="flex w-[335px] flex-col mt-14 mb-8">

                        <div className="divider "></div>

                    </div>
                    <p className="mt-4 mb-8 text-xl font-bold">
                        Simple and sleek design with users in mind.
                    </p>
                    <div className='flex items-center gap-5'>
                        <a href=""><BsArrowRightSquareFill className='w-12 h-12' /></a>
                        <a href=""><span className='text-xl font-semibold'> Buy now</span></a>
                        <h1 className='ml-14 font-semibold'>Watch our <br />
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