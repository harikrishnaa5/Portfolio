import { Link, useLocation } from "react-router-dom";
import { navMenu } from "../../constants";
import { useEffect } from "react";
const Header = ({ open, contactSelected, handleContactClick, setContactSelected }) => {
    const location = useLocation();
    useEffect(() => {
        if (!open) {
            setContactSelected(false);
        }
    }, [open]);
    return (
        <div className="sm:flex py-0 sm:py-6 px-14 flex-col md:flex-row justify-center md:justify-between items-center mb-6 md:mb-16 gap-0 sm:gap-3 md:gap-0">
            <span className="flex justify-center sm:flex-start text-2xl font-semibold"><h2 className="text-shadow-sm">portfolio</h2><h2 className="text-amber-500 text-shadow-sm">.</h2></span>
            <ul className="hidden sm:flex px-6 gap-12 border border-gray-200 shadow-lg rounded-3xl p-3">
                {navMenu?.map((menu) => {
                    const isActive =
                        !open &&
                        (location.pathname === `/${menu.key}` || (location.pathname === "/" && menu.key === "home"));
                    return (
                        <li
                            className={`cursor-pointer hover:text-amber-500 transition-colors duration-200 active:scale-95 ${
                                isActive ? " text-amber-500" : ""
                            }`}
                            key={menu.id}
                        >
                            <Link to={`/${menu.key}`}>{menu.item}</Link>
                        </li>
                    );
                })}
                <li
                    className={`cursor-pointer hover:text-amber-500 transition-colors duration-300 active:scale-95 ${
                        contactSelected ? " text-amber-500" : ""
                    }`}
                    onClick={handleContactClick}
                >
                    Connect me
                </li>
            </ul>
        </div>
    );
};

export default Header;
