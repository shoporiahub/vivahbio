from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

# Initialize Cloudinary
import app.core.cloudinary

# Routers
from app.auth.router import router as auth_router
from app.biodata.router import router as biodata_router
from app.upload.router import router as upload_router

from app.route.payment import router as payment_router

from app.contact.router import router as contact_router


app = FastAPI(
    title="DocCraft AI API",
    version="1.0.0",
)


# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://vivahcraft.com",
        "https://www.vivahcraft.com",
        "http://localhost:5173",
        "https://vivahbio-mikxuvb1c-foodfinderhubs-projects.vercel.app",
        "https://vivahbio-j7v9-r06qje152-foodfinderhubs-projects.vercel.app",
        
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Register Routers
app.include_router(auth_router)
app.include_router(biodata_router)
app.include_router(upload_router)
app.include_router(payment_router)
app.include_router(contact_router)



@app.get("/")
def health():
    return {
        "message": "DocCraft AI Backend Running"
    }