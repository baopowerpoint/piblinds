import Link from "next/link";

export const PopularItem = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="text-md font-semibold">Sản phẩm phổ biến</p>
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
      <div className="mt-10 grid grid-cols-2 gap-2">
        <div>
          <div className="relative aspect-square w-full bg-background-secondary">
            <div className="bg-gradient-1 absolute left-1/2 top-0 z-[1] w-fit -translate-x-1/2 p-2 font-semibold">
              -20%
            </div>
            <img
              src="https://images.unsplash.com/photo-1577963877993-166d46dff880?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
              className="absolute right-0 top-0 z-[0] h-full w-full object-cover"
            />
          </div>

          <p className="text-md font-semibold ">Vivamus Dictum varius</p>
        </div>
        <div>
          <div className="relative aspect-square w-full bg-background-secondary">
            <div className="bg-gradient-1 absolute left-1/2 top-0 z-[1] w-fit -translate-x-1/2 p-2 font-semibold">
              -20%
            </div>
            <img
              src="https://images.unsplash.com/photo-1577963877993-166d46dff880?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
              className="absolute right-0 top-0 z-[0] h-full w-full object-cover"
            />
          </div>

          <p className="text-md font-semibold ">Vivamus Dictum varius</p>
        </div>
        <div>
          <div className="relative aspect-square w-full bg-background-secondary">
            <div className="bg-gradient-1 absolute left-1/2 top-0 z-[1] w-fit -translate-x-1/2 p-2 font-semibold">
              -20%
            </div>
            <img
              src="https://images.unsplash.com/photo-1577963877993-166d46dff880?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
              className="absolute right-0 top-0 z-[0] h-full w-full object-cover"
            />
          </div>

          <p className="text-md font-semibold ">Vivamus Dictum varius</p>
        </div>
        <div>
          <div className="relative aspect-square w-full bg-background-secondary">
            <div className="bg-gradient-1 absolute left-1/2 top-0 z-[1] w-fit -translate-x-1/2 p-2 font-semibold">
              -20%
            </div>
            <img
              src="https://images.unsplash.com/photo-1577963877993-166d46dff880?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt=""
              className="absolute right-0 top-0 z-[0] h-full w-full object-cover"
            />
          </div>

          <p className="text-md font-semibold ">Vivamus Dictum varius</p>
        </div>
      </div>
    </>
  );
};
