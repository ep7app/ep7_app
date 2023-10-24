import { SETTINGS_TABS, TABS } from "@/constraints/routers";
import { buttonVariants } from "./ui/button";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";


export const SettingsMenu = ({}) => {
  const { pathname } = useLocation();
  
  return (
    <div className="mt-10">
      <h1 className="pl-4 text-sm leading-6 text-zinc-300">Settings</h1>
      <div className="mt-2 flex flex-col">
        {
          SETTINGS_TABS.map(menu => (
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
