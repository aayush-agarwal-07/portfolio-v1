import CaseStudyPage from "@/components/CaseStudyPage";
import caseStudyContent from "@/data/caseStudyContent.json";

async function CaseStudyPageWrapper({ params }: { params: { id: string } }) {
    const caseStudy = caseStudyContent[params.id as keyof typeof caseStudyContent];
    if (!caseStudy) {
        return <div>404 - Case Study Not Found</div>; // Custom 404 for now; you can use next/navigation's notFound()
    }

    return <CaseStudyPage caseStudy={caseStudy} />;
}

export async function generateStaticParams() {
    return Object.keys(caseStudyContent).map((id) => ({
        id,
    }));
}

export default CaseStudyPageWrapper;
