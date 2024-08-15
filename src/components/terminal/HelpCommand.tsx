import React from "react";

const HelpCommand = () => {
    return (
        <div className="mt-2 ">
            <h1 className="text-sm font-medium opacity-70">Available commands:</h1>
            <ul className="text-sm font-mono font-semibold tracking-wide flex flex-col gap-2">
                <li className=" mt-2 flex gap-2 items-center">
                    aayush: <span className="opacity-70 text-xs">Displays a brief info about me</span>
                </li>
                <li className="flex items-center gap-2">
                    project: <span className="  opacity-70 text-xs">Navigates to project page</span>
                </li>
                <li className="flex items-center gap-2">
                    project ls: <span className="  opacity-70 text-xs">Lists all my projects</span>
                </li>
                <li className="flex items-center gap-2">
                    about: <span className="opacity-70 text-xs">Displays a brief about myself and my hobbies</span>
                </li>
                <li className="flex items-center gap-2">
                    blogs: <span className=" opacity-70 text-xs">Navigate to blog page</span>
                </li>
                <li className="flex items-center gap-2">
                    clear: <span className=" opacity-70 text-xs">Clears terminal</span>
                </li>
            </ul>
        </div>
    );
};

export default HelpCommand;
