import HighMotor from '../../assets/HighEfficiencyMotor.png'
const HighEfficiencyMotor = () => {
    return (
        <div className='text-all-color'>
            <div className="text-center text-all-color">
                <h1 className='text-5xl font-bold mt-16 mb-6'>High Efficiency Motor</h1>
                <p className='text-xl  font-semibold '>More torque for powerful riding with 22% maximum hill climbing capability.</p>
            </div>
            <img src={HighMotor} alt="" />
        </div>
    );
};

export default HighEfficiencyMotor;