"use client";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { useTheme } from "next-themes";

export default function Header() {
    const { theme } = useTheme();
    return (
        <header className=" bg-card shadow-lg ">
            <div className="container">
                <div className=" py-6 flex flex-col md:flex-row gap-4 text-center md:text-start items-center md:justify-between ">
                    <Link href="/">
                        <h1 className=" text-xl md:text-3xl font-extrabold ">
                            Where in the world?
                        </h1>
                    </Link>
                    <div className=" flex gap-3 items-center justify-center ">
                        <ModeToggle />
                        <div>
                            {theme == "dark" ? (
                                <p>Dark Mode</p>
                            ) : (
                                <p>Light Mode</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
