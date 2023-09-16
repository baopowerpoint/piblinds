"use client";
import { TbMenu } from "react-icons/tb";
import { Container } from "./Container";
import Link from "next/link";
export const Header = () => {
  return (
    <Container className="z-100 fixed top-0 flex h-[var(--navigation-height)] items-center justify-between backdrop-blur-lg">
      <header className="flex w-full items-center justify-between">
        <Link className="text-md font-semibold" href="/">
          Piblinds
        </Link>
        <TbMenu className="text-md" />
      </header>
    </Container>
  );
};
