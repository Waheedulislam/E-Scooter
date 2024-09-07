import imageBike from '../../assets/imagebike.png'
import icon from '../../assets/Icon.png'
const ProductInformation = () => {
    return (
        <div className='text-all-color'>
            <div className="text-center text-all-color">
                <h1 className='text-5xl font-bold mt-10 mb-6'>Product Information</h1>
                <p className='text-xl  font-semibold '>Our Scooter has following unique design and technology features:</p>
            </div>
            <div className="hero  ">

                <div className="hero-content flex-col lg:flex-row">

                    <img
                        src={imageBike}
                        className="max-w-full rounded-lg mr-6"
                    />

                    <div >
                        <ul >
                            <li className='flex my-6 items-center gap-2'><img src={icon} alt="" /><span className='font-semibold text-xl'>Lightweight aircraft grade aluminium frame</span></li>

                            <li className='flex my-6 items-center gap-2'><img src={icon} alt="" /><span className='font-semibold text-xl'>Car grade lithium battery</span></li>

                            <li className='flex my-6 items-center gap-2'><img src={icon} alt="" /><span className='font-semibold text-xl'>Self-balanced</span></li>

                            <li className='flex my-6 items-center gap-2'><img src={icon} alt="" /><span className='font-semibold text-xl'>Plug n plays</span></li>

                            <li className='flex my-6 items-center gap-2'><img src={icon} alt="" /><span className='font-semibold text-xl'>Quick release adapter</span></li>

                            <li className='flex my-6 items-center gap-2'><img src={icon} alt="" /><span className='font-semibold text-xl'>RFID key card</span></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductInformation;