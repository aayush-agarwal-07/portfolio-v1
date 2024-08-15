"use client";

import React, { ChangeEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { TerminalSquare } from "lucide-react";
import { useRouter } from "next/navigation";

import HelpCommand from "./HelpCommand";

interface Command {
    id: number;
    input: string;
    output: string | JSX.Element;
    time: string;
}

const Terminalcomp: React.FC = () => {
    const [input, setInput] = useState("");
    const [commands, setCommands] = useState<Command[]>([]);
    const terminalRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const getFormattedTime = (): string => {
        const now = new Date();
        let hours = now.getHours();
        const minutes = now.getMinutes().toString().padStart(2, "0");
        const seconds = now.getSeconds().toString().padStart(2, "0");
        const amPm = hours >= 12 ? "PM" : "AM";

        hours = hours % 12 || 12;

        return `${hours}:${minutes}:${seconds}${amPm}`;
    };

    const [currentTime, setCurrentTime] = useState("");

    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        setCurrentTime(getFormattedTime());
        const intervalId = setInterval(() => {
            setCurrentTime(getFormattedTime());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            processCommand(e);
        }
    };

    const processCommand = async (e: KeyboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const command = input.trim().toLowerCase();
        let output: string | JSX.Element;
        switch (command) {
            case "hello":
                output = "aayush this side! how can i help you??";
                break;
            case "youtube":
                output = "";
                window.location.href = "https://www.youtube.com/channel/UCMwY3ffymvW7ly6Nrhey86w";
                break;
            case "sudo":
                output = "missing parameters";
                break;
            case "ls -a":
            case "ls":
                output = ".open_me";
                break;
            case "cat .open_me":
                window.location.href = "https://www.youtube.com/watch?v=hf1DkBQRQj4";
                output = "";
                break;
            case "aayush":
                output = "Hello there! I am Aayush, a Full Stack Developer experienced in the MERN stack, type about to know more about me";
                break;
            case "neofetch":
                window.location.href = "https://www.youtube.com/watch?v=Rl1ImG2b1k8&t=51s";
                output = "";
                break;
            case "about":
                router.push("/about");
                output = "";
                break;
            case "blogs":
                router.push("/blogs");
                output = "";
                break;
            case "proj":
                router.push("/projects");
                output = "";
                break;
            case "proj ls":
                output = (
                    <ul>
                        <li>filmpire</li>
                        <li>quoterider</li>
                    </ul>
                );
                break;
            case "help":
                output = <HelpCommand />;
                break;
            case "filmpire":
                window.location.href = "https://scsdb-react.vercel.app/trending";
                output = "";
                break;
            case "quoterider":
                window.location.href = "https://quoterider-client.onrender.com/";
                output = "";
                break;
            
            case "clear":
                setCommands([]);
                output = "Terminal cleared.";
                break;
            default:
                if (command.startsWith("echo ")) {
                    output = command.substring(5);
                } else if (command.startsWith("rm")) {
                    window.location.href = "https://www.youtube.com/watch?v=AlLhMySQTlo";
                    output = "";
                } else if (command.includes("apt")) {
                    output = "You are a reliable person";
                } else if (command.includes("pacman")) {
                    output = "certified racist and a virgin (likes to go fast)";
                } else if (command.includes("dnf")) {
                    output = "gets the job done slowly but surely";
                } else if (/^\d+[+\-*/]\d+$/.test(command)) {
                    try {
                        const result = eval(command);
                        output = result;
                    } catch (error) {
                        output = "Error in evaluating the expression.";
                    }
                } else {
                    output = `Cannot find command: ${command}. Type 'help' for more info.`;
                }
                break;
        }

        const newCommand: Command = {
            id: Date.now(),
            input,
            time: getFormattedTime(),
            output,
        };

        setCommands((prevCommands) => [...prevCommands, newCommand]);
        setInput("");
    };

    useEffect(() => {
        terminalRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [commands]);

    return (
        <div className="border-2  border-black/30 dark:border-white/30 rounded-lg h-[450px] overflow-y-auto w-full">
            <div className="flex p-2 justify-between mb-5 items-center sticky top-0 dark:bg-black/40 z-20 backdrop-blur-lg bg-white/40">
                <div className="flex gap-2" onClick={() => (window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ")}>
                    <div className="w-3 h-3 duration-200 cursor-pointer bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 duration-200 cursor-pointer bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 cursor-pointer duration-200 bg-green-500 rounded-full"></div>
                </div>
                <h1>aayushkagarwal.xyz</h1>
                <span className="border flex gap-1 font-medium text-sm border-white/30 rounded-lg p-2 justify-center items-center">
                    <TerminalSquare size={17} />
                    zsh
                </span>
            </div>
            <div className="p-2">
                <h1 className="text-sm font-medium  opacity-70 tracking-wide">Get started by typing help command below</h1>
                <span className=" text-xs capitalize font-medium opacity-70 ">Linux enthusiasts i have added a few easter eggs take time to discover</span>
                <br />
                <span className=" italic mb-3 text-xs font-medium opacity-60">Tip : Type any of my project name to navigate to their respective hosted links</span>
                {commands.map((command) => (
                    <div ref={terminalRef} key={command.id} className="mt-2 font-mono flex  justify-between" suppressHydrationWarning>
                        <div className=" w-full">
                            <div className="text-md font-medium opacity-70 flex items-center gap-3 w-full">
                                {" "}
                                <span className=" text-green-500 font-bold text-2xl">{">"}</span> {command.input}
                            </div>
                            <span className="text-sm w-full font-medium opacity-70">{command.output}</span>
                        </div>
                        <span className="text-sm opacity-60">{command.time}</span>
                    </div>
                ))}
                <div className="flex font-mono justify-between items-center text-md">
                    <form className="w-full flex items-center gap-3">
                        <span className=" text-2xl font-bold">{">"}</span>
                        <input type="text" ref={inputRef} value={input} onChange={handleInputChange} onKeyDown={(e) => handleKeyPress(e)} className="bg-transparent w-[90%] outline-none border-none focus:outline-none" />
                    </form>
                    <span className="text-sm opacity-60">{currentTime}</span>
                </div>
            </div>
        </div>
    );
};

export default Terminalcomp;
