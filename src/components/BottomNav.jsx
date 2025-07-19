import { Link, useLocation } from "react-router-dom";
import { navMenu } from "../constants";
import { useEffect } from "react";

const BottomNav = ({ open,contactSelected, setContactSelected, handleContactClick }) => {
    const location = useLocation();
    useEffect(() => {
        if (!open) {
            setContactSelected(false);
        }
    }, [open]);
    return (
        <div className="!fixed sm:hidden !bottom-0 left-0 z-50 w-full h-12 py-2 px-8 bg-white border-t border-gray-200 transform-none">
            <div className="flex h-full max-w-lg justify-around mx-auto font-medium text-md ">
                {navMenu?.map((menu) => {
                    const isActive =
                        !open &&
                        (location.pathname === `/${menu.key}` || (location.pathname === "/" && menu.key === "home"));
                    return (
                        <Link key={menu.id} className="flex cursor-pointer justify-center" to={`/${menu.key}`}>
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center  ${
                                    isActive ? "bg-gray-700 text-white shadow-lg" : " text-gray-700"
                                }`}
                            >
                                <i className={`${menu.icon}`}></i>
                            </div>
                        </Link>
                    );
                })}
                <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        contactSelected ? "bg-gray-700 text-white shadow-lg" : " text-gray-700"
                    }`}
                >
                    <i
                        className="fa-solid fa-address-card flex cursor-pointer justify-center"
                        onClick={handleContactClick}
                    ></i>
                </div>
            </div>
        </div>
    );
};

export default BottomNav;
