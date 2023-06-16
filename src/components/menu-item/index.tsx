import { Link, NavLink } from "react-router-dom";
import { MenuItemProps } from "./model"

function MenuItem({ children, path }: MenuItemProps) {
    const classes: string[] = [
        'hover:bg-[#304242]',
        'transition-all',
        'ease-in-out',
        'border-b',
        'border-t',
        'mx-auto',
        'text-left',
        'pl-3',
        'w-full',
        'h-12',
        ];


    return (
        <NavLink
            to={path}
            className={({ isActive }) => {
                let tempCls = classes.join(' ');
                tempCls = `${tempCls} ${isActive ?
                "border-t-[#304242] border-b-[#304242]" :
                "border-transparent"}`
                return tempCls
            }}
        >
            <span className="flex items-center h-full gap-x-2"> 
                { children }
            </span>
        </NavLink>
    )
}

export default MenuItem;
  