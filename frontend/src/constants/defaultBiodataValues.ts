import type { BiodataSchema } from "../schemas/biodata.schema";

export const defaultBiodataValues: BiodataSchema = {
    // Personal Details
    fullName: "",
    gender: "",
    dateOfBirth: "",
    age: 18,

    religion: "",
    caste: "",

    height: "",
    weight: 20,

    // Contact Details
    mobile: "",
    email: "",

    city: "",
    state: "",
    country: "",

    // Family Details
    fatherName: "",
    motherName: "",
    siblings: "",
    familyType: "",

    // Education
    highestQualification: "",
    college: "",
    university: "",

    // Career
    occupation: "",
    company: "",
    annualIncome: "",

    // Partner Preferences
    preferredAge: "",
    preferredHeight: "",
    preferredReligion: "",
    preferredCaste: "",
    preferredEducation: "",
    preferredOccupation: "",
    preferredLocation: "",

    // Additional Information
    expectations: "",

    // Profile Photo
    profilePhoto: null,
    profilePhotoUrl: "",
};