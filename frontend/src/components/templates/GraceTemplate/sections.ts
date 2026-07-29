import type { BiodataSchema } from "../../../schemas/biodata.schema";

type Field = {
    key: keyof BiodataSchema;
    label: string;
};

type Section = {
    title: string;
    fields: Field[];
};

export const template04Sections: Section[] = [
    {
        title: "PERSONAL DETAILS",
        fields: [
            { key: "fullName", label: "Full Name" },
            { key: "dateOfBirth", label: "Date of Birth" },
            { key: "age", label: "Age" },
            { key: "religion", label: "Religion" },
            { key: "caste", label: "Caste" },
            { key: "height", label: "Height" },
            { key: "weight", label: "Weight" },
            { key: "city", label: "City" },
            { key: "state", label: "State" },
        ],
    },
    {
        title: "FAMILY DETAILS",
        fields: [
            { key: "fatherName", label: "Father's Name" },
            { key: "motherName", label: "Mother's Name" },
            { key: "familyType", label: "Family Type" },
            { key: "siblings", label: "Siblings" },
        ],
    },
    {
        title: "EDUCATION & CAREER",
        fields: [
            { key: "highestQualification", label: "Qualification" },
            { key: "occupation", label: "Occupation" },
            { key: "company", label: "Company" },
            { key: "annualIncome", label: "Annual Income" },
        ],
    },
];