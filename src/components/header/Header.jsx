import { Link } from "react-router-dom";
import { navMenu } from "../../constants";
const Header = ({ setOpen }) => {
    return (
        <div className="hidden md:flex py-6 px-14 flex-row justify-end mb-14">
            <ul className="flex gap-12">
                {navMenu?.map((menu) => (
                    <li className="cursor-pointer" key={menu.id}>
                        <Link to={`/${menu.key}`}>{menu.item}</Link>
                    </li>
                ))}
                <li className="cursor-pointer" onClick={() => setOpen(true)}>
                    Connect me
                </li>
            </ul>
        </div>
    );
};

export default Header;
