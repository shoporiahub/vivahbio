from sqlalchemy.orm import Session

from app.models.contact import ContactMessage
from app.contact.schemas import ContactCreate
from app.services.telegram import send_telegram_message


async def create_contact(db: Session, data: ContactCreate):

    contact = ContactMessage(**data.model_dump())

    db.add(contact)
    db.commit()
    db.refresh(contact)

    message = f"""
📩 New Contact Message

👤 Name: {contact.full_name}

📧 Email: {contact.email}

📝 Subject: {contact.subject}

💬 Message:
{contact.message}
"""

    try:
        await send_telegram_message(message)
    except Exception as e:
        # Don't fail the API if Telegram is unavailable
        print(f"Telegram notification failed: {e}")

    return contact


def get_contacts(db: Session):
    return (
        db.query(ContactMessage)
        .order_by(ContactMessage.created_at.desc())
        .all()
    )