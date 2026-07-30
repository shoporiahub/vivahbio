from pydantic import BaseModel
from typing import Literal


class GeneratePdfRequest(BaseModel):
    template: Literal[
        "elegant",
        "modern",
        "royal",
        "luxury",
        "signature",
    ]