import Menu from "@/components/Menu";
import Image from "next/image";
import Link from "next/link";
import React, { ReactNode } from "react";

type Props = { children: ReactNode };

function DashBoardLayout({ children }: Props) {
  return (
    <div className="h-screen  flex">
      {/* Side bar part */}
      <div className="w-[14%] md:w[10%] lg:w-[20%] xl:w-[14%] ">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-4 "
        >
          <Image
            className="rounded-full w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px]"
            src="/logo1.png"
            width={50}
            height={50}
            alt="logo-image"
          />
          <span className="hidden lg:block lg:whitespace-nowrap md:text-base">
            Acadamia Hub
          </span>
        </Link>

        <Menu />
      </div>
      {/* Main part */}
      <div className="w-[86%] md:w[90%] lg:w-[80%] xl:w-[86%] bg-[#f7f8fA] overflow-scroll" >
        <Navbar/>
        {children}
      </div>
    </div>
  );
}

export default DashBoardLayout;
