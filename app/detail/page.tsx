import { getData } from "../action";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";

type searchParamsProp = {
    searchParams: {
        name: String;
    };
};

export default async function page({
    searchParams: { name },
}: searchParamsProp) {
    const url = `https://restcountries.com/v3.1/name/${name}`;
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
            <Link href="/" className=" md:mb-[5rem] mb-[3rem] flex ">
                <Button
                    variant="ghost"
                    size="sm"
                    className=" bg-card shadow-md flex gap-2 items-center justify-center "
                >
                    <ChevronLeft />
                    <p>Back</p>
                </Button>
            </Link>
            <div>
                {data.map((country: any) => {
                    return (
                        <div key={country?.name.common}>
                            <div className=" flex flex-col gap-[5rem] md:flex-row ">
                                <div>
                                    <Image
                                        src={country?.flags.svg}
                                        alt={country?.flags.alt}
                                        width={650}
                                        height={500}
                                    />
                                </div>
                                <div>
                                    <h1 className=" font-extrabold text-3xl mb-10 ">
                                        {country?.name.common}
                                    </h1>
                                    <div className=" grid lg:grid-cols-2 gap-10 ">
                                        <div className=" text-sm font-thin flex flex-col gap-4 ">
                                            <p>
                                                Native Name:{" "}
                                                {
                                                    country?.name.nativeName
                                                        .common
                                                }
                                            </p>
                                            <p>
                                                Population:{" "}
                                                {country?.population}
                                            </p>
                                            <p>
                                                Sub region: {country?.subregion}
                                            </p>
                                            <p>
                                                Capital: {country?.capital[0]}
                                            </p>
                                        </div>
                                        <div className=" text-sm font-thin flex flex-col gap-4 ">
                                            <p>
                                                Top Level Domain:{" "}
                                                {country?.tld[0]}
                                            </p>
                                            <p>
                                                Currencies:{" "}
                                                {Object.keys(
                                                    country?.currencies
                                                ).map((currency) => (
                                                    <span key={currency}>
                                                        {currency} (
                                                        {
                                                            country?.currencies[
                                                                currency
                                                            ].name
                                                        }
                                                        )
                                                    </span>
                                                ))}
                                            </p>
                                            <p>
                                                Languages:{" "}
                                                {Object.keys(
                                                    country?.languages
                                                ).map((lang) => (
                                                    <span key={lang}>
                                                        {
                                                            country?.languages[
                                                                lang
                                                            ]
                                                        }
                                                    </span>
                                                ))}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="   mt-[3rem] ">
                                        <h3 className="font-semibold">
                                            Border Countries:
                                        </h3>

                                        <div className="  flex flex-wrap gap-4">
                                            {country?.borders &&
                                            country?.borders.length > 0
                                                ? country?.borders.map(
                                                      (border: any) => (
                                                          <span
                                                              className=" bg-card px-4 py-1 rounded-md mt-4 "
                                                              key={border}
                                                          >
                                                              {border}
                                                          </span>
                                                      )
                                                  )
                                                : "No Borders"}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
