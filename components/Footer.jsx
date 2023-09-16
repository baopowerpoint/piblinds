import React from "react";
import Link from "next/link";
import { Container } from "./Container";
const footerLinks = [
  {
    title: "Sản phẩm",
    links: [
      { title: "Sản phẩm 1", href: "#" },
      { title: "Sản phẩm 2", href: "#" },
      { title: "Sản phẩm 3", href: "#" },
    ],
  },
  {
    title: "Công ty",
    links: [
      { title: "Về chúng tôi", href: "#" },
      { title: "Điều khoản & Chính sách", href: "#" },
      { title: "Blogs", href: "#" },
      { title: "Khách hàng", href: "#" },
      { title: "Nhãn hiệu", href: "#" },
    ],
  },

  {
    title: "Dành cho bạn",
    links: [
      { title: "Đăng nhập", href: "/login" },
      { title: "Đăng ký", href: "#" },
      { title: "Liên hệ", href: "/contact" },
    ],
  },
];
export const Footer = () => {
  return (
    <footer className="mt-12 border-t border-t-background-secondary py-6 text-sm">
      <Container className="flex flex-col justify-between lg:flex-row">
        <div className="flex h-full items-center justify-between gap-1 md:flex-row">
          <Link href="/" className="flex items-center text-md font-semibold">
            brandname{" "}
          </Link>
        </div>
        <div className="mt-5 flex flex-wrap justify-between">
          {footerLinks.map((col, index) => (
            <div key={index} className="min-w-[18rem]">
              <h3 className="mb-3 font-semibold">{col.title}</h3>
              <ul className="">
                {col.links.map((link) => (
                  <li className="mb-3" key={link.title}>
                    <Link className="text-text-tertiary " href={link.href}>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>{" "}
    </footer>
  );
};
