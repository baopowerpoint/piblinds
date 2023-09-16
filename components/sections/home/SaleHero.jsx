export const SaleHero = () => {
  return (
    <>
      <div className="aspect-square w-full bg-background-secondary p-5">
        <p className="font-semibold">#XUHUONG2023</p>
        <p className="mt-10 text-2xl font-bold text-text-secondary">
          Khám phá những sản phẩm tuyệt vời tại{" "}
          <span className="text-text-primary">PiBlinds</span>
        </p>
        <p className="mt-10 text-md">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
          blanditiis vero beatae necessitatibus atque neque sunt molestias
          porro. Eveniet, iusto!
        </p>
        <button className="mt-5 bg-text-primary px-5 py-1 text-background-primary">
          Tìm hiểu thêm
        </button>
      </div>
      <div className="mt-1 grid grid-cols-6 gap-1 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1617326302376-c576dc5aa525?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          className=" col-span-2 w-full  bg-background-secondary"
        />
        <img
          src="https://images.unsplash.com/photo-1615998827996-6b9383d5eba2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          className=" col-span-2 w-full bg-background-secondary"
        />
        <img
          src="https://images.unsplash.com/photo-1617596225496-1d9da33a144b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80"
          className=" col-span-2 w-full bg-background-secondary"
        />
      </div>
    </>
  );
};
