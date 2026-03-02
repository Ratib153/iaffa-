#!/usr/bin/env bash

# Convert hero MP4 assets to adaptive HLS renditions (1080p/720p/480p)
# Usage:
#   ./convert-hero-to-hls.sh            # batch convert hero-*.mp4 (and hero.mp4 if present)
#   ./convert-hero-to-hls.sh 1          # convert hero-1.mp4 (fallback to hero.mp4 for 1)
#   ./convert-hero-to-hls.sh 2          # convert hero-2.mp4
#   ./convert-hero-to-hls.sh 3          # convert hero-3.mp4

set -u

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "Error: ffmpeg is not installed or not in PATH."
  echo "Install it first (macOS: brew install ffmpeg)."
  exit 1
fi

usage() {
  echo "Usage: $0 [1|2|3]"
  echo "  No argument: convert all hero-*.mp4 (and hero.mp4 if present)."
  exit 1
}

if [[ $# -gt 1 ]]; then
  usage
fi

convert_one() {
  local input_file="$1"

  if [[ ! -f "$input_file" ]]; then
    echo "Error: Missing input file: $input_file"
    return 1
  fi

  local base="${input_file%.mp4}"
  local out_dir="${base}-hls"
  local master_file="${out_dir}/${base}.m3u8"

  echo "\n==> Converting: $input_file"
  mkdir -p "$out_dir"

  # 1080p
  ffmpeg -y -i "$input_file" \
    -vf "scale=1920:1080:force_original_aspect_ratio=decrease,pad=1920:1080:(ow-iw)/2:(oh-ih)/2" \
    -c:v libx264 -preset medium -b:v 5000k -maxrate 5350k -bufsize 7500k \
    -c:a aac -b:a 128k -ac 2 \
    -movflags +faststart \
    -f hls -hls_time 6 -hls_playlist_type vod \
    -hls_segment_filename "${out_dir}/${base}-1080p-%03d.ts" \
    "${out_dir}/${base}-1080p.m3u8"

  # 720p
  ffmpeg -y -i "$input_file" \
    -vf "scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2" \
    -c:v libx264 -preset medium -b:v 2800k -maxrate 2996k -bufsize 4200k \
    -c:a aac -b:a 128k -ac 2 \
    -movflags +faststart \
    -f hls -hls_time 6 -hls_playlist_type vod \
    -hls_segment_filename "${out_dir}/${base}-720p-%03d.ts" \
    "${out_dir}/${base}-720p.m3u8"

  # 480p
  ffmpeg -y -i "$input_file" \
    -vf "scale=854:480:force_original_aspect_ratio=decrease,pad=854:480:(ow-iw)/2:(oh-ih)/2" \
    -c:v libx264 -preset medium -b:v 1400k -maxrate 1498k -bufsize 2100k \
    -c:a aac -b:a 96k -ac 2 \
    -movflags +faststart \
    -f hls -hls_time 6 -hls_playlist_type vod \
    -hls_segment_filename "${out_dir}/${base}-480p-%03d.ts" \
    "${out_dir}/${base}-480p.m3u8"

  cat > "$master_file" <<EOF
#EXTM3U
#EXT-X-VERSION:3
#EXT-X-STREAM-INF:BANDWIDTH=5400000,RESOLUTION=1920x1080
${base}-1080p.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=3000000,RESOLUTION=1280x720
${base}-720p.m3u8
#EXT-X-STREAM-INF:BANDWIDTH=1500000,RESOLUTION=854x480
${base}-480p.m3u8
EOF

  echo "✓ Done: ${out_dir}/"
  echo "  Master playlist: ${master_file}"
}

files=()

if [[ $# -eq 1 ]]; then
  case "$1" in
    1|2|3) ;;
    *) usage ;;
  esac

  candidate="hero-$1.mp4"
  if [[ -f "$candidate" ]]; then
    files+=("$candidate")
  elif [[ "$1" == "1" && -f "hero.mp4" ]]; then
    # Backward-compatible fallback for single hero.mp4 setups
    files+=("hero.mp4")
  else
    echo "Error: File not found for argument '$1'. Expected: $candidate"
    exit 1
  fi
else
  shopt -s nullglob
  for f in hero-*.mp4; do
    files+=("$f")
  done
  if [[ -f "hero.mp4" ]]; then
    files+=("hero.mp4")
  fi
  shopt -u nullglob

  if [[ ${#files[@]} -eq 0 ]]; then
    echo "Error: No input files found."
    echo "Expected files like hero-1.mp4, hero-2.mp4, hero-3.mp4 (or hero.mp4)."
    exit 1
  fi
fi

failed=0
for f in "${files[@]}"; do
  if ! convert_one "$f"; then
    failed=1
  fi
done

if [[ $failed -ne 0 ]]; then
  echo "\nCompleted with errors."
  exit 1
fi

echo "\nAll conversions completed successfully."
echo "Output is ready under the current folder (e.g., public/videos/Home/<hero-X-hls>/ if run there)."
