import type { BiodataSchema } from "../../../schemas/biodata.schema";

export type FieldConfig = {
    label: string;
    key: keyof BiodataSchema;
};

export type SectionConfig = {
    title: string;
    fields: FieldConfig[];
};

export const royalSections: SectionConfig[] = [
    {
        title: "Personal Details",
        fields: [
            { label: "Date of Birth", key: "dateOfBirth" },
            { label: "Age", key: "age" },
            { label: "Religion", key: "religion" },
            { label: "Caste", key: "caste" },
            { label: "Height", key: "height" },
            { label: "Weight", key: "weight" },
            { label: "City", key: "city" },
            { label: "State", key: "state" },
        ],
    },
    {
        title: "Family Details",
        fields: [
            { label: "Father's Name", key: "fatherName" },
            { label: "Mother's Name", key: "motherName" },
            { label: "Family Type", key: "familyType" },
            { label: "Siblings", key: "siblings" },
        ],
    },
    {
        title: "Education & Career",
        fields: [
            { label: "Qualification", key: "highestQualification" },
            { label: "Occupation", key: "occupation" },
            { label: "Company", key: "company" },
            { label: "Annual Income", key: "annualIncome" },
        ],
    },
];