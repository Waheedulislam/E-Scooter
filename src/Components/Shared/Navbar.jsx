import navLogo from '../../assets/nav-logo.png';

const Navbar = () => {
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
                        <li>
                            <a>PRODUCT</a>
                            <ul className="p-2">
                                <li><a>Product-1</a></li>
                                <li><a>Product-2</a></li>
                            </ul>
                        </li>
                        <li><a>GALLERY</a></li>
                        <li><a>CONTACT</a></li>
                    </ul>
                </div>
                <img src={navLogo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li>
                        <details>
                            <summary>PRODUCT</summary>
                            <ul className="p-4">
                                <li><a>Product-1</a></li>
                                <li><a>Product-2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>GALLERY</a></li>
                    <li><a>CONTACT</a></li>
                </ul>
            </div>
            <div className="navbar-end gap-4">
                <a className="btn">LOGIN</a>
                <a className="btn bg-[#42454A] text-white btn-md">SIGN IN</a>
            </div>
        </div>
    );
};

export default Navbar;