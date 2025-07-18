import Twitter from "../../public/twitter-icon.png";
import LinkedIn from "../../public/linkedin-icon.png";
import GitHub from "../../public/github-icon.png";
import { Link } from "react-router-dom";
import { github, linkedin, twitter } from "../constants";

const SocialMedia = () => {
    return (
        <>
            <Link to={linkedin} target="_blank">
                <img className="w-7 h-7 cursor-pointer" src={LinkedIn} alt="linkedin" />
            </Link>
            <Link to={github} target="_blank">
                <img className="w-7 h-7 cursor-pointer" src={GitHub} alt="github" />
            </Link>
            <Link to={twitter} target="_blank">
                <img className="w-7 h-7 cursor-pointer" src={Twitter} alt="twitter" />
            </Link>
        </>
    );
};

export default SocialMedia;
