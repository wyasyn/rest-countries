import { getData } from "../action";
import Link from "next/link";
import Image from "next/image";
import BackButton from "@/components/BackBtn";
import { Metadata } from "next";

type searchParamsProp = {
    searchParams: {
        name: String;
    };
};

export async function generateMetadata({
    searchParams: { name },
}: searchParamsProp): Promise<Metadata> {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    const data = await getData(url);
    const country = data[0];

    return {
        title: country?.name.common,
        openGraph: {
            images: [{ url: country?.flags.svg }],
        },
    };
}

export default async function page({
    searchParams: { name },
}: searchParamsProp) {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    const data = await getData(url);
    const country = data[0];

    if (!data || data.length == 0) {
        return (
            <div className="container">
                <h2 className=" text-lg my-4 max-w-prose ">
                    <span role="img" aria-label="crying face">
                        😢
                    </span>{" "}
                    Sorry, No country found!
                </h2>
            </div>
        );
    }

    return (
        <div className=" container ">
            <BackButton />
            <div>
                <div key={country?.name.common}>
                    <div className=" flex flex-col gap-[5rem] md:flex-row ">
                        <div>
                            <Image
                                src={country?.flags.svg}
                                alt={country.flags.alt}
                                width={650}
                                height={500}
                                className=" max-w-full "
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
                                        {country?.name.nativeName.common}
                                    </p>
                                    <p>Population: {country?.population}</p>
                                    <p>Sub region: {country?.subregion}</p>
                                    <p>Capital: {country?.capital[0]}</p>
                                </div>
                                <div className=" text-sm font-thin flex flex-col gap-4 ">
                                    <p>Top Level Domain: {country?.tld[0]}</p>
                                    <p>
                                        Currencies:{" "}
                                        {Object.keys(country?.currencies).map(
                                            (currency) => (
                                                <span key={currency}>
                                                    {currency} (
                                                    {
                                                        country?.currencies[
                                                            currency
                                                        ].name
                                                    }
                                                    )
                                                </span>
                                            )
                                        )}
                                    </p>
                                    <p>
                                        Languages:{" "}
                                        {Object.keys(country?.languages).map(
                                            (lang) => (
                                                <span key={lang}>
                                                    {country?.languages[lang]}
                                                </span>
                                            )
                                        )}
                                    </p>
                                </div>
                            </div>
                            <div className="   mt-[3rem] ">
                                <h3 className="font-semibold mb-4">
                                    Border Countries:
                                </h3>
                                <div className="  flex flex-wrap gap-4">
                                    {country?.borders &&
                                    country?.borders.length > 0 ? (
                                        Promise.all(
                                            country?.borders.map(
                                                async (border: any) => {
                                                    const urlb = `https://restcountries.com/v3.1/alpha/${border}`;
                                                    const borderCountries =
                                                        await getData(urlb);
                                                    const borderCountry =
                                                        borderCountries[0];
                                                    return (
                                                        <Link
                                                            href={`detail/?name=${borderCountry.name.common}`}
                                                            key={border}
                                                        >
                                                            <span className="bg-card px-4 py-1 rounded-md mt-4 shadow-md hover:opacity-70">
                                                                {borderCountry
                                                                    ? borderCountry
                                                                          .name
                                                                          .common
                                                                    : border}
                                                            </span>
                                                        </Link>
                                                    );
                                                }
                                            )
                                        ).then(
                                            (borderElements) => borderElements
                                        )
                                    ) : (
                                        <span>No Borders</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
