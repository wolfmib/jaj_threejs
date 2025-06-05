
## demo note
 563 × 1000 px → perfect 9:16 for vertical short-form video.


## docker build
docker build -t ja_openai_voice .



## docker run
docker run -it --rm \
  -v $(pwd)/temp:/app/temp \
  -v $(pwd):/app \
  ja_openai_voice \
  bash


## use vscode to easy coding

