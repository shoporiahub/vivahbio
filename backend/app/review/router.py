from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db

from .schema import ReviewCreate, ReviewResponse
from .service import create_review, get_reviews

router = APIRouter(
    prefix="/reviews",
    tags=["Reviews"],
)


@router.post("", response_model=ReviewResponse)
def create_review_api(
    review: ReviewCreate,
    db: Session = Depends(get_db),
):
    return create_review(db, review)


@router.get("", response_model=list[ReviewResponse])
def get_reviews_api(
    db: Session = Depends(get_db),
):
    return get_reviews(db)