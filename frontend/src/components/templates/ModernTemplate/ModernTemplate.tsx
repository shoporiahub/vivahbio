import type { TemplateProps } from "../../../types/template";

import Header from "./Header";
import PersonalInfo from "./PersonalInfo";
import FamilyInfo from "./FamilyInfo";
import EducationInfo from "./EducationInfo";
import PartnerPreference from "./PartnerPreference";
import Footer from "./Footer";

function ModernTemplate({ data }: TemplateProps) {
    return (
        <div className="mx-auto min-h-[297mm] w-[210mm] bg-white p-10 shadow-xl">
            <Header data={data} />

            <div className="mt-8 space-y-8">
                <PersonalInfo data={data} />

                <FamilyInfo data={data} />

                <EducationInfo data={data} />

                <PartnerPreference data={data} />
            </div>

            <div className="mt-10">
                <Footer />
            </div>
        </div>
    );
}

export default ModernTemplate;