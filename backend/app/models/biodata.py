from datetime import datetime

from sqlalchemy import DateTime, ForeignKey, Integer, String
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.core.database import Base


class Biodata(Base):
    __tablename__ = "biodatas"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)

    user_id: Mapped[int] = mapped_column(
        ForeignKey("users.id", ondelete="CASCADE"),
        unique=True,
        nullable=False,
    )

    # Personal Details
    full_name: Mapped[str] = mapped_column(String(100))
    gender: Mapped[str] = mapped_column(String(20))
    date_of_birth: Mapped[str] = mapped_column(String(30))
    age: Mapped[int] = mapped_column(Integer)

    religion: Mapped[str] = mapped_column(String(50))
    caste: Mapped[str] = mapped_column(String(100))

    height: Mapped[str] = mapped_column(String(30))
    weight: Mapped[int] = mapped_column(Integer)

    # Contact Details
    mobile: Mapped[str] = mapped_column(String(20))
    email: Mapped[str] = mapped_column(String(100))

    city: Mapped[str] = mapped_column(String(100))
    state: Mapped[str] = mapped_column(String(100))
    country: Mapped[str] = mapped_column(String(100))

    # Family Details
    father_name: Mapped[str] = mapped_column(String(100))
    mother_name: Mapped[str] = mapped_column(String(100))
    siblings: Mapped[str] = mapped_column(String(100))
    family_type: Mapped[str] = mapped_column(String(50))

    # Education
    highest_qualification: Mapped[str] = mapped_column(String(100))
    college: Mapped[str] = mapped_column(String(150))
    university: Mapped[str] = mapped_column(String(150))

    # Career
    occupation: Mapped[str] = mapped_column(String(100))
    company: Mapped[str] = mapped_column(String(150))
    annual_income: Mapped[str] = mapped_column(String(100))

    # Partner Preferences
    preferred_age: Mapped[str] = mapped_column(String(50))

    preferred_height: Mapped[str | None] = mapped_column(
        String(50),
        nullable=True,
    )

    preferred_religion: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True,
    )

    preferred_caste: Mapped[str | None] = mapped_column(
        String(100),
        nullable=True,
    )

    preferred_education: Mapped[str] = mapped_column(String(100))

    preferred_occupation: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True,
    )

    preferred_location: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True,
    )

    # Additional Information
    expectations: Mapped[str | None] = mapped_column(
        String(1000),
        nullable=True,
    )

    # Profile Photo
    profile_photo: Mapped[str | None] = mapped_column(
        String(500),
        nullable=True,
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
    )

    updated_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
    )

    user = relationship(
        "User",
        back_populates="biodata",
    )