"use client";
import { sendRegion } from "@/app/action";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const region = [
    { value: "africa", label: "Africa" },
    { value: "americas", label: "Americas" },
    { value: "asia", label: "Asia" },
    { value: "europe", label: "Europe" },
    { value: "oceania", label: "Oceania" },
];

export default function Region({ reg }: { reg: string | null }) {
    return (
        <div className="  text-sm ">
            <DropdownMenu>
                <DropdownMenuTrigger className=" flex items-center gap-2 bg-card py-2 px-3 rounded-md ">
                    <p>{reg ? reg : "Filter by Region"}</p>{" "}
                    <ChevronDown className=" text-xs " />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {region.map((item, index) => {
                        return (
                            <DropdownMenuItem
                                key={index}
                                className=" cursor-pointer "
                                onClick={() => {
                                    sendRegion(item.label);
                                }}
                            >
                                {item.label}
                            </DropdownMenuItem>
                        );
                    })}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
