from sqlalchemy.orm import Session

from app.auth.schemas import LoginRequest, RegisterRequest
from app.auth.security import (
    create_access_token,
    hash_password,
    verify_password,
)
from app.models.user import User


class AuthService:
    def __init__(self, db: Session):
        self.db = db

    def register(self, data: RegisterRequest):
        # Check email
        existing_email = (
            self.db.query(User)
            .filter(User.email == data.email)
            .first()
        )

        if existing_email:
            raise ValueError("Email already registered")

        # Check mobile
        existing_mobile = (
            self.db.query(User)
            .filter(User.mobile == data.mobile)
            .first()
        )

        if existing_mobile:
            raise ValueError("Mobile number already registered")

        # Create user
        user = User(
            name=data.name,
            email=data.email,
            mobile=data.mobile,
            password_hash=hash_password(data.password),
        )

        self.db.add(user)
        self.db.commit()
        self.db.refresh(user)

        token = create_access_token(
            {
                "sub": str(user.id),
            }
        )

        return {
            "access_token": token,
            "token_type": "bearer",
            "user": user,
        }

    def login(self, data: LoginRequest):
        user = (
            self.db.query(User)
            .filter(User.mobile == data.mobile)
            .first()
        )

        if not user:
            raise ValueError("Invalid mobile number or password")

        if not verify_password(
            data.password,
            user.password_hash,
        ):
            raise ValueError("Invalid mobile number or password")

        token = create_access_token(
            {
                "sub": str(user.id),
            }
        )

        return {
            "access_token": token,
            "token_type": "bearer",
            "user": user,
        }