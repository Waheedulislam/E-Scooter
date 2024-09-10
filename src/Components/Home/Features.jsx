
const Features = () => {
    return (
        <div className="text-all-color grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 justify-items-center gap-10 mx-10 mt-36 mb-28 my-10 ">
            <div className="card bg-base-100 w-[174.47px] h-[137px] shadow-xl border">
                <div className="card-body items-center">
                    <h1>
                        <span className="text-5xl font-bold">105</span>
                        <span className="text-xl font-bold ml-3 mr-2">lbs</span>
                    </h1>
                    <p className="font-semibold">Net Weight</p>
                </div>
            </div>
            <div className="card bg-base-100 w-[174.47px] h-[137px] shadow-xl border">
                <div className="card-body items-center">
                    <h1>
                        <span className="text-5xl font-bold">26</span>
                        <span className="text-xl font-bold ml-3 mr-2">mph</span>
                    </h1>
                    <p className="font-semibold">Top Speed</p>
                </div>
            </div>
            <div className="card bg-base-100 w-[174.47px] h-[137px] shadow-xl border">
                <div className="card-body items-center">
                    <h1>
                        <span className="text-5xl font-bold">38</span>
                        <span className="text-xl font-bold ml-3 mr-2">miles</span>
                    </h1>
                    <p className="font-semibold">Max Range</p>
                </div>
            </div>
            <div className="card bg-base-100 w-[174.47px] h-[137px] shadow-xl border">
                <div className="card-body items-center">
                    <h1>
                        <span className="text-5xl font-bold">89</span>
                        <span className="text-xl font-bold ml-3 mr-2">nm</span>
                    </h1>
                    <p className="font-semibold">Max Torques</p>
                </div>
            </div>
            <div className="card bg-base-100 w-48 h-[137px] shadow-xl border">
                <div className="card-body items-center">
                    <h1>
                        <span className="text-5xl font-bold">22%</span>
                        <span className="text-xl font-bold ml-3 mr-2">slope</span>
                    </h1>
                    <p className="font-semibold">Hill Climbing</p>
                </div>
            </div>
            <div className="card bg-base-100 w-[174.47px] h-[137px] shadow-xl border">
                <div className="card-body items-center">
                    <h1>
                        <span className="text-5xl font-bold">2x</span>
                        <span className="text-xl font-bold ml-3 mr-2">lbs</span>
                    </h1>
                    <p className="font-semibold">Hydralic Disc</p>
                </div>
            </div>
        </div>
    );
};

export default Features;