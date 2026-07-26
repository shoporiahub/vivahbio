from datetime import datetime

from pydantic import BaseModel, EmailStr


class ContactCreate(BaseModel):
    full_name: str
    email: EmailStr
    subject: str
    message: str


class ContactResponse(ContactCreate):
    id: int
    created_at: datetime

    model_config = {
        "from_attributes": True
    }