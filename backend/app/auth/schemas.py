from pydantic import BaseModel, ConfigDict, EmailStr, Field


class RegisterRequest(BaseModel):
    name: str = Field(..., min_length=2, max_length=100)

    email: EmailStr

    mobile: str = Field(
        ...,
        min_length=10,
        max_length=10,
        pattern=r"^[6-9]\d{9}$",
    )

    password: str = Field(
        ...,
        min_length=6,
        max_length=100,
    )


class LoginRequest(BaseModel):
    mobile: str = Field(
        ...,
        min_length=10,
        max_length=10,
        pattern=r"^[6-9]\d{9}$",
    )

    password: str = Field(
        ...,
        min_length=6,
    )


class UserResponse(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    email: str
    mobile: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"
    user: UserResponse