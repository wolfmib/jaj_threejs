#filename: python_openai_tts_hello.py

import openai
import os

# openai can not direclty to mp3, 
from pydub import AudioSegment
import io

from dotenv import load_dotenv
import os

load_dotenv()

# Set your OpenAI API key
openai.api_key = os.getenv("OPENAI_API_KEY")

# The text you want to convert to speech
text = "Bonjour, ceci est une démonstration de voix générée par OpenAI."

# Call the OpenAI TTS API (v1/audio/speech)
response = openai.audio.speech.create(
    model="tts-1",
    voice="alloy",  # or "echo", "fable", "onyx", "nova", "shimmer"
    input=text
)


# Convert MP3 to WAV using pydub
mp3_audio = AudioSegment.from_file(io.BytesIO(response.content), format="mp3")
os.makedirs("temp", exist_ok=True)
wav_path = "temp/demo_french.wav"
mp3_audio.export(wav_path, format="wav")

print(f"✅ WAV saved as {wav_path}")



