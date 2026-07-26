export const BIODATA_STEPS = [
    "Personal",
    "Contact",
    "Family",
    "Education & Career",
    "Partner Preferences",
    "Review",
] as const;

export type BiodataStep = (typeof BIODATA_STEPS)[number];