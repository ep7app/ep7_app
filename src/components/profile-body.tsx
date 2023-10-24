import { ReactNode } from "react";
import { Button } from "./ui/button";
import { BuildingStorefrontIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

type IProfileInfo  = {
  icon: ReactNode;
  information: string;
  isCheck?: boolean;
} ;
const ProfileInfo = (props: IProfileInfo) => (
  <div className="flex space-x-1 text-zinc-400">
    <div className="w-5">{props.icon}</div>
    <h1 className="text-sm">{props.information}</h1>
  </div>
);

export const ProfileBody = () => {
  return (
    <div className="py-8 flex justify-between">
      <div className=" flex space-x-1 items-center">
        <img
          className="w-14 h-14 rounded-full mx-auto"
          src="https://avatars.githubusercontent.com/u/20242457?v=4"
          alt=""
        />
        <div className="px-4">
          <h1 className="text-xl font-bold">Good Morning, Dalton</h1>
          <div className="flex space-x-4 py-1">
            <ProfileInfo
              icon={<BuildingStorefrontIcon />}
              information="Matola, Patrice Lumumba"
            />

            <ProfileInfo
              icon={<CheckBadgeIcon color="#008751" />}
              information="Conta Verificada"
            />
          </div>
        </div>
      </div>
      <div className=" flex space-x-4">
        <Button className=" w-[120px] text-zinc-950" variant={"outline"}>
          Add money
        </Button>
        <Button className="bg-blue-800 w-[120px] text-white">Send money</Button>
      </div>
    </div>
  );
};
