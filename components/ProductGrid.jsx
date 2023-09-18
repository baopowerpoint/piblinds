import Image from "next/image";
import Link from "next/link";
import { AiOutlineHeart } from "react-icons/ai";

export const ProductGrid = ({ products }) => {
  return (
    <div className="mt-10 grid grid-cols-2 gap-5">
      {products &&
        products.map((product) => (
          <Link
            key={product.id}
            href={{
              pathname: "products/product-detail",
              query: { id: product.id, label: product.label },
            }}
          >
            <div className="relative">
              <Image
                height={200}
                width={200}
                className="aspect-square rounded-6xl object-cover"
                src={product.imgSrc}
                alt={product.alt}
              />
              <button className="absolute right-2 top-2 rounded-full bg-text-tertiary p-2">
                <AiOutlineHeart className="text-xl text-white" />
              </button>
              <p className="mt-1 text-md font-semibold">{product.name}</p>
              <p className="mt-1 w-fit rounded-lg bg-background-secondary p-1 text-xs text-text-secondary">
                {product.sold} đã bán{" "}
              </p>
              <p className="mt-2 text-lg font-semibold">{product.price} VNĐ </p>
            </div>
          </Link>
        ))}
      {!products && <p>not found</p>}
    </div>
  );
};
