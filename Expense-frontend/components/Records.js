"use client"
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { AddCategory } from "./AddCategory";
import { Category } from "./Category";
import { AddRecord } from "./AddRecord";


export function Records() {
    return (
        <main className="bg-[#ffffff] mt-[32px] rounded-2xl w-[300px] h-full">
            <div className="grid p-5 gap-5">
                <div className="text-2xl text-[#000000]">Records</div>
                <div><AddRecord/></div>
                <div className="w-[250px]"><Input type="email" placeholder="Search" className="bg-slate-100" /></div>
            </div>
            <div className="grid p-5 gap-5">
                <div className="text-base text-[#1F2937]">Types</div>
                <RadioGroup defaultValue="comfortable" className="grid gap-4">
                    <div className="flex items-center space-x-2 text-base text-[#1F2937]">
                        <RadioGroupItem value="default" id="r1" />
                        <Label htmlFor="r1">All</Label>
                    </div>
                    <div className="flex items-center space-x-2 text-base text-[#1F2937]">
                        <RadioGroupItem value="comfortable" id="r2" />
                        <Label htmlFor="r2">Income</Label>
                    </div>
                    <div className="flex items-center space-x-2 text-base text-[#1F2937]">
                        <RadioGroupItem value="compact" id="r3" />
                        <Label htmlFor="r3">Expense</Label>
                    </div>
                </RadioGroup>
                <Category />
            </div>
        </main>
    )
}