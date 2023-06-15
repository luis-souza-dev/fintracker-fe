import { Link, NavLink } from "react-router-dom";
import { MenuItemProps } from "./model"

function MenuItem({ children, path }: MenuItemProps) {
    const classes: string[] = [
        'hover:border-t-[#084969]',
        'hover:border-b-[#084969]',
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
                        "border-t-[#084969] border-b-[#084969]" :
                        "border-transparent"}`
                        return tempCls
                    }}
                  >
                    { children }

        </NavLink>
    )
}

export default MenuItem;
  