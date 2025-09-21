import React from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { MoveUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface CardProps {
    item: {
        name: string;
        image: string | StaticImageData;
        hostedLink: string;
        githubLink: string;
        description: string;
        type: string;
    };
    index: number;
}

const Card: React.FC<CardProps> = ({ item, index }) => {
    return (
        <div key={item.name} className={`border-2 p-3 dark:border-white/40 border-neutral-600 rounded-lg ${index % 2 !== 0 ? "rotate-1" : "-rotate-1"}`}>
            <div className="flex justify-between items-center">
                {/* <Image src={item?.image} alt={item.name} height={100} className="w-16 h-16 rounded-full" width={200} /> */}
                <div className="mt-4 mb-4 flex gap-2 flex-wrap">
                    <span className={`text-sm font-medium tracking-wide dark:text-white text-black/70 border-2 border-black/30 dark:bg-neutral-700 dark:border-white/10 dark:shadow-lg p-2 rounded-lg mt-2 mr-2 `}>{item.type}</span>
                    {/* {item.githubLink && (
                        <Link href={item.githubLink} target="_blank" rel="noopener noreferrer">
                            <GitHubLogoIcon className="w-8 h-8" />
                        </Link>
                    )} */}
                    {item.hostedLink && (
                        <Link href={item.hostedLink} className="border-2 rounded-full p-1 group">
                            <MoveUpRight className="group-hover:rotate-12 duration-200" />
                        </Link>
                    )}
                </div>
            </div>
            <h1 className="text-2xl font-bold mt-4">{item.name}</h1>
            <p className="text-xs md:text-md whitespace-pre-wrap font-medium">{item.description}</p>
        </div>
    );
};

export default Card;
