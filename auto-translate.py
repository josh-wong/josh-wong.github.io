import os
import openai
import sys
from pathlib import Path

openai.api_key = os.getenv("OPENAI_API_KEY")

def translate_file(source_path, target_path):
    with open(source_path, "r", encoding="utf-8") as f:
        content = f.read()

    prompt = f"Translate the following Markdown documentation from English to Japanese:\n\n{content}"

    response = openai.ChatCompletion.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": prompt}],
        temperature=0.3,
    )

    translation = response['choices'][0]['message']['content']

    os.makedirs(os.path.dirname(target_path), exist_ok=True)
    with open(target_path, "w", encoding="utf-8") as f:
        f.write(translation)

if __name__ == "__main__":
    source = Path(sys.argv[1])
    target = Path(str(source).replace("docs/en-us", "docs/ja-jp"))
    translate_file(source, target)
