import { TABS } from "@/constraints/routers";
import { buttonVariants } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";


export const Menu = ({}) => {
  const { pathname } = useLocation();
  
  return (
    <div className="">
      <div className="mt-10 flex flex-col">
        {
          TABS.map(menu => (
            <Link
              key={menu.pageId}
              to={menu.pathName}
              unstable_viewTransition
              className={cn(
                buttonVariants({variant:"primary"}),
                pathname === menu.pathName && "bg-[#163080] text-white", 
                "mt-1 justify-start space-x-3 rounded-sm h-12"
              )}
            >
              <div className="w-6 h-6"> {menu.icon}</div>
              <div className="">{menu.name}</div>
            </Link>
          ))
        }
      </div>
    </div>
  )
};
