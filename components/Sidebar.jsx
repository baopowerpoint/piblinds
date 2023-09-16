import {
  BiSolidHome,
  BiHome,
  BiUser,
  BiSolidUser,
  BiShoppingBag,
  BiHeart,
  BiSolidShoppingBag,
  BiSolidHeart,
} from "react-icons/bi";
export const SideBar = () => {
  return (
    <aside className="fixed bottom-0 w-full border-t border-t-background-secondary bg-background-primary p-5">
      <div className="flex  justify-between gap-5">
        <BiSolidHome className="text-2xl" />
        <BiHeart className="text-2xl" />
        <BiShoppingBag className="text-2xl" />
        <BiUser className="text-2xl" />
      </div>
    </aside>
  );
};
