from datetime import datetime

from pydantic import BaseModel, Field


class ReviewCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)
    place: str = Field(..., min_length=2, max_length=100)
    rating: int = Field(..., ge=1, le=5)
    review: str = Field(..., min_length=5)


class ReviewResponse(BaseModel):
    id: int
    name: str
    place: str
    rating: int
    review: str
    is_active: bool
    created_at: datetime

    class Config:
        from_attributes = True