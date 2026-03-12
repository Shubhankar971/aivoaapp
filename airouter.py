from fastapi import APIRouter
from services.groq_service import extract_interaction

router = APIRouter()

@router.post("/ai/extract")

async def extract(data:dict):

    text = data["conversation_text"]

    return extract_interaction(text)