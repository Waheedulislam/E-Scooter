/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AllScooter = ({ scooter }) => {
    console.log(scooter)

    return (
        <div
            className="card grid w-96  bg-base-100 shadow-2xl">
            <figure><img className="w-80 h-60 mt-3 " src={scooter?.image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl hover:text-teal-600 font-bold justify-center text-center">
                    {scooter?.name}

                </h2>
                {
                    scooter?.description?.length > 100 ?
                        <p>{scooter?.description.slice(0, 100)}
                            <Link
                                to={`/serviceDescription/${scooter?._id}`}
                                className="text-teal-600 my-4 font-semibold"> Read more....</Link></p>
                        :
                        <p>{scooter?.description}</p>
                }
                <h2 >
                    <span className="font-bold text-xl"> Price :</span>
                    <span className="font-bold ml-2 text-teal-600">USD {scooter?.price}/pcs</span>

                </h2>
                <h2 >
                    <span className="font-bold text-xl">Category :</span>  <span className="font-semibold">{scooter?.category}</span>

                </h2>

                <h2 className="flex justify-items-center">
                    <span className="font-bold flex ">Rating :<FaStar className="text-amber-500 my-1 mx-1" /></span>   {scooter?.rating}

                </h2>
                <div className=" mt-2">
                    <button type="submit" className="btn w-full rounded-lg bg-[#42454A] text-white border-white border-2 hover:text-[#42454A] hover:border-[#42454A] hover:bg-white text-lg ">Add to Cart
                        <FaCartShopping className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllScooter;