
const NewsLetter = () => {
    return (
        <div className="my-36">
            <form className="text-center text-all-color">
                <h6 className="text-5xl font-bold">Subscribe To Newsletter</h6>
                <p className="text-center font-semibold mt-4 mb-10 text-all-color">Subscribe to our newsletter to get amazing offers in future.</p>
                <fieldset className="form-control w-80 mx-auto">
                    <div className="join flex justify-center">
                        <input
                            type="text"
                            placeholder="Enter your email"
                            className="input input-bordered mr-3 bg-base-200" />
                        <button className="btn  pl-2 bg-[#42454A] w-32  text-white">Get Start</button>
                    </div>
                </fieldset>
            </form>

        </div>
    );
};

export default NewsLetter;