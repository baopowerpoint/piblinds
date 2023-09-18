import Image from "next/image";
import { HiLocationMarker } from "react-icons/hi";

export const UserProfile = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-4xl bg-background-secondary p-3">
      <Image
        width={40}
        height={40}
        src="https://images.unsplash.com/photo-1541823709867-1b206113eafd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
        className="h-48 w-48 rounded-full object-cover"
        alt="avatar"
      />
      <p className="text-md font-semibold">Tran bao</p>
      <div className="flex items-center gap-1">
        <HiLocationMarker className="text-md text-text-secondary" />
        <p className="text-md ">Ha noi, Viet Nam</p>
      </div>
    </div>
  );
};
