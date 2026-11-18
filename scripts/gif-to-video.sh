#!/usr/bin/env bash
# Convierte GIFs animados en vídeo en bucle (WebM VP9 + MP4 H.264), junto al GIF.
#
#   scripts/gif-to-video.sh docs/images/surfize_1.gif [más.gif ...]
#   scripts/gif-to-video.sh            # sin argumentos: los GIFs que usa el sitio
#
# Necesita ffmpeg en el PATH, o su ruta en la variable FFMPEG.
# El póster (primer fotograma) se saca aparte con ImageMagick:
#   magick 'docs/images/x.gif[0]' -strip docs/images/x-poster.png
set -euo pipefail

FFMPEG="${FFMPEG:-ffmpeg}"
command -v "$FFMPEG" >/dev/null || { echo "No encuentro ffmpeg (instálalo o define FFMPEG=/ruta/ffmpeg)" >&2; exit 1; }

cd "$(dirname "$0")/.."
if [ $# -eq 0 ]; then
  set -- docs/images/cupMinute.gif docs/images/surfize_{1,2,3,4}.gif
fi

# Dimensiones pares, obligatorias para yuv420p.
EVEN='scale=trunc(iw/2)*2:trunc(ih/2)*2:flags=neighbor'

for gif in "$@"; do
  base="${gif%.gif}"
  echo "→ $gif"
  "$FFMPEG" -hide_banner -loglevel error -y -i "$gif" -an -vf "$EVEN" \
    -c:v libx264 -preset slow -crf 23 -pix_fmt yuv420p -movflags +faststart \
    "$base.mp4"
  "$FFMPEG" -hide_banner -loglevel error -y -i "$gif" -an -vf "$EVEN" \
    -c:v libvpx-vp9 -crf 36 -b:v 0 -row-mt 1 -deadline good -pix_fmt yuv420p \
    "$base.webm"
  printf '   gif %8s  mp4 %8s  webm %8s\n' \
    "$(du -h "$gif" | cut -f1)" "$(du -h "$base.mp4" | cut -f1)" "$(du -h "$base.webm" | cut -f1)"
done
