import { Link } from 'react-router-dom';
import navLogo from '../../assets/nav-logo.png';
import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import auth from '../Firebase/Firebase.config'
import userPhoto from '../../assets/user-profile-icon-free-vector.jpg'
import { toast } from 'react-toastify';
import { FaCartShopping } from 'react-icons/fa6';
import useCart from '../Hooks/useCart';
const Navbar = () => {
    const [user] = useAuthState(auth);
    const [signOut] = useSignOut(auth);
    const [scooters] = useCart()

    const handleSignOut = () => {
        const successSignOut = signOut();
        if (successSignOut) {
            // localStorage.removeItem('access-token');
            alert("Do you want to logout...?");
            toast.success("Successfully Logout");
        }
    };

    const navOption = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/ProductListing'}>Product Listing</Link></li>
        <li><Link to={'/ProductDetails'}>Product Details</Link></li>
        <li>
            <Link to={'/dashboard/user-cart'}>
                <button className='flex items-center'>
                    <FaCartShopping className='w-6 h-6' />
                    <div className="badge badge-secondary ml-2">+{scooters.length}</div>
                </button>
            </Link>
        </li>
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-95 bg-base-200  px-14">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navOption}
                    </ul>
                </div>
                <div className='ml-4'>
                    <Link to={'/'}><img src={navLogo} alt="" /></Link>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOption}
                </ul>
            </div>
            {!user?.email ? (<>
                <div className="navbar-end gap-4">
                    <Link to={'/login'}><a className="btn">LOG IN</a></Link>
                    <Link to={'/register'}> <a className="btn bg-[#42454A] text-white btn-md">SIGN UP</a></Link>
                </div>

            </>
            ) : (
                <>
                    <div className="navbar-end ">

                        <div className="avatar">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={user?.photoURL || `${userPhoto}`} />{" "}
                            </div>
                        </div>

                    </div>

                    <button
                        className="btn ml-4   rounded-full bg-error text-white border-white border-2 hover:text-error hover:border-error hover:bg-white text-lg "
                        onClick={handleSignOut}
                    >
                        Log Out
                    </button>

                </>
            )

            }


        </div>
    );
};

export default Navbar;