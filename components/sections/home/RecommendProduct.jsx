import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";
export const RecommendProduct = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-md font-semibold">Gợi ý</p>
        <Link className="text-sm underline" href="product">
          Xem tất cả
        </Link>
      </div>
      <Product />
    </>
  );
};
export const Product = () => {
  return (
    <>
      {" "}
      <div className="mt-10 grid grid-cols-6 gap-1">
        <img
          src="https://images.unsplash.com/photo-1625476903534-ae531b76e8c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80"
          className=" col-span-4 basis-0 object-cover"
          alt=""
        />
        <div className="col-span-2 flex flex-col gap-1">
          <img
            className="aspect-video w-full basis-1/2 overflow-hidden object-cover"
            src="https://images.unsplash.com/photo-1424847262089-18a6858bd7e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
          <img
            className="aspect-video w-full basis-1/2 overflow-hidden object-cover"
            src="https://images.unsplash.com/photo-1577955107081-92c3197fb6cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt=""
          />
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between">
        <div>
          <p className=" text-lg font-semibold">Rèm cửa 054</p>
          <p className="mt-1 text-lg font-semibold text-text-secondary">
            2.490.000 VNĐ
          </p>
        </div>
        <button className="bg-background-secondary p-2">
          <AiOutlineHeart className="text-2xl" />
        </button>
      </div>
    </>
  );
};
