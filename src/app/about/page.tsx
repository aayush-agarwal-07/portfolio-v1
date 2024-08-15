import React from "react";
export function generateMetadata() {
    return {
        title: "About - Aayush",
        description: "Hi, I&apos;m Aayush K Agarwal, a passionate full-stack developer currently based in Noida, Uttar Pradesh, India. I have persued a Bachelor&apos;s in Electronics, and Communications Engineering from ABES Engineering College. My journey as a self-taught developer has fueled my passion for building software that solves real-world problems, which is why much of what I create is open source. My expertise spans front-end and back-end technologies, with a particular focus on frameworks like React.js, Next.js, and Tailwind CSS. In my professional experience, I&apos;ve worked as a Software Engineer at Sopra Steria, contributing to significant projects in the healthcare and agricultural sectors, where I specialized in state management and API integration. Whether collaborating with UX/UI designers or working on personal projects like the Filmpier App and Quote Rider, my goal is always to deliver responsive, user-friendly applications that make a difference.",
        openGraph: {
            images: "",
        },
    };
}
import { GitHubLogoIcon, LinkedInLogoIcon, ResumeIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { Info, MailPlus, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import aboutmemoji from "@/assets/about/confused-memoji.svg";
const AboutPage = () => {
    return (
        <section className=" p-4 w-full lg:max-w-[50%] lg:m-auto">
            <div className="flex flex-col gap-4">
                <h1 className=" text-3xl lg:text-5xl font-bold tracking-wide mt-7">
                    Hi. I&apos;m{" "}
                    <a href="https://x.com/aayush_0701" rel="noopener noreferrer" target="_blank" className=" text-balance text-blue-500">
                        @aayush_0701{" "}
                    </a>
                    🤟
                </h1>
                <Image src={aboutmemoji} alt="confused-memoji" height={160} width={160}></Image>
                <h2 className=" text-3xl flex gap-2 items-center font-bold tracking-wide">
                    <Info />
                    Short Bio
                </h2>
                <p className="text-md lg:text-xl flex flex-col gap-2 whitespace-break-spaces font-normal">
                    <span>Hi, I&apos;m Aayush K Agarwal, a passionate full-stack developer currently based in Noida, Uttar Pradesh, India. I have persued a Bachelor&apos;s in <span className="italic">Electronics and Communications Engineering from ABES Engineering College</span>.</span>
                    <span className="my-4">My journey as a self-taught developer has fueled my passion for building software that solves real-world problems, which is why much of what I create is open source. My expertise spans front-end technologies, with a particular focus on frameworks like <span className="text-2xl italic text-blue-500">React.js, Tailwind CSS.</span> In my professional experience, I&apos;ve worked as a Software Engineer at Sopra Steria, contributing to significant projects in the healthcare and agricultural sectors, where I specialized in state management and API integration.</span>Whether collaborating with UX/UI designers or working on personal projects like the Filmpier App and Quote Rider, my goal is always to deliver responsive, user-friendly applications that make a difference.
                </p>
                <div className="flex justify-center flex-wrap gap-8 items-center mt-5 mb-5">
                    <Link href={"/#contact"} className="loadmorebtn flex justify-center items-center">
                        Leave A Message
                    </Link>
                    <Link href={"/projects"} className="loadmorebtn flex justify-center items-center">
                        Visit Projects
                    </Link>
                </div>
                <h2 className=" text-3xl flex gap-2 items-center font-bold tracking-wide">
                    <Zap />
                    Lets Connect
                </h2>
                <div className="flex gap-2 flex-wrap mt-2 mb-2 items-center">
                    <a href="https://drive.google.com/file/d/1icBFJ4GUu7SYwYfC5BKWrep_lQ3cAOwk/view" target="_blank" rel="noopener noreferrer">
                        <ResumeIcon className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
                    </a>
                    <a href="https://www.linkedin.com/in/aayushkagarwal07/" target="_blank" rel="noopener noreferrer">
                        <LinkedInLogoIcon className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
                    </a>
                    <a href="https://github.com/aayush-agarwal-07" target="_blank" rel="noopener noreferrer">
                        <GitHubLogoIcon className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
                    </a>
                    <a href="https://https://x.com/aayush_0701" target="_blank" rel="noopener noreferrer">
                        <TwitterLogoIcon className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
                    </a>
                    <a href="mailto:aayushagarwal297@gmail.com?body=Hello" target="_blank" rel="noopener noreferrer">
                        <MailPlus className=" h-6 lg:h-10 w-8 lg:w-8 duration-200 hover:-translate-y-2 cursor-pointer" />
                    </a>
                </div>
                <p className=" text-md lg:text-xl whitespace-break-spaces font-normal">
                    I&apos;m excited to connect with others via email (
                    <a href="mailto:aayushagarwal297@gmail.com?body=Hello" rel="noopener noreferrer" target="_blank" className=" text-blue-500 italic font-bold">
                        aayushagarwal297@gmail.com
                    </a>
                    ) and{" "}
                    <a href="https://x.com/aayush_0701" rel="noopener noreferrer" target="_blank" className="font-bold italic text-blue-500">
                        Twitter
                    </a>{" "}
                    to chat about projects and ideas I&apos;m taking on freelance projects and I am open to hearing about potential opportunities, discussing them with you and then potentially collaborating if it&apos;s a good fit.
                </p>
            </div>
        </section>
    );
};

export default AboutPage;
