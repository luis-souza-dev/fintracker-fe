import { HiOutlineCurrencyDollar, HiOutlineTag, HiOutlineUserGroup } from "react-icons/hi";
import MenuItem from "../../components/menu-item";
import logoUrl from '../../assets/logo-white.svg';
import { Link } from "react-router-dom";

function Sidebar() {

    return (
        <aside className="row-span-full col-span-1 bg-[#052636] border-r border-r-[#304242] text-white flex flex-col">
            <Link to="/" className="w-10/12 h-[9.9%] mx-auto flex items-center">
                <img src={logoUrl} style={{
                    fill: "white"
                }}/>
            </Link>
            <MenuItem path="/expenses" isActive={false}>  <HiOutlineCurrencyDollar /> expenses </MenuItem>
            <MenuItem path="/expenses-categories" isActive={false}> <HiOutlineTag /> expenses categories </MenuItem>
            <MenuItem path="/residents" isActive={false}> <HiOutlineUserGroup/> residents </MenuItem>
        </aside>
    )
}

export default Sidebar
