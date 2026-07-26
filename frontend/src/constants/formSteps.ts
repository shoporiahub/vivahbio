import type { ComponentType } from "react";
import type { FieldPath } from "react-hook-form";

import type { BiodataSchema } from "../schemas/biodata.schema";

import PersonalDetails from "../components/biodata/PersonalDetails";
import ContactDetails from "../components/biodata/ContactDetails";
import FamilyDetails from "../components/biodata/FamilyDetails";
import EducationDetails from "../components/biodata/EducationDetails";
import PartnerPreferences from "../components/biodata/PartnerPreferences";
import PhotoUpload from "../components/biodata/PhotoUpload";
import Review from "../components/biodata/Review";

export type FormStep = {
    title: string;
    description: string;
    component: ComponentType;
    fields: FieldPath<BiodataSchema>[];
};

export const FORM_STEPS: FormStep[] = [
    {
        title: "Personal",
        description: "Personal Details",
        component: PersonalDetails,
        fields: [
            "fullName",
            "gender",
            "dateOfBirth",
            "age",
            "religion",
            "caste",
            "height",
            "weight",
        ],
    },
    {
        title: "Contact",
        description: "Contact Information",
        component: ContactDetails,
        fields: [
            "mobile",
            "email",
            "city",
            "state",
            "country",
        ],
    },
    {
        title: "Family",
        description: "Family Details",
        component: FamilyDetails,
        fields: [
            "fatherName",
            "motherName",
            "siblings",
            "familyType",
        ],
    },
    {
        title: "Education",
        description: "Education & Career",
        component: EducationDetails,
        fields: [
            "highestQualification",
            "college",
            "university",
            "occupation",
            "company",
            "annualIncome",
        ],
    },
    {
        title: "Partner",
        description: "Partner Preferences",
        component: PartnerPreferences,
        fields: [
            "preferredAge",
            "preferredHeight",
            "preferredReligion",
            "preferredCaste",
            "preferredEducation",
            "preferredOccupation",
            "preferredLocation",
            "expectations",
        ],
    },
    {
        title: "Photo",
        description: "Upload Profile Photo",
        component: PhotoUpload,
        fields: ["profilePhoto"],
    },
    {
        title: "Review",
        description: "Review & Generate",
        component: Review,
        fields: [],
    },
];