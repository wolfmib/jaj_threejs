# client_test.py
import socketio
import time

sio = socketio.Client()

my_cmd = input("type termianl command for test terminal_server:\n")
print(f"Ton command est: {my_cmd}")


@sio.on('connect')
def on_connect():
    print("✅ Connected to server")
    sio.emit('run_command', my_cmd) #ls -l

@sio.on('command_result')
def on_result(data):
    print("📦 Terminal Output:\n", data)
    # Delay to ensure output is fully printed
    time.sleep(1)
    sio.disconnect()

sio.connect('http://localhost:9527')
sio.wait()

