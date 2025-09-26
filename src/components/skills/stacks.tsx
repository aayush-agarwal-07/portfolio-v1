"use client";

import React, { useRef } from "react";
import { Cpu } from "lucide-react";
import Image from "next/image";
import type { StaticImageData } from "next/image";

import ConnectionLine from "./connection-line";

import { documentation_knowledge, prototyping, experimentation, customer_feedback, analytics, collaboration_communication, frameworks_methods, ai, roadmapping_tools, pm_resources, project_management, design_collaboration, user_research, market_research } from "@/assets/skills/index";
import { cn } from "@/lib/utils";

type Tech = {
    title: string;
    image: string | StaticImageData; // <-- allow both
    color: string;
};

type TechBoxProps = {
    pinId: string;
    title: string;
    image: string | StaticImageData; // <-- same here
    color: string;
    boxRef: React.RefObject<HTMLDivElement>;
};

const TechBox: React.FC<TechBoxProps> = (props) => {
    const direction = props.pinId.split("-")[0];
    const borderMap: Record<string, string> = {
        stage1: "only-bottom",
        stage2: "nothing",
        stage3: "nothing",
        stage4: "only-top",
    };

    const marginMap: Record<string, string> = {
        stage1: "-mt-8",
        stage2: "-mt-7",
        stage3: "-mt-9",
        stage4: "-mt-2",
    };

    return (
        <div id={props.pinId.replace("pin", "div")} ref={props.boxRef} className={cn("relative flex-col w-36 h-36 ", borderMap[direction] || "")}>
            <Image src={props.image} width={300} height={300} alt={props.title} className="rounded-xl scale-50" />
            <p className={cn("text-center text-sm font-medium text-gray-800 dark:text-white whitespace-pre-line", marginMap[direction] || "-mt-7")}>{props.title}</p>
        </div>
    );
};

const renderTechBoxes = (techArray: Tech[], idPrefix: string, refs: React.RefObject<HTMLDivElement>[]) => {
    return (
        <div className="w-full flex justify-between items-center">
            {techArray.map((tech, idx) => {
                return <TechBox key={`${idPrefix}-${idx + 1}`} pinId={`${idPrefix}-pin-${idx + 1}`} title={tech.title} image={tech.image} color={tech.color} boxRef={refs[idx]} />;
            })}
        </div>
    );
};

export const TechStack = () => {
    const refs = {
        stage1: {
            techbox: [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)],
            pins: [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)],
        },
        stage2: {
            techbox: [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)],
            pins: [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)],
        },
        stage3: {
            techbox: [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)],
            pins: [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)],
        },
        stage4: {
            techbox: [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)],
            pins: [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)],
        },
    };
    return (
        <section className="relative w-full hidden md:flex flex-col justify-between items-center p-5 gap-8" style={{ padding: "0" }}>
            {renderTechBoxes(techs.stage1, "stage1", refs.stage1.techbox)}
            {renderTechBoxes(techs.stage2, "stage2", refs.stage2.techbox)}
            {renderTechBoxes(techs.stage3, "stage3", refs.stage3.techbox)}
            {renderTechBoxes(techs.stage4, "stage4", refs.stage4.techbox)}
            <div id="cpu" className="absolute w-40 h-20 rounded-2xl  flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-muted z-20">
                {renderPins(5, "stage1", refs.stage1.pins)}
                {renderPins(2, "stage2", refs.stage2.pins)}
                {renderPins(2, "stage3", refs.stage3.pins)}
                {renderPins(5, "stage4", refs.stage4.pins)}

                <div id="placeholder" className=" absolute w-[10rem] flex h-20 rounded-2xl border-2 dark:border-white/40 border-black/40  justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-muted z-20">
                    <h1 className="font-bold uppercase flex items-center gap-2 tracking-wider">
                        <Cpu />
                        PM Toolkit
                    </h1>
                </div>
            </div>
            {Object.keys(refs).map((key) => {
                const techboxRefs = refs[key as keyof typeof refs].techbox;
                const pinRefs = refs[key as keyof typeof refs].pins;
                return (
                    <React.Fragment key={key}>
                        {techboxRefs.map((techboxRef, idx) => (
                            <ConnectionLine key={`${key}-line-${idx + 1}`} div1Ref={techboxRef} div2Ref={pinRefs[idx]} color={techs[key as keyof typeof techs][idx].color} direction={key as keyof typeof techs} />
                        ))}
                    </React.Fragment>
                );
            })}
        </section>
    );
};

const renderPins = (pinCount: number, idPrefix: string, refs: React.RefObject<HTMLDivElement>[]) => {
    return (
        <div id={idPrefix} className={cn("absolute justify-evenly items-center w-full -z-10", idPrefix === "stage1" || idPrefix === "stage4" ? "flex" : "flex justify-between w-[115%]", idPrefix === "stage1" ? "top-0 -translate-y-3 " : "", idPrefix === "stage2" ? "top-0 translate-y-4" : "", idPrefix === "stage3" ? "bottom-0 -translate-y-4" : "", idPrefix === "stage4" ? "bottom-0 translate-y-3" : "")}>
            {Array.from({ length: pinCount }, (_, idx) => {
                return <div key={`${idPrefix}-pin-${idx + 1}`} ref={refs[idx]} className={cn("pin", idPrefix === "stage1" || idPrefix === "stage4" ? "w-2 h-6" : "w-6 h-2")}></div>;
            })}
        </div>
    );
};

export const techs = {
    stage1: [
        {
            title: "Roadmapping Tools",
            image: roadmapping_tools,
            color: "#61DAFB",
        },
        {
            title: "Prototyping",
            image: prototyping,
            color: "#bdbdbd",
        },
        {
            title: "User Research",
            image: user_research,
            color: "#007acc",
        },
        {
            title: "Design Collaboration",
            image: design_collaboration,
            color: "#38b2ac",
        },
        {
            title: "AI & Productivity",
            image: ai,
            color: "#bdbdbd",
        },
    ],
    stage2: [
        {
            title: "Documentation & Knowledge",
            image: documentation_knowledge,
            color: "#F03C2E",
        },
        {
            title: "Project\nManagement",
            image: project_management,
            color: "#103950",
        },
    ],
    stage3: [
        {
            title: "Experimentation",
            image: experimentation,
            color: "#45A538",
        },
        {
            title: "Customer Feedback",
            image: customer_feedback,
            color: "#FD9A01",
        },
    ],
    stage4: [
        {
            title: "Analytics & Data",
            image: analytics,
            color: "#83CD29",
        },
        {
            title: "Collaboration & Communication",
            image: collaboration_communication,
            color: "#764abc",
        },
        {
            title: "Frameworks & Methods",
            image: frameworks_methods,
            color: "#1371B6",
        },
        {
            title: "PM Learning Resources",
            image: pm_resources,
            color: "#F03C2E",
        },
        {
            title: "Market Research",
            image: market_research,
            color: "#00acd7",
        },
    ],
};
