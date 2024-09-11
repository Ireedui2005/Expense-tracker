"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import {
    ChartConfig,
    ChartContainer,
    ChartLegend,
    ChartLegendContent,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
    desktop: {
        color: "#84CC16",
    },
    mobile: {
        color: "#F97316",
    },
}

export function Income() {
    return (
        <main className="grid grid-cols-2 gap-5">
            <div className="w-full bg-[#ffffff] mt-[32px] rounded-2xl">
                <div className="flex text-black p-5 ml-[35px]">
                    <div className="text-base ">Income - Expense</div>
                </div>
                <div className="w-full h-[1px] bg-gray-300"></div>
                <div className="p-9 flex justify-around">
                    <div className="grid">
                        <div className="text-sm text-[#71717A]">3’000’000</div>
                        <div className="text-sm text-[#71717A]">2’000’000</div>
                        <div className="text-sm text-[#71717A]">1’000’000</div>
                        <div className="text-sm text-[#71717A]">0</div>
                    </div>
                    <div>
                        <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
                            <BarChart accessibilityLayer data={chartData}>
                                <CartesianGrid vertical={false} />
                                <XAxis
                                    dataKey="month"
                                    tickLine={false}
                                    tickMargin={10}
                                    axisLine={false}
                                    tickFormatter={(value) => value.slice(0, 3)}
                                />
                                <ChartTooltip content={<ChartTooltipContent />} />
                                <ChartLegend content={<ChartLegendContent />} />
                                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                            </BarChart>
                        </ChartContainer>
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#ffffff] mt-[32px] rounded-2xl">
                <div className="flex text-black p-5 justify-between ml-[35px]">
                    <div className="text-base ">Income - Expense</div>
                    <div className="text-base text-[#6B7280]">Jun 1 - Nov 30</div>
                </div>
                <div className="w-full h-[1px] bg-gray-300"></div>
                <div className="p-9">
                    <div className="flex items-center grid grid-cols-3">
                    </div>
                </div>
            </div>
        </main>
    )
}