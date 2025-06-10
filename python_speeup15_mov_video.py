"""
(env_voice) NiHao John! (jaj_threejs) %  python3 --version
Python 3.13.3
>>> print(moviepy.__version__)
1.0.3


"""


from moviepy.editor import VideoFileClip
from moviepy.video.fx.speedx import speedx

clip = VideoFileClip("input.mov")
my_speed = 2.0
print("speed if >> ",my_speed)
clip = speedx(clip, my_speed)  # 1.5x speed
clip.write_videofile(f"output_speedup_{my_speed}.mp4", codec="libx264", audio_codec="aac")
