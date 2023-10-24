import { BellIcon, MagnifyingGlassIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export const ProfileHeader = () => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-x-4 items-center text-zinc-400">
        <div className="w-6 h-6">
          <MagnifyingGlassIcon />
        </div>
        <h1 className="text-xm ">Search transaction</h1>
      </div>
      <div className=" flex gap-x-2 items-center">
        <div className="w-6 h-6">
          <BellIcon />
        </div>
        <div className="flex gap-x-2 items-center">
        <img
          className=" w-8 h-8 rounded-full mx-auto object-cover"
          src="https://avatars.githubusercontent.com/u/20242457?v=4"
          alt=""
        />
        </div>
        <div className="flex space-x-1 items-center"><h1 className="text-sm">Dalton Harvey</h1> <ChevronDownIcon width={10}/></div>
      </div>
    </div>
  );
};
