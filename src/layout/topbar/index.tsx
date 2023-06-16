import { useEffect, useState } from "react";
import { HiOutlineChartBar, HiOutlineCurrencyDollar, HiOutlineTag, HiOutlineUserGroup } from "react-icons/hi";
import { useLocation } from "react-router-dom";

function Topbar() {
    const location = useLocation();

    const [state, setState] = useState('');

    useEffect(() => {
        const parsedName = location.pathname.replace(/\//,'').replace(/-/, ' ');
        setState(parsedName == '' ? 'Dashboard' : parsedName);
    }, [location]);

    return (
        <header className="w-full h-[10%] bg-[#052636] border-b border-b-[#304242] text-white flex text-3xl">
           <span className="self-center ml-5 flex gap-x-4 items-center"> { getIcon(state) } { state } </span>
        </header>
    )
}

const getIcon = (location: string) : React.JSX.Element => {

    switch (location) {
        case 'expenses':
            return <HiOutlineCurrencyDollar />;
        case 'expenses categories':
            return <HiOutlineTag />
        case 'residents':
                return <HiOutlineUserGroup />
        default:
            return <HiOutlineChartBar/>
    }

}

export default Topbar
