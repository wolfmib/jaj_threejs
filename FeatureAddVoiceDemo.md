
## demo note
 563 × 1000 px → perfect 9:16 for vertical short-form video.
 500 × 889 px
 450 × 800 px (maintains 9:16 ratio)

## docker build
docker build -t ja_openai_voice .



## docker run
docker run -it --rm \
  -v $(pwd)/temp:/app/temp \
  -v $(pwd):/app \
  ja_openai_voice \
  bash


## run python
python3 python_openai_tts_hello.py

## use vscode to easy coding

