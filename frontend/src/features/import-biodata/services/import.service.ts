import api from "../../../services/api";

export interface ImportedBiodata {
    full_name?: string;
    gender?: string;
    date_of_birth?: string;
    age?: number;
    religion?: string;
    caste?: string;
    sub_caste?: string;
    height?: string;
    weight?: string;
    complexion?: string;
    city?: string;
    state?: string;
    country?: string;
    father_name?: string;
    mother_name?: string;
    siblings?: string;
    family_type?: string;
    qualification?: string;
    occupation?: string;
    company?: string;
    annual_income?: string;
    mobile?: string;
    email?: string;
}

export async function importBiodata(file: File) {
    const formData = new FormData();

    formData.append("file", file);

    const response = await api.post(
        "/biodata/import",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        }
    );

    return response.data as ImportedBiodata;
}