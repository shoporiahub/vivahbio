export interface Biodata {
  id: number;
  user_id: number;

  // Personal Details
  full_name: string;
  gender: string;
  date_of_birth: string;
  age: number;

  religion: string;
  caste: string;

  height: string;
  weight: number;

  // Contact Details
  mobile: string;
  email: string;

  city: string;
  state: string;
  country: string;

  // Family Details
  father_name: string;
  mother_name: string;
  siblings: string;
  family_type: string;

  // Education
  highest_qualification: string;
  college: string;
  university: string;

  // Career
  occupation: string;
  company: string;
  annual_income: string;

  // Partner Preferences
  preferred_age: string;
  preferred_height: string;
  preferred_religion: string;
  preferred_caste?: string;
  preferred_education: string;
  preferred_occupation?: string;
  preferred_location: string;

  // Additional Information
expectations?: string;

  // Profile Photo (URL or file path)
  profile_photo: string | null;

  created_at: string;
  updated_at: string;
}

export interface BiodataRequest {
  // Personal Details
  full_name: string;
  gender: string;
  date_of_birth: string;
  age: number;

  religion: string;
  caste: string;

  height: string;
  weight: number;

  // Contact Details
  mobile: string;
  email: string;

  city: string;
  state: string;
  country: string;

  // Family Details
  father_name: string;
  mother_name: string;
  siblings: string;
  family_type: string;

  // Education
  highest_qualification: string;
  college: string;
  university: string;

  // Career
  occupation: string;
  company: string;
  annual_income: string;

  // Partner Preferences
  preferred_age: string;
  preferred_height: string;
  preferred_religion: string;
  preferred_caste?: string;
  preferred_education: string;
  preferred_occupation?: string;
  preferred_location: string;

  // Additional Information
  expectations?: string;

  // Profile Photo (URL or file path)
  profile_photo: string | null;
}

export {};