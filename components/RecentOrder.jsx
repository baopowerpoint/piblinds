import Image from "next/image";

export const RecentOrder = () => {
  return (
    <>
      <h5 className="mb-2 mt-5 text-lg font-semibold">Đơn đặt hàng gần đây</h5>
      <div className="flex gap-5 overflow-x-scroll py-10">
        <div className=" flex w-fit shrink-0 items-center gap-2 bg-background-secondary p-5">
          <Image
            width={10}
            height={10}
            className="h-32 w-32 rounded-5xl "
            src="https://images.unsplash.com/photo-1523362289600-a70b4a0e09aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          />
          <div>
            <p className="text-md font-semibold">Rèm cửa 02</p>
            <p className="text-sm font-semibold text-text-secondary">
              399.000 VNĐ
            </p>
            <button className="text-[var(--blue-30)]">Đặt hàng lại</button>
          </div>
        </div>
        <div className="flex w-fit shrink-0 items-center gap-2 bg-background-secondary p-5">
          <Image
            width={10}
            height={10}
            className="h-32 w-32 rounded-5xl"
            src="https://images.unsplash.com/photo-1523362289600-a70b4a0e09aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
          />
          <div>
            <p className="text-md font-semibold">Rèm cửa 02</p>
            <p className="text-sm font-semibold text-text-secondary">
              399.000 VNĐ
            </p>
            <button className="text-[var(--blue-30)]">Đặt hàng lại</button>
          </div>
        </div>
      </div>
    </>
  );
};
