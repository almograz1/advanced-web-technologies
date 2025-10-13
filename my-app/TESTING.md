Testing overview

What we added
- Jest + ts-jest configured with JSDOM test environment (jest.config.ts)
- Unit tests for:
  - src/lib/utils.ts -> safeJson: ensures robust parsing of JSON returned by AI that may be wrapped in code fences or malformed.
  - src/utils/guestLimit.ts: verifies guest play-count logic using localStorage.

How to run tests
- Install dependencies (from my-app folder):
  - npm install
- Run all tests:
  - npm test
- Watch mode:
  - npm run test:watch

Why mocks/stubs are needed
- localStorage (JSDOM): The guest limit utilities persist state to localStorage. In Node, localStorage doesn’t exist. The JSDOM test environment provides a browser-like DOM and an in-memory localStorage so we can test without a real browser. We also clear it between tests to avoid cross-test pollution.
- AI/Network (not included yet): The translate API route talks to Google’s Gemini via fetch and requires an API key. Such code should be tested with network calls mocked (e.g., jest.fn() on global.fetch) to make tests deterministic, fast, and secure (no real API keys or HTTP calls). We kept unit tests focused on pure utilities for minimal changes; adding API route tests would involve mocking NextRequest and fetch.

Notes on safeJson tests
- Covers empty input returning null (caller can decide behavior on missing data).
- Handles code fences like ```json ... ``` and ``` ... ``` commonly produced by LLMs.
- Ensures whitespace trimming and returns null for invalid JSON instead of throwing.

Notes on guestLimit tests
- Validates increment, read, reset, and limit checks (both default and custom limits).
- Uses JSDOM localStorage, reset via localStorage.clear() in beforeEach to ensure isolation.
