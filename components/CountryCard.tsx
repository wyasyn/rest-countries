import Image from "next/image";
import Link from "next/link";

type CardProp = {
    img: string;
    alt: string;
    name: string;
    population: string;
    region: string;
    capital: string;
};

export default function CountryCard({
    img,
    name,
    population,
    region,
    capital,
    alt,
}: CardProp) {
    return (
        <Link href={`detail/?name=${name}`}>
            <div className=" bg-card rounded-lg overflow-hidden shadow-md hover:shadow-none ">
                <div className=" aspect-video ">
                    <Image
                        className=" w-full h-full object-cover "
                        src={img}
                        alt={alt}
                        width={650}
                        height={400}
                    />
                </div>
                <div className=" px-4 py-6 flex flex-col gap-3 ">
                    <h3 className=" text-xl font-semibold ">{name}</h3>
                    <div className=" font-thin text-sm flex flex-col gap-2 ">
                        <p>Population: {population}</p>
                        <p>Region: {region}</p>
                        <p>Capital: {capital}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
