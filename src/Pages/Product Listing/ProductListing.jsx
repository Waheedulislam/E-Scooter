import { FaSearch } from "react-icons/fa";
import useCart from "../../Components/Hooks/useCart";
import AllScooter from "./AllScooterListing";
import { useState } from "react";

const ProductListing = () => {
    const [scooters] = useCart()
    const [searchTerm, setSearchTerm] = useState('');
    console.log(scooters)
    // Search Services
    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };
    return (
        <div className="text-all-color mt-8">
            <div className="text-center  mb-10">
                <h1 className="text-5xl font-bold ">Our <span className='text-teal-600'>Best Quality </span>
                    <span>E-Scooters</span> </h1>
                <h1 className="text-5xl font-bold">You Can Get</h1>
            </div>
            {/* search  */}
            <div >
                <form className="flex gap-2 justify-center">
                    <div className="form-control">
                        <input
                            type="text"
                            required
                            onChange={handleSearch}
                            placeholder="Search by services Title"
                            className="input input-bordered w-96 " />
                    </div>
                    <div >
                        <button ><FaSearch className=" w-10 h-10 my-1 right-4" /></button>
                    </div>
                </form>
            </div>
            <div className="grid my-8  grid-cols-1 md:grid-cols-2 gap-10 mx-16 lg:grid-cols-3  justify-items-center mb-28">
                {
                    scooters?.filter((scooter) => {
                        return searchTerm.toLocaleLowerCase() === '' ? scooter
                            :
                            scooter?.name.toLocaleLowerCase().includes(searchTerm)
                    }).map((scooter) =>
                    (
                        <AllScooter key={scooter.id} scooter={scooter} />
                    ))
                }
            </div>
        </div>
    );
};

export default ProductListing;