# PixelCraft

The production website is the Next.js application at the repository root. `frontend/` contains the older standalone frontend; both applications have maintained dependency lockfiles.

## Requirements

- Node.js 22.13 or later; Node.js 24 is used for validation.
- Python 3.10 or later for the optional FastAPI backend.

## Run the website

```sh
npm ci
npm run dev
```

Copy `.env.example` to `.env.local` and configure `RESEND_API_KEY` for contact email delivery. Verify `pixelscraft.online` in Resend. Invalid contact requests are rejected before email delivery; missing configuration returns a service-unavailable response.

## Validate before pushing

```sh
npm audit
npm run lint
npm run typecheck
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

The browser suite starts the production server on port 4317 and tests desktop/mobile navigation, portfolio filters, contact form success/failure, request validation, local assets, and image-source restrictions. Browser tests use mocked email delivery; API tests stub the provider. No real email is sent.

The older frontend can be checked separately:

```sh
cd frontend
npm ci
npm audit
npm run lint
npm run typecheck
npm run build
```

## Optional backend

```sh
python -m pip install -r backend/requirements.txt
python -m unittest backend.test_server
python -m uvicorn backend.server:app --host 127.0.0.1 --port 8000
```

To audit its dependency set, install `pip-audit` in an isolated Python environment and run `python -m pip_audit -r backend/requirements.txt`.
