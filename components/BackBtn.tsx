"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { ChevronLeft } from "lucide-react";

const BackButton = () => {
    const router = useRouter();

    const handleClick = () => {
        router.back();
    };

    return (
        <Button
            onClick={handleClick}
            className=" md:mb-[5rem] mb-[3rem] bg-card shadow-md flex gap-2 items-center justify-center"
            variant="ghost"
            size="sm"
        >
            <ChevronLeft />
            <p>Back</p>
        </Button>
    );
};

export default BackButton;
