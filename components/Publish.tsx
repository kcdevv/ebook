"use client";

import { useState } from "react";

export default function Publish() {
    const [option, setOption] = useState("free");
    const [price, setPrice] = useState("");

    return (
        <div className="flex flex-col gap-3 justify-center items-center mt-4">
            <input
                type="file"
                className="border-2 border-blue-500 p-2 rounded-lg w-1/2 bg-white focus:outline-none focus:ring-2 focus:ring-slate-500"
            />

            <input
                type="text"
                className="border-2 border-blue-500 p-2 rounded-lg w-1/2 bg-white focus:outline-none focus:ring-2 focus:ring-slate-500"
                placeholder="Book Name"
            />

            <input
                type="text"
                className="border-2 border-blue-500 p-2 rounded-lg w-1/2 bg-white focus:outline-none focus:ring-2 focus:ring-slate-500"
                placeholder="Author Name"
            />

            <div className="flex gap-4 items-center w-1/2">
                <select
                    className="border-2 border-blue-500 p-2 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-slate-500 w-full"
                    value={option}
                    onChange={(e) => setOption(e.target.value)}
                >
                    <option value="free">Free</option>
                    <option value="price">Price</option>
                </select>
            </div>

            {option === "price" && (
                <input
                    type="number"
                    className="border-2 border-blue-500 p-2 rounded-lg w-1/2 bg-white focus:outline-none focus:ring-2 focus:ring-slate-500"
                    placeholder="Enter Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            )}

            <input
                type="submit"
                className="border-2 border-blue-500 p-2 rounded-lg w-1/6 bg-white hover:bg-blue-500 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-slate-500 cursor-pointer"
                value={"Publish"}
            />
        </div>
    );
}
