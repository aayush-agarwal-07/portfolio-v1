import React from "react";
import { GitHubLogoIcon, ResumeIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { ChevronRight, LinkedinIcon, MailPlus, MouseIcon, Terminal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import clock from "@/assets/clock.svg";
import cardData from "@/data/cardData.json"; // Import cardData instead of projectArray
import CopyCmd from "@/components/CopyCmd";
import Card from "@/components/projects/card";
import Contact from "@/components/shared/Contact";
import Skills from "@/components/skills/Skills";
import Terminalcomp from "@/components/terminal/Terminalcomp";
import TypingAnimation from "@/components/TypingAnimation";

const page = () => {
    return (
        <section className="lg:max-w-[50%] mt-20 md:mt-36 md:max-w-[90%] relative md:m-auto p-4 flex flex-col min-h-screen">
            <div className=" flex gap-3 flex-col justify-center items-left min-h-[60vh] lg:min-h-screen">
                <span className=" text-sm lg:text-md flex items-center gap-2 opacity-70 font-medium tracking-widest uppercase">
                    <Terminal size={17} />
                    Hello World
                </span>
                <div className="flex items-center gap-3">
                    <h1 className="text-4xl flex gap-12 items-center flex-row md:text-7xl lg:text-8xl font-bold ">Hey, I&apos;m Aayush</h1>
                    <Image src={clock} alt="coffeCup" className="w-12 rotate-12 h-12 lg:w-16 lg:h-16" />
                </div>
                <h1 className=" font-bold lg:text-3xl">
                    I am a <TypingAnimation />
                </h1>
                {/* <p className=" opacity-80 text-sm lg:text-xl lg:mb-2 font-medium">
                    I develop open-source <span className="  text-blue-500 uppercase font-bold">full-stack</span> apps/tools and occasionally take on <span className=" uppercase text-blue-500 font-bold tracking-wider">freelance</span> projects.
                </p> */}
                <div className="flex items-center gap-3 lg:gap-6 flex-wrap">
                    <CopyCmd />
                    <a href="https://drive.google.com/file/d/1LMEbEHAxkNzd-tXYl8P8VI4aucG2q6NI/view" target="_blank" rel="noopener noreferrer">
                        <ResumeIcon className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/in/aayushkagarwal07/" target="_blank" rel="noopener noreferrer">
                        <LinkedinIcon className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
                    </a>
                    {/* <a href="https://github.com/aayush-agarwal-07" target="_blank" rel="noopener noreferrer">
                        <GitHubLogoIcon className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
                    </a> */}
                    <a href="https://x.com/aayush_0701" target="_blank" rel="noopener noreferrer">
                        <TwitterLogoIcon className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
                    </a>
                    <a href="mailto:aayushagarwal297@gmail.com?body=Hello" target="_blank" rel="noopener noreferrer">
                        <MailPlus className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
                    </a>
                </div>

                <div className=" opacity-70 mt-12 justify-center flex items-center flex-col">
                    <MouseIcon size={40} className=" animate-bounce" />
                    <span className="text-sm font-medium">Scroll Down</span>
                </div>

                <Skills />

                <div className="mt-12 lg:mt-28">
                    <div className="flex items-center gap-4 mb-3 text-3xl font-medium tracking-wide">
                        <span className=" w-14 h-[2px] bg-green-500"></span> Terminal
                    </div>
                    <Terminalcomp />
                </div>

                {/* projects */}
                <div className="mt-12 lg:mt-28">
                    <div className="flex items-center gap-4 mb-3 text-3xl font-medium tracking-wide">
                        <span className=" w-14 h-[2px] bg-green-500"></span> Projects
                    </div>

                    <div className="flex gap-8 w-full justify-center items-center pl-4 pr-4 flex-col pb-7 md:pb-0">
                        <div className="mt-6 relative place-items-center grid grid-cols-1 md:grid-cols-2 gap-8">
                            {cardData.cards.slice(0, 2).map(
                                (
                                    item,
                                    index, // Replaced projectArray with cardData.cards and removed filter to show all
                                ) => (
                                    <Card item={item} index={index} key={item.name} />
                                ),
                            )}
                        </div>
                        {/* Optional: Keep Load More if you have a separate /projects page for more content */}
                        <Link href={"/projects"} className="loadmorebtn text-center lg:mb-8">
                            Load More
                            <ChevronRight />
                        </Link>
                    </div>
                </div>
                <Contact />
            </div>
        </section>
    );
};

export default page;
