from datetime import datetime

from pydantic import BaseModel, ConfigDict


class BiodataCreate(BaseModel):
    # Personal Details
    full_name: str
    gender: str
    date_of_birth: str
    age: int

    religion: str
    caste: str

    height: str
    weight: int

    # Contact Details
    mobile: str
    email: str

    city: str
    state: str
    country: str

    # Family Details
    father_name: str
    mother_name: str
    siblings: str
    family_type: str

    # Education
    highest_qualification: str
    college: str
    university: str

    # Career
    occupation: str
    company: str
    annual_income: str

    # Partner Preferences
    preferred_age: str
    preferred_height: str | None = None
    preferred_religion: str | None = None
    preferred_caste: str | None = None
    preferred_education: str
    preferred_occupation: str | None = None
    preferred_location: str | None = None

    # Additional Information
    expectations: str | None = None

    # Profile Photo
    profile_photo: str | None = None


class BiodataUpdate(BiodataCreate):
    pass


class BiodataResponse(BiodataCreate):
    id: int
    user_id: int
    created_at: datetime
    updated_at: datetime

    model_config = ConfigDict(from_attributes=True)