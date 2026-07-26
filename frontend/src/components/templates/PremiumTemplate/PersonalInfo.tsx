import type { TemplateProps } from "../../../types/template";
import InfoRow from "../common/InfoRow";
import SectionCard from "../common/SectionCard";

function PersonalInfo({ data }: TemplateProps) {
    return (
        <SectionCard title="Personal Details">
            <InfoRow label="Gender" value={data.gender} />
            <InfoRow label="Age" value={data.age} />
            <InfoRow label="Date of Birth" value={data.dateOfBirth} />
            <InfoRow label="Religion" value={data.religion} />
            <InfoRow label="Caste" value={data.caste} />
            <InfoRow label="Height" value={data.height} />
            <InfoRow label="Weight" value={data.weight} />
        </SectionCard>
    );
}

export default PersonalInfo;