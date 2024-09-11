"use client"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import { Input } from "@/components/ui/input"

import * as React from "react"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"



export function AddRecord() {
    return (
        <main>
            <Dialog>
                <DialogTrigger asChild className="flex gap-2 items-center just">
                    <button variant="outline" className="bg-[#0166FF] text-white w-[250px] h-[32px] rounded-3xl p-1 text-base text-center justify-center">Add</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[750px]">
                    <DialogHeader>
                        <DialogTitle>Add Record</DialogTitle>
                    </DialogHeader>
                    <div className="w-full h-[1px] bg-gray-300"></div>
                    <Popover>
                        <div className="flex">
                            <PopoverTrigger asChild className="w-[48px] my-auto">=
                            </PopoverTrigger>
                        </div>
                        <PopoverContent className="w-80">
                        </PopoverContent>
                    </Popover>
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <div className="flex">
                                <button className="text-[#F9FAFB] w-[170px] h-[30px] bg-[#0166FF] rounded-full">Expense</button>
                                <button className="text-[#1F2937] w-[170px] h-[30px] bg-[#F3F4F6] rounded-full">Income</button>
                            </div>
                            <div>
                                <div className="grid w-full max-w-sm items-center gap-1.5 mt-[20px]">
                                    <Input type="email" id="email" placeholder="₮ 000.00" className="h-[76px] bg-slate-100" />
                                </div>
                            </div>
                            <div className="mt-[20px]">
                                <div className="text-[#1F2937] text-base">Category</div>
                                <div className="mt-[10px]">
                                    <Select>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Choose" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Add Category</SelectLabel>
                                                <SelectItem value="Gift">Gift</SelectItem>
                                                <SelectItem value="Food">Food</SelectItem>
                                                <SelectItem value="Drink">Drink</SelectItem>
                                                <SelectItem value="Taxi">Taxi</SelectItem>
                                                <SelectItem value="Shoppping">Shoppping</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            <div className="flex mt-[20px]">
                                <div className="">
                                    <div>Date</div>
                                    <Select>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Oct 30, 2023" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel></SelectLabel>
                                                <SelectItem value="apple"></SelectItem>
                                                <SelectItem value="banana"></SelectItem>
                                                <SelectItem value="blueberry"></SelectItem>
                                                <SelectItem value="grapes"></SelectItem>
                                                <SelectItem value="pineapple"></SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="">
                                    <div>Date</div>
                                    <Select>
                                        <SelectTrigger className="w-[180px]">
                                            <SelectValue placeholder="Oct 30, 2023" />
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
                            <button className="bg-[#0166FF] rounded-full w-[350px] h-[40px] text-[#F9FAFB] text-center items-center justify-center mt-[35px]">Add Record</button>
                        </div>
                        <div className="">
                            <div>
                                <div className="text-[#1F2937] text-base">Payee</div>
                                <div className="mt-[10px]">
                                    <Select>
                                        <SelectTrigger className="w-[340px] h-[50px]">
                                            <SelectValue placeholder="Write here" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                <SelectLabel>Fruits</SelectLabel>
                                                <SelectItem value="apple">Apple</SelectItem>
                                                <SelectItem value="banana">Banana</SelectItem>
                                                <SelectItem value="blueberry">Blueberry</SelectItem>
                                                <SelectItem value="grapes">Grapes</SelectItem>
                                                <SelectItem value="pineapple">Pineapple</SelectItem>
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select></div>
                            </div>
                            <div className="mt-[22px]">
                                <div className="text-[#1F2937] text-base">Note</div>
                                <div className="mt-[10px]">
                                    <Input type="email" placeholder="Write here" className="h-[240px]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </main>
    )
}   