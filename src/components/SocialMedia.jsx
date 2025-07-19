import Twitter from "../assets/twitter-icon.png";
import LinkedIn from "../assets/linkedin-icon.png";
import GitHub from "../assets/github-icon.png";
import { Link } from "react-router-dom";
import { github, linkedin, twitter } from "../constants";

const SocialMedia = () => {
    return (
        <>
            <Link to={linkedin} target="_blank">
                <img className="w-5 h-5 sm:w-7 sm:h-7 cursor-pointer active:scale-95" src={LinkedIn} alt="linkedin" />
            </Link>
            <Link to={github} target="_blank">
                <img className="w-5 h-5 sm:w-7 sm:h-7  cursor-pointer active:scale-95" src={GitHub} alt="github" />
            </Link>
            <Link to={twitter} target="_blank">
                <img className="w-5 h-5 sm:w-7 sm:h-7 cursor-pointer active:scale-95" src={Twitter} alt="twitter" />
            </Link>
        </>
    );
};

export default SocialMedia;
