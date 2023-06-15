import { HiOutlineCurrencyDollar, HiOutlineTag, HiOutlineUserGroup } from "react-icons/hi";
import MenuItem from "../../components/menu-item";

function Sidebar() {

    return (
        <aside className="row-span-full col-span-1 bg-[#052636] border-r border-r-[#084969] text-white flex flex-col">
            <div className="w-full h-1/6">
                Logo here
            </div>
            <MenuItem path="/expenses" isActive={false}>  <HiOutlineCurrencyDollar /> Expenses </MenuItem>
            <MenuItem path="/expenses-categories" isActive={false}> <HiOutlineTag /> Expenses Categories </MenuItem>
            <MenuItem path="/residents" isActive={false}> <HiOutlineUserGroup/> Residents </MenuItem>
        </aside>
    )
}

export default Sidebar
