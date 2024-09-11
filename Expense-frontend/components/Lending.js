import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { House } from "lucide-react"

export function Lending() {
    return (
        <main className="w-full bg-[#ffffff] mt-[32px] rounded-2xl">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="text-base text-[#0F172A]">Last Records</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <Table className="flex gap-4 px-4">
                                <div className="w-[40px] h-[40px] bg-[#0166FF] rounded-full text-[#FFFFFF]"><House /></div>
                                <div>
                                    <div className="text-base">Lending & Renting</div>
                                    <div className="text-[#6B7280] text-sm">3 hours ago</div>
                                </div>
                            </Table>
                            <TableCell className="text-right text-[#84CC16] text-base">- 1,000₮</TableCell>
                        </TableRow>
                        <TableRow>
                            <Table className="flex gap-4 px-4">
                                <div className="w-[40px] h-[40px] bg-[#0166FF] rounded-full text-[#FFFFFF]"><House /></div>
                                <div>
                                    <div className="text-base">Lending & Renting</div>
                                    <div className="text-[#6B7280] text-sm">3 hours ago</div>
                                </div>
                            </Table>
                            <TableCell className="text-right text-[#84CC16] text-base">- 1,000₮</TableCell>
                        </TableRow>
                        <TableRow>
                            <Table className="flex gap-4 px-4">
                                <div className="w-[40px] h-[40px] bg-[#0166FF] rounded-full text-[#FFFFFF]"><House /></div>
                                <div>
                                    <div className="text-base">Lending & Renting</div>
                                    <div className="text-[#6B7280] text-sm">3 hours ago</div>
                                </div>
                            </Table>
                            <TableCell className="text-right text-[#84CC16] text-base">- 1,000₮</TableCell>
                        </TableRow>
                        <TableRow>
                            <div className="flex gap-4 px-4">
                                <div className="w-[40px] h-[40px] bg-[#0166FF] rounded-full text-[#FFFFFF]"><House /></div>
                                <div>
                                    <div className="text-base">Lending & Renting</div>
                                    <div className="text-[#6B7280] text-sm">3 hours ago</div>
                                </div>
                            </div>
                            <TableCell className="text-right text-[#84CC16] text-base">- 1,000₮</TableCell>
                        </TableRow>
                    </TableBody>
                </Table> 
        </main>
    )
}