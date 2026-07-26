from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from app.auth.dependencies import get_current_user
from app.core.database import get_db
from app.models.user import User

from .schemas import BiodataCreate, BiodataResponse
from .service import BiodataService

print("✅ Biodata router loaded")

router = APIRouter(
    prefix="/biodata",
    tags=["Biodata"],
)


@router.get(
    "/me",
    response_model=BiodataResponse,
)
def me(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = BiodataService(db)

    biodata = service.get_my_biodata(current_user)

    if biodata is None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Biodata not found",
        )

    return biodata


@router.post(
    "",
    response_model=BiodataResponse,
)
def save(
    request: BiodataCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):
    service = BiodataService(db)

    return service.create_or_update_biodata(
        current_user,
        request,
    )

print(router.routes)