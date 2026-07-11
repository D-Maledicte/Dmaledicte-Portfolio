---
description: Launch and drive the Dmaledicte Portfolio Vue 3 dev server
---

# Run — Dmaledicte Portfolio

## Launch

```bash
cd /home/dmaledicte/proyectosPersonales/Dmaledicte-Portfolio
npm run dev -- --port 5199 &>/tmp/vite-portfolio.log &
```

Wait for ready:

```bash
sleep 4 && curl -s -o /dev/null -w "%{http_code}" http://localhost:5199/
```

Expect `200`. Check `/tmp/vite-portfolio.log` if it fails.

## Screenshot a route

`chromium-cli` is NOT available. Use `google-chrome` headless:

```bash
google-chrome \
  --headless=new \
  --screenshot=/tmp/portfolio-screenshot.png \
  --window-size=1280,900 \
  --no-sandbox \
  --disable-dev-shm-usage \
  "http://localhost:5199/<route>"
```

Then read the PNG with the Read tool to inspect visually.

## Stop server

```bash
kill $(lsof -ti:5199) 2>/dev/null
```

## Notes

- Port 5199 is reserved for this project to avoid collisions.
- The dbus UPower warning in Chrome output is harmless — screenshot still writes.
- `App.vue` wraps all routes with the legacy nav until E3 replaces it; the content area is on the right side of any screenshot taken before E3.
