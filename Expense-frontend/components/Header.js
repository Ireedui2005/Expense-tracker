import Image from "next/image";
import { LogoSvg } from "./svg/LogoSvg";
import { Plus } from "lucide-react";

export function Header() {
  return (
    <div className="p-9 w-full bg-white">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        <div className="flex">
          <LogoSvg fill="#0166FF" />
          <button className="text-base ml-[24px] my-auto">Dashboard</button>
          <button className="text-base ml-[24px] my-auto">Records</button>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-[#0166FF] text-white flex w-[100px] h-[32px] rounded-3xl text-center items-center p-3 text-base">
            <div><Plus size={20}/></div>
           <div>Record</div>
          </button>
          <Image
            src="Images/Placeholder.svg"
            width={40}
            height={40}
            className="ml-[24px]"
          />
        </div>
      </div>
    </div>
  );
}
