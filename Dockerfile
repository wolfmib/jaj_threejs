FROM python:3.10-slim

# Set working directory
WORKDIR /app

# Install ffmpeg (for audio conversion if needed)
RUN apt-get update && \
    apt-get install -y ffmpeg libsm6 libxext6 libgl1 libglib2.0-0 && \
    apt-get clean

# Copy requirements and install
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy your Python app and data
#COPY . .


# Default command (replace with your actual script if different)
CMD ["python", "python_openai_tts_hello.py"]

