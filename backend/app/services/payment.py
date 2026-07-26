import razorpay

from app.core.config import settings

client = razorpay.Client(
    auth=(
        settings.razorpay_key_id,
        settings.razorpay_key_secret,
    )
)

# Never trust prices from the frontend.
ITEM_PRICES = {
    "elegant": 149,
    "modern": 249,
    "royal": 149,
    "luxury": 299,
    "signature": 499,
    "premium": 399,
    "ultimate": 699,
}


def create_order(item: str):
    if item not in ITEM_PRICES:
        raise ValueError("Invalid item")

    amount = ITEM_PRICES[item] * 100  # Razorpay expects paise

    order = client.order.create(
        {
            "amount": amount,
            "currency": "INR",
            "payment_capture": 1,
        }
    )

    return {
        "key": settings.razorpay_key_id,
        "order_id": order["id"],
        "amount": amount,
        "currency": "INR",
        "item": item,
    }