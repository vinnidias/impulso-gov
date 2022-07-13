from fastapi import FastAPI
from datetime import datetime

app = FastAPI()

@app.get("/")
def server_is_running():
  return {
    "message": "server is running"
  }

@app.get("/currenttime")
def current_time():
  time_now =  datetime.now().strftime("%H:%M:%S")
  return {
    "current_time": time_now
  }
