import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { redirect } from "next/navigation";
import Region from "./Region";

async function searchCountry(formData: FormData) {
    "use server";
    const searchQuery = formData.get("name");
    if (searchQuery) {
        redirect(`/search?name=${searchQuery}`);
    }
}

export default function Search() {
    return (
        <div className="flex flex-col md:items-center md:flex-row md:justify-between ">
            <form action={searchCountry}>
                <div className=" w-full md:min-w-[400px] flex gap-4 bg-card rounded-lg my-8 md:my-12 px-2 ">
                    <Button variant="ghost" size="icon">
                        <SearchIcon />
                    </Button>
                    <Input
                        type="search"
                        name="name"
                        placeholder="Search for a country ..."
                        className=" bg-card text-secondary focus-visible:text-foreground "
                    />
                </div>
            </form>
            <Region />
        </div>
    );
}
