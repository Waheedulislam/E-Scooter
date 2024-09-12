import { Outlet } from "react-router-dom";
import navLogo from '../../src/assets/nav-logo.png';

const DashboardLayout = () => {
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
                    <li><a>Sidebar Item 1</a></li>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;