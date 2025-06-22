# filename: python_9527_terminal_server.py

from flask import Flask
from flask_socketio import SocketIO, emit
import subprocess

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

@socketio.on('connect')
def handle_connect():
    print("[+] Client connected")

@socketio.on('disconnect')
def handle_disconnect():
    print("[-] Client disconnected")

@socketio.on('run_command')
def handle_command(cmd):
    print("[>] Received command:", cmd)
    try:
        output = subprocess.check_output(cmd, shell=True, stderr=subprocess.STDOUT, universal_newlines=True)
    except subprocess.CalledProcessError as e:
        output = e.output
    print(f"command result >> {output}")
    emit('command_result', output)

if __name__ == '__main__':
    print("🌐 Starting Terminal Server on http://localhost:9527")
    socketio.run(app, host='0.0.0.0', port=9527)

