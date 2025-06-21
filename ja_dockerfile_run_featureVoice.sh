docker run -it --rm \
  -v $(pwd)/temp:/app/temp \
  -v $(pwd):/app \
  ja_openai_voice \
  bash
