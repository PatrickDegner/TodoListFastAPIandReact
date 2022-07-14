from fastapi import APIRouter
from resources import task

api_router = APIRouter()
api_router.include_router(task.router)
