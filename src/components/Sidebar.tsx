import { Menu } from "./Menu";
import { SettingsMenu } from "./SettingsMenu";


export default function SideBar() {
  return (
    <div className="bg-[#1c3a9f] h-full w-full overflow-hidden px-4 py-10">
      <img
        src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg"
        alt="logo"
        className="w-12 h-12"
      />
      <div>
        <Menu  />
        <SettingsMenu />
      </div>

    </div>
  );
}
