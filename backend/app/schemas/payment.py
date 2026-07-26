from pydantic import BaseModel


class CreateOrderRequest(BaseModel):
    item: str