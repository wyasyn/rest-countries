import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
    return (
        <header className=" bg-card shadow-lg ">
            <div className="container">
                <div className=" py-6 flex flex-col md:flex-row gap-4 text-center md:text-start items-center md:justify-between ">
                    <Link href="/">
                        <h1 className=" text-xl md:text-3xl font-extrabold ">
                            Where in the world?
                        </h1>
                    </Link>
                    <ModeToggle />
                </div>
            </div>
        </header>
    );
}
