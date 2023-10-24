// import { ProfileBody } from "./profile-body";
import { ProfileHeader } from "./profile-header";

export default function ProfileWrapper(){
  return (
    <div className="bg-white divide-y-2 divide-gray-100 px-8 py-8 border-b-2 border-gray-200 sticky top-0">
      <ProfileHeader />
      {/* <ProfileBody /> */}
    </div>
  )
}