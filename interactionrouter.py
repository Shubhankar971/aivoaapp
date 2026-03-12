from fastapi import APIRouter
from services.interaction_service import save_interaction

router = APIRouter()

@router.post("/interactions")

async def create_interaction(data:dict):

    result = save_interaction(data)

    return {"status":"saved"}