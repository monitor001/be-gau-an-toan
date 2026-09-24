"""Tạo MP3 tiếng Việt bằng Piper (local, không gọi mạng).

  node scripts/dump-tts-texts.mjs
  python scripts/tts_generate.py

Model: models/piper/vi_VN-vais1000-medium.onnx
"""
import json
import re
import shutil
import subprocess
import sys
import wave
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MODEL = ROOT / "models" / "piper" / "vi_VN-vais1000-medium.onnx"
OUT_DIR = ROOT / "assets" / "audio"
TMP_DIR = ROOT / "models" / "piper" / "wav"
TEXTS = ROOT / "scripts" / "tts-texts.json"
MANIFEST = ROOT / "src" / "audio-clips.mjs"

FFMPEG = shutil.which("ffmpeg")
if not FFMPEG:
    sys.exit("Không tìm thấy ffmpeg trong PATH.")
if not MODEL.exists():
    sys.exit(f"Thiếu model Piper: {MODEL}")

UNSAFE = re.compile(r"[^A-Za-z0-9._-]")


def safe_key(key: str) -> str:
    cleaned = UNSAFE.sub("_", key)
    assert cleaned == key, f"Khóa không hợp lệ: {key}"
    return cleaned


def write_manifest(manifest: dict) -> None:
    lines = [
        "// Manifest Piper VI — tạo bởi scripts/tts_generate.py (không chỉnh tay).",
        "// Giọng: vi_VN-vais1000-medium (Piper tiếng Việt).",
        "// key tình huống: <id> · đáp án: <id>__ans-<choice> · khuyến nghị: <id>__fb-<choice>",
        "export const AUDIO_CLIPS = {",
    ]
    for key in manifest:
        lines.append(f"  '{key}': '{manifest[key]}',")
    lines.append("};")
    lines.append("")
    MANIFEST.write_text("\n".join(lines), encoding="utf-8")


from piper import PiperVoice  # noqa: E402

OUT_DIR.mkdir(parents=True, exist_ok=True)
TMP_DIR.mkdir(parents=True, exist_ok=True)

items = json.loads(TEXTS.read_text(encoding="utf-8"))
voice = PiperVoice.load(str(MODEL))
rate = voice.config.sample_rate

manifest = {}
for index, item in enumerate(items, start=1):
    key = safe_key(item["key"])
    mp3_path = OUT_DIR / f"{key}.mp3"
    if mp3_path.exists() and mp3_path.stat().st_size > 0:
        manifest[key] = f"assets/audio/{key}.mp3"
        if index % 100 == 0:
            write_manifest(manifest)
        continue
    wav_path = TMP_DIR / f"{key}.wav"
    chunks = []
    for chunk in voice.synthesize(item["text"]):
        chunks.append(chunk.audio_int16_bytes)
    audio = b"".join(chunks)
    with wave.open(str(wav_path), "wb") as handle:
        handle.setnchannels(1)
        handle.setsampwidth(2)
        handle.setframerate(rate)
        handle.writeframes(audio)
    subprocess.run(
        [
            FFMPEG, "-y", "-loglevel", "error",
            "-i", str(wav_path),
            "-codec:a", "libmp3lame", "-b:a", "32k", "-ar", "22050", "-ac", "1",
            str(mp3_path),
        ],
        check=True,
    )
    wav_path.unlink(missing_ok=True)
    manifest[key] = f"assets/audio/{key}.mp3"
    if index % 25 == 0 or index == len(items):
        print(f"{index}/{len(items)} {key}", flush=True)
        write_manifest(manifest)

write_manifest(manifest)
print(f"DONE {len(manifest)} clips -> {MANIFEST}", flush=True)
