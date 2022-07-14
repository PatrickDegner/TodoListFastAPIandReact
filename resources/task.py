from fastapi import APIRouter

from db import database
from models.todo import task
from schemas.base import TaskIn, TaskOut

router = APIRouter(tags=["Tasks"])


@router.get("/task/")
async def get_all_tasks():
    return await database.fetch_all(task.select())


@router.post("/task/", response_model=TaskOut)
async def create_task(data: TaskIn):
    id_ = await database.execute(task.insert().values(**data.dict()))
    return await database.fetch_one(task.select().where(task.c.id == id_))
