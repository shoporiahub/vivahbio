from sqlalchemy.orm import Session

from .model import Review
from .schema import ReviewCreate


def create_review(db: Session, review: ReviewCreate):
    new_review = Review(**review.model_dump())

    db.add(new_review)
    db.commit()
    db.refresh(new_review)

    return new_review


def get_reviews(db: Session):
    return (
        db.query(Review)
        .filter(Review.is_active == True)
        .order_by(Review.created_at.desc())
        .all()
    )