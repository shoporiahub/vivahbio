from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.database import get_db

from app.contact.schemas import (
    ContactCreate,
    ContactResponse,
)

from app.contact.service import (
    create_contact,
    get_contacts,
)

router = APIRouter(
    prefix="/contact",
    tags=["Contact"],
)


@router.post(
    "",
    response_model=ContactResponse,
)
async def create_contact_message(
    data: ContactCreate,
    db: Session = Depends(get_db),
):
    return await create_contact(db, data)


@router.get(
    "",
    response_model=list[ContactResponse],
)
def list_contacts(
    db: Session = Depends(get_db),
):
    return get_contacts(db)