import type { BiodataFormValues } from "../../../schemas/biodata.schema";
import type { ImportedBiodata } from "../../import-biodata/services/import.service";
import { defaultBiodataValues } from "../../../constants/defaultBiodataValues";

export function importedBiodataToForm(
    data: ImportedBiodata
): BiodataFormValues {
    return {
        ...defaultBiodataValues,

        fullName: data.full_name ?? "",

        gender: data.gender ?? "",

        dateOfBirth: data.date_of_birth ?? "",

        age: data.age ?? 18,

        religion: data.religion ?? "",

        caste: data.caste ?? "",

        height: data.height ?? "",

        weight: data.weight ? Number(data.weight) : 20,

        mobile: data.mobile ?? "",

        email: data.email ?? "",

        city: data.city ?? "",

        state: data.state ?? "",

        country: data.country ?? "",

        fatherName: data.father_name ?? "",

        motherName: data.mother_name ?? "",

        siblings: data.siblings ?? "",

        familyType: data.family_type ?? "",

        highestQualification: data.qualification ?? "",

        occupation: data.occupation ?? "",

        college: "",

        university: "",

        company: data.company ?? "",

        annualIncome: data.annual_income ?? "",

        preferredAge: "",

        preferredHeight: "",

        preferredReligion: "",

        preferredCaste: "",

        preferredEducation: "",

        preferredOccupation: "",

        preferredLocation: "",

        expectations: "",

        profilePhoto: null,

        profilePhotoUrl: undefined,
    };
}