"use client";
import { sideBarIcon } from "@/constants/SideBarIcon";
import { useIndex } from "@/utils/store";
import Link from "next/link";

export const SideBar = () => {
  const setCurrentPage = useIndex((state) => state.setCurrentPage);
  const currentPage = useIndex((state) => state.currentPage);
  return (
    <aside className="fixed bottom-0 z-[100] w-full border-t border-t-background-secondary bg-background-primary p-5">
      <div className="flex  justify-between gap-5">
        {sideBarIcon.map((item, index) => (
          <Link
            onClick={() => {
              setCurrentPage(index);
            }}
            key={item.id}
            href={`/${item.path}`}
          >
            {item.id === currentPage ? (
              <item.icon.showing className="text-2xl" />
            ) : (
              <item.icon.notShown className="text-2xl" />
            )}
          </Link>
        ))}
      </div>
    </aside>
  );
};
