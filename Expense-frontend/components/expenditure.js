"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Checkbox } from "@/components/ui/checkbox";

export function Expenditure() {
  return (
    <main>
      <div className="flex justify-between">
        <div className="flex gap-5">
          <button className="w-[20px] h-[20px] bg-[#E5E7EB]">
            <ArrowLeft size={16} />
          </button>
          <div className="text-base text-[#000000]">Last 30 Days</div>
          <button className="w-[20px] h-[20px] bg-[#E5E7EB]">
            <ArrowRight size={16} />
          </button>
        </div>
        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Newest first" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple"></SelectItem>
                <SelectItem value="banana"></SelectItem>
                <SelectItem value="blueberry"></SelectItem>
                <SelectItem value="grapes"></SelectItem>
                <SelectItem value="pineapple"></SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="bg-[#ffffff] rounded-2xl w-full flex h-[50px] mt-[25px] justify-between items-center text-center gap-10">
        <div className="flex ">
          <div className="my-auto">
            <Checkbox id="terms" />
            <label htmlFor="terms"></label>
          </div>
          <div>Select all</div>
        </div>
        <div>- 35,500₮</div>
      </div>
    </main>
  );
}
