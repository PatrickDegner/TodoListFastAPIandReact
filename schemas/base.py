from pydantic import BaseModel


class BaseTask(BaseModel):
    title: str
    task: str


class TaskIn(BaseTask):
    pass


class TaskOut(BaseModel):
    id: int
    title: str
    task: str
