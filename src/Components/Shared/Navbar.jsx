import { Link } from 'react-router-dom';
import navLogo from '../../assets/nav-logo.png';

const Navbar = () => {
    const navOption = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/ProductListing'}>Product Listing</Link></li>
        <li><Link to={'/ProductDetails'}>Product Details</Link></li>
        <li><a>GALLERY</a></li>
        <li><a>CONTACT</a></li>
    </>
    return (
        <div className="navbar bg-base-200 px-12">
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
                <img src={navLogo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOption}
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <Link to={'/login'}><a className="btn">LOG IN</a></Link>
                <Link to={'/register'}> <a className="btn bg-[#42454A] text-white btn-md">SIGN IN</a></Link>
            </div>
        </div>
    );
};

export default Navbar;