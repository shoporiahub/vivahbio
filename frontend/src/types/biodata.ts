export type BiodataFormData = {
    // Personal Details
    fullName: string;
    gender: string;
    dateOfBirth: string;
    age: number;
    religion: string;
    caste: string;
    height: string;
    weight: string;

    // Contact Details
    mobile: string;
    email: string;
    city: string;
    state: string;
    country: string;

    // Family Details
    fatherName: string;
    motherName: string;
    siblings: string;
    familyType: string;

    // Education
    highestQualification: string;
    college: string;
    university: string;

    // Career
    occupation: string;
    company: string;
    annualIncome: string;

    // Partner Preferences
    preferredAge: string;
    preferredEducation: string;
    preferredLocation: string;

    // Photo
    profilePhoto: File | null;
};