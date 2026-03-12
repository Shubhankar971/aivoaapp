from fastapi import FastAPI

from routers import interaction_router
from routers import ai_router

app = FastAPI()

app.include_router(interaction_router.router)
app.include_router(ai_router.router)