import { Link } from "react-router-dom"
import { navMenu } from "../../constants"


const Header = () => {
  return (
    <div className='py-6 px-14 flex flex-row justify-end'>
        <ul className="flex gap-12">
            {navMenu?.map(menu => (
                <li className="cursor-pointer" key={menu.id}>
                  <Link to={`/${menu.key}`}>{menu.item}</Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Header