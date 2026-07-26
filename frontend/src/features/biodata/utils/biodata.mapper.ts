import type { BiodataRequest } from "../types/biodata.types";
import type { BiodataSchema } from "../../../schemas/biodata.schema";
import type { Biodata } from "../types/biodata.types";

export function formToBiodataRequest(
    data: BiodataSchema
): BiodataRequest {
    return {
        // Personal Details
        full_name: data.fullName,
        gender: data.gender,
        date_of_birth: data.dateOfBirth,
        age: data.age,

        religion: data.religion,
        caste: data.caste,

        height: data.height,
        weight: Number(data.weight),

        // Contact Details
        mobile: data.mobile,
        email: data.email,

        city: data.city,
        state: data.state,
        country: data.country,

        // Family Details
        father_name: data.fatherName,
        mother_name: data.motherName,
        siblings: data.siblings,
        family_type: data.familyType,

        // Education
        highest_qualification: data.highestQualification,
        college: data.college,
        university: data.university,

        // Career
        occupation: data.occupation,
        company: data.company,
        annual_income: data.annualIncome,

        // Partner Preferences
        preferred_age: data.preferredAge,
        preferred_height: data.preferredHeight,
        preferred_religion: data.preferredReligion,
        preferred_caste: data.preferredCaste,
        preferred_education: data.preferredEducation,
        preferred_occupation: data.preferredOccupation,
        preferred_location: data.preferredLocation,

        // Additional Information
        expectations: data.expectations,

        // Upload will be implemented later
        profile_photo: data.profilePhotoUrl || null,
    };
}

export function biodataToForm(
    biodata: Biodata
): BiodataSchema {
    return {
        fullName: biodata.full_name,
        gender: biodata.gender,
        dateOfBirth: biodata.date_of_birth,
        age: biodata.age ?? 18,

        religion: biodata.religion,
        caste: biodata.caste,

        height: biodata.height,
        weight: biodata.weight,
        mobile: biodata.mobile,
        email: biodata.email,

        city: biodata.city,
        state: biodata.state,
        country: biodata.country,

        fatherName: biodata.father_name,
        motherName: biodata.mother_name,
        siblings: biodata.siblings,
        familyType: biodata.family_type,

        highestQualification: biodata.highest_qualification,
        college: biodata.college,
        university: biodata.university,

        occupation: biodata.occupation,
        company: biodata.company,
        annualIncome: biodata.annual_income,

        preferredAge: biodata.preferred_age,
        preferredHeight: biodata.preferred_height,
        preferredReligion: biodata.preferred_religion,
        preferredCaste: biodata.preferred_caste,
        preferredEducation: biodata.preferred_education,
        preferredOccupation: biodata.preferred_occupation,
        preferredLocation: biodata.preferred_location,

        expectations: biodata.expectations,

        profilePhoto: null,
        profilePhotoUrl: biodata.profile_photo ?? "",
    };
}