import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";

interface CaseStudy {
    id: string;
    title: string;
    summary: string;
    category: string;
    author: {
        name: string;
        role: string;
        avatar: string;
    };
    publishedAt: string;
    metrics: {
        views: number;
        readTime: number;
    };
    tags: string[];
    heroImage: string;
    content: {
        sections: Array<{
            type: string;
            content?: string;
            items?: string[];
            src?: string;
            alt?: string;
            caption?: string;
            headers?: string[];
            rows?: Array<string[]>;
        }>;
    };
}

interface CaseStudyPageProps {
    caseStudy: CaseStudy;
}

const CaseStudyPage: React.FC<CaseStudyPageProps> = ({ caseStudy }) => {
    if (!caseStudy) {
        notFound();
        return null;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 dark:bg-gray-900 bg-white min-h-screen">
            {/* Hero Image Banner */}
            {/* <div className="relative w-full h-80 mb-8">
                <Image src={caseStudy.heroImage} alt={caseStudy.title} fill className="object-cover rounded-lg" priority />
            </div> */}

            {/* Title and Metadata */}
            <h1 className="text-4xl font-bold dark:text-white text-gray-900 mb-4">{caseStudy.title}</h1>
            <div className="flex items-center gap-4 mb-6">
                {/* <Image src={caseStudy.author.avatar} alt={caseStudy.author.name} width={40} height={40} className="rounded-full" /> */}
                <div>
                    <p className="text-sm font-medium dark:text-gray-300 text-gray-700">
                        {caseStudy.author.name} • {caseStudy.author.role}
                    </p>
                    <p className="text-sm dark:text-gray-400 text-gray-600">
                        Published on {new Date(caseStudy.publishedAt).toLocaleDateString()} • {caseStudy.metrics.readTime} min read • {caseStudy.metrics.views} views
                    </p>
                </div>
            </div>

            {/* Tags and Category */}
            <div className="flex flex-wrap gap-2 mb-6">
                <span className="text-xs rounded-full font-semibold dark:text-white text-black px-3 py-1 dark:bg-white/20 bg-black/20">{caseStudy.category}</span>
                {caseStudy.tags.map((tag) => (
                    <span key={tag} className="text-xs rounded-full font-semibold dark:text-white text-black px-3 py-1 dark:bg-white/20 bg-black/20">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Summary */}
            <p className="text-lg dark:text-gray-300 text-gray-700 mb-8">{caseStudy.summary}</p>

            {/* Content Sections */}
            <div className="prose dark:prose-invert max-w-none">
                {caseStudy.content.sections.map((section, index) => {
                    switch (section.type) {
                        case "heading":
                            return (
                                <h2 key={index} className="text-2xl font-semibold dark:text-white text-gray-900 mt-8 mb-4">
                                    {section.content}
                                </h2>
                            );
                        case "paragraph":
                            return (
                                <p key={index} className="text-base dark:text-gray-300 text-gray-700 mb-4">
                                    {section.content}
                                </p>
                            );
                        case "list":
                            return (
                                <ul key={index} className="list-disc pl-6 mb-4">
                                    {section.items?.map((item, i) => (
                                        <li key={i} className="text-base dark:text-gray-300 text-gray-700">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            );
                        // case "image":
                        //     return (
                        //         <figure key={index} className="my-6">
                        //             <Image src={section.src || "/api/placeholder/600/300"} alt={section.alt || "Image"} width={600} height={300} className="rounded-lg" />
                        //             {section.caption && <figcaption className="text-sm dark:text-gray-400 text-gray-600 mt-2">{section.caption}</figcaption>}
                        //         </figure>
                        //     );
                        case "table":
                            return (
                                <div key={index} className="overflow-x-auto mb-6">
                                    <table className="w-full text-left border-collapse">
                                        <thead>
                                            <tr>
                                                {section.headers?.map((header, i) => (
                                                    <th key={i} className="border-b dark:border-gray-700 border-gray-300 py-2 px-4 font-semibold dark:text-white text-gray-900">
                                                        {header}
                                                    </th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {section.rows?.map((row, i) => (
                                                <tr key={i}>
                                                    {row.map((cell, j) => (
                                                        <td key={j} className="border-b dark:border-gray-700 border-gray-300 py-2 px-4 dark:text-gray-300 text-gray-700">
                                                            {cell}
                                                        </td>
                                                    ))}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            );
                        default:
                            return null;
                    }
                })}
            </div>
        </div>
    );
};

export default CaseStudyPage;
