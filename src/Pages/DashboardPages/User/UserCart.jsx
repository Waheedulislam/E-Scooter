import { FaTrashAlt } from "react-icons/fa";
import useCart from "../../../Components/Hooks/useCart";
import useAxiosSecure from "../../../Components/Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UserCart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)
    const axiosSecure = useAxiosSecure();

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be this item !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                axiosSecure.delete(`/carts/${id}`)
                    .then((res) => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="flex justify-evenly lg:gap-56 md:gap-20 gap-10 mb-8">
                <h1 className="text-4xl"><span className="font-bold">Items:</span> {cart.length}</h1>
                <h1 className="text-4xl"><span className="font-bold">Total Price:</span> {totalPrice}</h1>
                <button className="btn btn-secondary">Pay Now</button>
            </div>
            <div className="overflow-x-auto ">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((item, index) =>
                                <tr key={item._id}>
                                    <th>
                                        {
                                            index + 1
                                        }
                                    </th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="ring-teal-700 ring-offset-base-100 w-12 rounded-lg ring ring-offset-2">
                                                    <img
                                                        src={item.image}
                                                        alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td >
                                        <div className="font-semibold">
                                            {item.name}
                                        </div>

                                    </td>
                                    <td>
                                        <div className="font-bold">
                                            ${item.price}
                                        </div>
                                    </td>
                                    <th>
                                        <button onClick={() => handleDelete(item._id)} className="btn btn-error text-white btn-lg ">
                                            <FaTrashAlt></FaTrashAlt>
                                        </button>
                                    </th>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserCart;