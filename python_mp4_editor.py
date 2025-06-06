
from moviepy import VideoFileClip, concatenate_videoclips


# Load your original video
input_video = "input.mov"
clip = VideoFileClip(input_video)

# Define your segments
cut_ranges = [
    {"start": 20, "end": 37},
    {"start": 91, "end": 111}
]

# Extract and collect each cut segment
clips = [clip.subclip(r["start"], r["end"]) for r in cut_ranges]

# Concatenate them , chang ehere fuck you
final_clip = concatenate_videoclips(clips)

# Export final output
final_clip.write_videofile("short_ready.mp4", codec="libx264", audio_codec="aac")

