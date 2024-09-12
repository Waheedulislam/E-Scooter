/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../Components/Firebase/Firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Components/Hooks/useAxiosSecure";
import useCart from "../../Components/Hooks/useCart";

const AllScooter = ({ scooter }) => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();
    const { name, image, price, category, rating, _id, description } = scooter;
    const [, refetch] = useCart();

    const handleAddToCart = () => {
        if (user && user?.email) {
            // send to the database
            const cartItem = {
                scooterId: _id,
                email: user?.email,
                name: name,
                image: image,
                price: price,
                category: category,
                rating: rating,
            }
            axiosSecure.post('/carts', cartItem)
                .then((res) => {
                    console.log(res.data)
                    if (res?.data?.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} added to your cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // refetch to the cart
                        refetch();
                    }
                })
        } else {
            Swal.fire({
                title: "You are not Logged In?",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login !"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div
            className="card grid w-96  bg-base-100 shadow-2xl">
            <figure><img className="w-80 h-60 mt-3 " src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-3xl hover:text-teal-600 font-bold justify-center text-center">
                    {name}

                </h2>
                {
                    description?.length > 100 ?
                        <p>{description.slice(0, 100)}
                            <Link
                                to={`/serviceDescription/${_id}`}
                                className="text-teal-600 my-4 font-semibold"> Read more....</Link></p>
                        :
                        <p>{description}</p>
                }
                <h2 >
                    <span className="font-bold text-xl"> Price :</span>
                    <span className="font-bold ml-2 text-teal-600">USD {price}/pcs</span>

                </h2>
                <h2 >
                    <span className="font-bold text-xl">Category :</span>  <span className="font-semibold">{category}</span>

                </h2>

                <h2 className="flex justify-items-center">
                    <span className="font-bold flex ">Rating :<FaStar className="text-amber-500 my-1 mx-1" /></span>   {rating}

                </h2>
                <div className=" mt-2">
                    <button onClick={handleAddToCart} type="submit" className="btn w-full rounded-lg bg-[#42454A] text-white border-white border-2 hover:text-[#42454A] hover:border-[#42454A] hover:bg-white text-lg ">Add to Cart
                        <FaCartShopping className="ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AllScooter;