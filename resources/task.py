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


@router.get("/task/{id}/", response_model=TaskOut)
async def get_single_task(id: int):
    return await database.fetch_one(task.select().where(task.c.id == id))


@router.put("/task/{id}/", response_model=TaskOut)
async def update_single_task(id: int, data: TaskIn):
    await database.execute(task.update().values(**data.dict()).where(task.c.id == id))
    return await database.fetch_one(task.select().where(task.c.id == id))


@router.delete("/task/{id}/")
async def delete_single_task(id: int):
    await database.execute(task.delete().where(task.c.id == id))
    return

