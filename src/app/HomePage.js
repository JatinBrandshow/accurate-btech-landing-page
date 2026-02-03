import React from "react";
import MainSection from "@/components/MainSection";
import Accreditation from "@/components/Accreditation";
import ProgrammeOverview from "@/components/ProgrammeOverview";
import ProgrammeHighlights from "@/components/ProgrammeHighlights";
import WhyUs from "@/components/WhyUs";
import ProgrammeCurriculum from "@/components/ProgrammeCurriculum";

export default function HomePage() {
    return (
        <>
            <MainSection />
            <Accreditation />
            <ProgrammeOverview />
            <ProgrammeHighlights />
            <WhyUs />
            <ProgrammeCurriculum />
        </>
    );
};
