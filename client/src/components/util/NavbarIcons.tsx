import Image from "next/image";
import React from "react";

type Props = {};

const NavbarIcons = (props: Props) => {
  return (
    <div className="flex items-center sm:justify-center gap-6 md:justify-end w-full ">
      <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer">
        <Image src="/message.png" alt="" width={20} height={20} />
      </div>
      <div className="bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative">
        <Image src="/announcement.png" alt="" width={20} height={20} />
        <div className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs">
          1
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xs leading-3 font-medium">Hrithik </span>
        <span className="text-[10px] text-gray-500 text-right">Raj</span>
      </div>
      <Image
        src="/avatar.png"
        alt=""
        width={36}
        height={36}
        className="rounded-full"
      />
    </div>
  );
};

export default NavbarIcons;
