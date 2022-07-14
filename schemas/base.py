from pydantic import BaseModel


class BaseTask(BaseModel):
    id: int


class TaskOut(BaseTask):
    title: str
    task: str


class TaskIn(BaseModel):
    title: str
    task: str



