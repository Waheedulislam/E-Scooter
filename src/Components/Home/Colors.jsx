import image from '../../assets/image.png'
import image1 from '../../assets/1.png'
import image2 from '../../assets/2.png'
import image3 from '../../assets/3.png'
import image4 from '../../assets/4.png'

const Colors = () => {
    return (
        <div className='text-center text-all-color'>
            <div>
                <h1 className='text-5xl font-bold my-10'>Colors</h1>
                <p className='text-xl  font-semibold mb-16'>Checkout our products colors.</p>
            </div>
            <div className='bg-[#F0EFED]'>
                <img src={image} alt="" />
            </div>
            <div className='grid grid-cols-4 justify-items-center -mt-14 md:-mt-24 lg:-mt-40'>
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
            </div>
        </div>
    );
};

export default Colors;