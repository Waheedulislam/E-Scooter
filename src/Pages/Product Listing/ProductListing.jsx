import { FaSearch } from "react-icons/fa";
import AllScooter from "./AllScooterListing";
import { useState } from "react";
import UseScooters from "../../Components/Hooks/UseScooter";

const ProductListing = () => {
    const [scooters] = UseScooters();
    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');
    const [priceRange, setPriceRange] = useState([0, 1000]); // [minPrice, maxPrice]
    const [rating, setRating] = useState(0);

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <div className="text-all-color pt-20">
            <div className="text-center mb-10">
                <h1 className="text-5xl font-bold">
                    Our <span className='text-teal-600'>Best Quality </span>
                    <span>E-Scooters</span>
                </h1>
                <h1 className="text-5xl font-bold">You Can Get</h1>
            </div>

            {/* search  */}
            <div>
                <form className="flex gap-2 justify-center">
                    <div className="form-control">
                        <input
                            type="text"
                            required
                            onChange={handleSearch}
                            placeholder="Search by services Title"
                            className="input input-bordered w-96"
                        />
                    </div>
                    <div>
                        <button>
                            <FaSearch className="w-10 h-10 my-1 right-4" />
                        </button>
                    </div>
                </form>
            </div>

            {/* Filters */}
            <div className="flex gap-4 justify-center mt-4">
                {/* Category Filter */}
                <select
                    onChange={(e) => setCategory(e.target.value)}
                    className="select select-bordered">
                    <option value="">All Categories</option>
                    <option value="Urban Scooters">Urban Scooters</option>
                    <option value="High-Speed Scooters">High-Speed Scooters</option>
                    <option value="Off-Road Scooters">Off-Road Scooters</option>
                    <option value="Budget Scooters">Budget Scooters</option>
                </select>

                {/* Price Range Filter */}
                <div className="flex flex-col">
                    <label>Price Range: ${priceRange[0]} - ${priceRange[1]}</label>
                    <input
                        type="range"
                        min="400"
                        max="1000"
                        step="50"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([0, e.target.value])}
                        className="range"
                    />
                </div>

                {/* Rating Filter */}
                <select
                    onChange={(e) => setRating(e.target.value)}
                    className="select select-bordered">
                    <option value="0">All Ratings</option>
                    <option value="4">4 Stars & Up</option>
                    <option value="3">3 Stars & Up</option>
                    <option value="2">2 Stars & Up</option>
                    <option value="1">1 Star & Up</option>
                </select>
            </div>

            <div className="grid my-8 grid-cols-1 md:grid-cols-2 gap-10 mx-16 lg:grid-cols-3 justify-items-center mb-28">
                {
                    scooters?.filter((scooter) => {
                        //name
                        const matchesSearchTerm = searchTerm === '' || scooter?.name.toLowerCase().includes(searchTerm.toLowerCase());
                        // category
                        const matchesCategory = category === '' || scooter?.category === category;
                        // price
                        const matchesPriceRange = scooter?.price >= priceRange[0] && scooter?.price <= priceRange[1];
                        // Rating
                        const matchesRating = scooter?.rating >= rating;

                        return matchesSearchTerm && matchesCategory && matchesPriceRange && matchesRating;
                    }).map((scooter) =>
                        <AllScooter key={scooter._id} scooter={scooter}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default ProductListing;
