import { AddCategory } from "./AddCategory";

export function Category() {
    return (
        <main>
            <div className="flex justify-between">
                <div className="text-base text-[#1F2937]">Category</div>
                <button className="text-base text-gray-400">Clear</button>
            </div>
            <AddCategory />
        </main>
    )
}