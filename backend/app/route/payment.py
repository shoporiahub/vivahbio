from fastapi import APIRouter, HTTPException

from app.schemas.payment import CreateOrderRequest
from app.services.payment import create_order

router = APIRouter(
    prefix="/payment",
    tags=["Payment"],
)


@router.post("/create-order")
def create_payment_order(request: CreateOrderRequest):
    try:
        return create_order(request.item)
    except ValueError as e:
        raise HTTPException(
            status_code=400,
            detail=str(e),
        )