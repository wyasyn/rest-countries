import CountryCard from "@/components/CountryCard";
import { getData } from "./action";
import Search from "@/components/Search";

export default async function Home() {
    const url = "https://restcountries.com/v3.1/all";
    const data = await getData(url);
    return (
        <div className="container">
            <Search />
            {!data && (
                <h2 className=" text-lg my-4 max-w-prose ">
                    <span role="img" aria-label="crying face">
                        😢
                    </span>{" "}
                    Sorry, something went wrong. Please try again later.
                </h2>
            )}
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
