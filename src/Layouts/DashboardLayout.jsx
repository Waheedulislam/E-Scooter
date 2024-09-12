import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import navLogo from '../../src/assets/nav-logo.png';
import { FaHome, FaWindowRestore } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { MdContactMail, MdFormatListBulletedAdd, MdMenuOpen, MdOutlineAddCard } from "react-icons/md";
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import auth from "../Components/Firebase/Firebase.config";
import { toast } from "react-toastify";

const DashboardLayout = () => {
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    const navigate = useNavigate();

    const handleSignOut = () => {
        const successSignOut = signOut();
        if (successSignOut) {
            alert("Do you want to logout...?");
            toast.success("Successfully Logout");
            // localStorage.removeItem('access-token');
        }
    };
    useEffect(() => {
        if (!user) {
            navigate('/')
        }
    }, [user, navigate])
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                    Open drawer
                </label>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">

                    {/* title  */}
                    <div className="flex mb-8 justify-center pr-8">
                        <img className="w-12" src={navLogo} alt="" />{" "}
                        <h1 className="font-bold  pl-2 text-4xl">E-Scooter</h1>
                    </div>
                    {/* Sidebar content here */}
                    <li >
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                                    : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                            } to={"/dashboard/user-Home"}
                        >
                            <FaHome /> User Home
                        </NavLink>
                    </li>
                    <li className="mt-2">
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                                    : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                            } to={"/dashboard/user-reservation"}
                        >
                            <FaWindowRestore /> Reservation
                        </NavLink>
                    </li>
                    <li className="mt-2">
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                                    : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                            } to={"/dashboard/user-cart"}
                        >
                            <FaCartShopping /> My Cart
                        </NavLink>
                    </li>
                    <li className="mt-2">
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                                    : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                            } to={"/dashboard/user-review"}
                        >
                            <MdOutlineAddCard /> Add a Review
                        </NavLink>
                    </li>
                    <li className="mt-2">
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                                    : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                            } to={"/dashboard/user-booking"}
                        >
                            <MdFormatListBulletedAdd /> My Booking
                        </NavLink>
                    </li>

                    <div className="divider"></div>

                    {/* shared NavLink */}

                    <li className="mt-2">
                        <NavLink
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-teal-700  bg-base-100 text-lg border-none  hover:border-none hover:bg-white border-2  px-3  rounded-lg  font-medium'
                                    : '  bg-white border-white border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                            } to={"/dashboard"}
                        >
                            <FaHome />Home
                        </NavLink>
                    </li>
                    <li className="mt-2"><NavLink
                        className={({ isActive }) =>
                            isActive
                                ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                                : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                        } to={"/dashboard/menu"}
                    >
                        <MdMenuOpen />Menu
                    </NavLink>
                    </li>
                    <li className="mt-2"><NavLink
                        className={({ isActive }) =>
                            isActive
                                ? 'text-teal-700 bg-white  border-teal-600  text-lg    hover:bg-white border-2  px-3  rounded-lg  font-medium'
                                : '  bg-white border-teal-600 border-2  border-none hover:bg-white  hover:text-teal-700 px-3  rounded-lg text-lg font-medium'
                        } to={"/dashboard/contact"}
                    >
                        <MdContactMail />Contact
                    </NavLink>
                    </li>
                    {/* Logout */}
                    <div className="flex  justify-center gap-20 mt-20">
                        <Link className="btn rounded-lg bg-[#42454A] text-white border-white border-2 hover:text-[#42454A] hover:border-[#42454A] hover:bg-white text-lg " to={'/'}>Home</Link>

                        <button
                            className="btn ml-4 rounded-lg bg-error text-white border-white border-2 hover:text-error hover:border-error hover:bg-white text-lg "
                            onClick={handleSignOut}
                        >
                            Log Out
                        </button>
                    </div>

                </ul>
            </div>


        </div >

    );
};

export default DashboardLayout;