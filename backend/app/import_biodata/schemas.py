from typing import Optional

from pydantic import BaseModel


class ImportedBiodata(BaseModel):
    full_name: Optional[str] = None
    gender: Optional[str] = None

    date_of_birth: Optional[str] = None
    age: Optional[int] = None

    religion: Optional[str] = None
    caste: Optional[str] = None
    sub_caste: Optional[str] = None

    height: Optional[str] = None
    weight: Optional[str] = None
    complexion: Optional[str] = None

    city: Optional[str] = None
    state: Optional[str] = None
    country: Optional[str] = None

    father_name: Optional[str] = None
    mother_name: Optional[str] = None
    siblings: Optional[str] = None
    family_type: Optional[str] = None

    qualification: Optional[str] = None
    occupation: Optional[str] = None
    company: Optional[str] = None
    annual_income: Optional[str] = None

    mobile: Optional[str] = None
    email: Optional[str] = None