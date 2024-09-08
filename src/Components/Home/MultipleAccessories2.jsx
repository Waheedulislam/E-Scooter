import icon from '../../assets/Icon.png'
import MultipleAccessories3 from '../../assets/Multiple-Accessories-3.png'
import MultipleAccessories4 from '../../assets/Multiple-Accessories-4.png'

const MultipleAccessories2 = () => {
    return (
        <div className='text-all-color mt-16 mb-32'>

            <div className="hero  ">

                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={MultipleAccessories3}
                        className="max-w-full lg:-ml-40 md:ml-95 -ml-18  rounded-lg  mr-6"
                    />

                    <img
                        src={MultipleAccessories4}
                        className="max-w-full rounded-lg mr-6"
                    />

                    <div className='lg:ml-28'>
                        <h1 className='text-5xl font-bold'>Shopping Rack</h1>
                        <ul >
                            <li className='flex my-6 items-center gap-2'><img src={icon} alt="" /><span className='font-semibold text-xl'>Material : Aluminium alloy</span></li>

                            <li className='flex my-6 items-center gap-2'><img src={icon} alt="" /><span className='font-semibold text-xl'>Color : Black</span></li>

                            <li className='flex my-6 items-center gap-2'><img src={icon} alt="" /><span className='font-semibold text-xl'>Capacity : 45lbs</span></li>

                            <li className='flex my-6 items-center gap-2'><img src={icon} alt="" /><span className='font-semibold text-xl'>Ease : Steady & adjustable</span></li>



                        </ul>
                    </div>
                </div>
            </div>
            <div className='flex justify-center '>
                <h1 className='text-3xl rounded-lg w-[570px] h-[94px] font-bold   text-center border-[2px] pt-6'>More Accessories Coming Soon</h1>
            </div>

        </div>
    );
};

export default MultipleAccessories2;