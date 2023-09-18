import { Container } from "@/components/Container";
import { PageWrapper } from "@/components/PageWrapper";
import Link from "next/link";
import { GrPrevious } from "react-icons/gr";
import { myCart } from "@/constants/myCart";
import { AiOutlineSearch } from "react-icons/ai";
import { BsArrowUpRightSquareFill } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import classNames from "classnames";

export default function Cart() {
  return (
    <PageWrapper>
      {" "}
      <Container className="pb-20 pt-5">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <GrPrevious />
            </Link>
            <p className="inline text-md font-semibold">Giỏ hàng của tôi</p>
          </div>
          <AiOutlineSearch className="text-lg  " />
        </div>
        <div>
          {myCart.map((product) => (
            <div
              key={product.id}
              className="mt-3 flex items-center justify-start gap-2 rounded-9xl bg-background-secondary p-3 [box-sizing:border-box]"
            >
              <img
                src={product.imgSrc}
                className="aspect-square w-48 rounded-6xl object-cover"
                alt=""
              />
              <div className="flex-1">
                <div className="flex items-center justify-between gap-4 ">
                  <p className="text-lg font-semibold">{product.name}</p>
                  <button>
                    <MdDelete className="text-lg" />
                  </button>
                </div>
                <div className="item-center flex justify-start gap-2">
                  <div className="flex items-center gap-1 font-semibold text-text-secondary">
                    <div
                      className={classNames(
                        "h-3 w-3 rounded-full",
                        `bg-[#765827]`,
                      )}
                    ></div>
                    color
                  </div>
                  |
                  <div className="flex items-center gap-1 font-semibold text-text-secondary">
                    size = {product.size}
                  </div>
                </div>
                <div className="mt-10">
                  <p className="text-lg font-semibold">{product.price}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
      <div className="fixed bottom-0 right-0 flex w-full gap-3 bg-background-primary p-5">
        <div>
          <p className="text-sm font-semibold text-text-secondary">Tổng</p>
          <p className="text-md font-semibold ">2.999.000 VNĐ</p>
        </div>
        <button className="flex flex-1 items-center justify-center gap-2 rounded-full bg-text-primary text-md font-semibold text-background-primary">
          Kiểm tra
          <BsArrowUpRightSquareFill />
        </button>
      </div>
    </PageWrapper>
  );
}
