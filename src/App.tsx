import { Layout } from "./components/layout";
import { Outlet } from 'react-router-dom'

import ProfileWrapper from "@/components/ProfileWrapper";
import SideBar from "@/components/Sidebar";

export default function App() {
  return (
    <div className="flex mx-auto h-screen bg-[#FAFAFA] lg:max-w-full">
      <div className="grid grid-cols-4 w-full">
        <SideBar />
        <div className="col-span-3">
          <ProfileWrapper />
          <Layout>
            <Outlet />
          </Layout>
        </div>
      </div>
    </div>
  );
}
