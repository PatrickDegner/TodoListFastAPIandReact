import databases

from decouple import config

DATABASE_URL = f"postgresql://{config('DB_USER')}:{config('DB_PASS')}@localhost:5432/todolist"
database = databases.Database(DATABASE_URL)

