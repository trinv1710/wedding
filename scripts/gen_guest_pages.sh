#!/usr/bin/env bash
set -euo pipefail

# Sinh guest/N/index.html (HTTP 200) từ index.html — Messenger giữ path /guest/N.
# Chạy lại sau mỗi lần sửa index.html: ./scripts/gen_guest_pages.sh

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
export ROOT

python3 <<'PY'
import os
import re
from pathlib import Path

root = Path(os.environ["ROOT"])
index_path = root / "index.html"
script_path = root / "js" / "script.js"
site_base = "https://trinv1710.github.io/wedding"
base_href = f"{site_base}/"

index_html = index_path.read_text(encoding="utf-8")
if "<base " not in index_html:
    index_html = index_html.replace(
        "<head>",
        f'<head>\n  <base href="{base_href}">',
        1,
    )

guest_ids = sorted(
    {m.group(1) for m in re.finditer(r"'(\d+)':", script_path.read_text(encoding="utf-8"))},
    key=int,
)

for guest_id in guest_ids:
    guest_url = f"{site_base}/guest/{guest_id}/"
    html = index_html
    html = html.replace(
        'property="og:url" content="https://trinv1710.github.io/wedding/"',
        f'property="og:url" content="{guest_url}"',
    )
    html = html.replace(
        'rel="canonical" href="https://trinv1710.github.io/wedding/"',
        f'rel="canonical" href="{guest_url}"',
    )
    out_dir = root / "guest" / guest_id
    out_dir.mkdir(parents=True, exist_ok=True)
    (out_dir / "index.html").write_text(html, encoding="utf-8")

print(f"✓ Generated {len(guest_ids)} pages under guest/N/index.html")
print(f"  Example: {site_base}/guest/1/")
PY
