import httpx

from app.core.config import settings


async def send_telegram_message(message: str):
    url = f"https://api.telegram.org/bot{settings.telegram_bot_token}/sendMessage"

    payload = {
        "chat_id": settings.telegram_chat_id,
        "text": message,
    }

    async with httpx.AsyncClient() as client:
        response = await client.post(url, json=payload)
        response.raise_for_status()

    return response.json()