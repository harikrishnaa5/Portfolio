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
        <div className="hidden sm:flex py-6 px-14 flex-row justify-center md:justify-end mb-6 md:mb-16">
            <ul className="flex px-6 gap-12 border border-gray-200 shadow-lg rounded-3xl p-3">
                {navMenu?.map((menu) => {
                    const isActive =
                        !open &&
                        (location.pathname === `/${menu.key}` || (location.pathname === "/" && menu.key === "home"));
                    return (
                        <li
                            className={`cursor-pointer hover:text-amber-500 transition-colors duration-200 ${
                                isActive ? " text-amber-500" : ""
                            }`}
                            key={menu.id}
                        >
                            <Link to={`/${menu.key}`}>{menu.item}</Link>
                        </li>
                    );
                })}
                <li
                    className={`cursor-pointer hover:text-amber-500 transition-colors duration-300 ${
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
