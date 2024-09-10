import scooter from '../../assets/scooter.png'
import parts from '../../assets/parts.png'
import build from '../../assets/build-quality.png'
const Gallery = () => {
    return (
        <div className='text-all-color'>
            <div className="text-center text-all-color">
                <h1 className='text-5xl font-bold mt-10 mb-6'>Gallery</h1>
                <p className='text-xl  font-semibold '>View gallery of our products and make yourself satisfied with our creation.</p>
            </div>

            <div className="hero ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='mt-20'>
                        <img src={build} alt="" className='w-[633px] h-[485px] ' />
                        <br />
                        <img src={parts} alt="" className='w-[633px] h-[485px] ' />
                    </div>

                    <div>
                        {/* image  */}
                        <img src={scooter} alt="" className='w-[633px] h-[485px] static' />

                        <div className='lg:-mb-60 mr-12 mt-12'>
                            <div className='flex my-2 justify-center hover:shadow-lg'>
                                <h1 className='text-3xl rounded-lg lg:w-[570px] lg:h-[94px] font-bold   text-center border-[2px] pt-6'>Battery Images</h1>
                            </div>
                            <div className='flex my-4 hover:shadow-lg justify-center '>
                                <h1 className='text-3xl  rounded-lg lg:w-[570px] lg:h-[94px] font-bold   text-center border-[2px] pt-6'>Spare Parts Images</h1>
                            </div>
                            <div className='flex my-4 hover:shadow-lg justify-center '>
                                <h1 className='text-3xl rounded-lg lg:w-[570px] lg:h-[94px] font-bold   text-center border-[2px] pt-6'>Charging Cable Images</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Gallery;