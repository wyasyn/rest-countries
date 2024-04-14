import { LoaderCircle } from "lucide-react";

export default function Loading() {
    return (
        <div className=" min-h-dvh flex items-center justify-center text-3xl ">
            <LoaderCircle className=" animate-spin " />
        </div>
    );
}
