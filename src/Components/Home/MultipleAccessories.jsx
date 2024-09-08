import MultipleAccessories1 from '../../assets/Multiple-Accessories-1.png'
import MultipleAccessories2 from '../../assets/Multiple-Accessories-2.png'
import icon from '../../assets/Icon.png'

const MultipleAccessories = () => {
    return (
        <div className='text-all-color'>
            <div className="text-center text-all-color">
                <h1 className='text-5xl font-bold mt-10 mb-6'>Multiple Accessories</h1>
                <p className='text-xl  font-semibold '>There are multiple modes for the scooter for your multiple needs.</p>
            </div>


            <div className="hero mt-20">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={MultipleAccessories1}
                        className="w-[452px]  h-[438px] rounded-lg " />
                    <img
                        src={MultipleAccessories2}
                        className="max-w-sm h-[438px]  rounded-lg " />

                    <div>
                        <div >
                            <h1 className='text-5xl font-bold'>Golf Bag Rock</h1>
                            <ul >
                                <li className='flex my-6 items-center gap-2'><img src={icon} alt="" /><span className='font-semibold text-xl'>Material : Aluminium alloy</span></li>

                                <li className='flex my-6 items-center gap-2'><img src={icon} alt="" /><span className='font-semibold text-xl'>Color : Black</span></li>

                                <li className='flex my-6 items-center gap-2'><img src={icon} alt="" /><span className='font-semibold text-xl'>Capacity : 45lbs</span></li>

                                <li className='flex my-6 items-center gap-2'><img src={icon} alt="" /><span className='font-semibold text-xl'>Ease : Steady & adjustable</span></li>



                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MultipleAccessories;