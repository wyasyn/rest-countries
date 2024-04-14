import CountryCard from "@/components/CountryCard";
import { getData } from "../action";
import Search from "@/components/Search";
import { Metadata } from "next";

type searchParamsProp = {
    searchParams: {
        name: String;
    };
};

export async function generateMetadata({
    searchParams: { name },
}: searchParamsProp): Promise<Metadata> {
    return {
        title: "Region: " + name,
    };
}

export default async function page({
    searchParams: { name },
}: searchParamsProp) {
    const url = `https://restcountries.com/v3.1/region/${name}`;
    const data = await getData(url);
    if (!data || !data[0]) {
        return (
            <div className="container">
                <h2 className=" text-lg my-4 max-w-prose ">
                    <span role="img" aria-label="crying face">
                        😢
                    </span>{" "}
                    Sorry, something went wrong. Please try again later.
                </h2>
            </div>
        );
    }
    return (
        <div className=" container ">
            <Search />
            <div className=" grid gap-[3rem] grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
                {data.map((country: any) => {
                    return (
                        <CountryCard
                            key={country.name.common}
                            name={country.name.common}
                            capital={country.capital}
                            region={country.region}
                            population={country.population}
                            img={country.flags.svg}
                            alt={country.flags.alt}
                        />
                    );
                })}
            </div>
        </div>
    );
}
