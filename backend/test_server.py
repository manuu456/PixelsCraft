import json
import unittest

from backend.server import app


class BackendTests(unittest.IsolatedAsyncioTestCase):
    async def request(self, path, method="GET"):
        messages = []

        async def receive():
            return {"type": "http.request", "body": b"", "more_body": False}

        async def send(message):
            messages.append(message)

        await app(
            {
                "type": "http", "asgi": {"version": "3.0"},
                "http_version": "1.1", "method": method, "scheme": "http",
                "path": path, "raw_path": path.encode(), "query_string": b"",
                "root_path": "", "headers": [], "server": ("testserver", 80),
                "client": ("127.0.0.1", 12345),
            },
            receive,
            send,
        )
        status = next(message["status"] for message in messages if message["type"] == "http.response.start")
        body = b"".join(message.get("body", b"") for message in messages if message["type"] == "http.response.body")
        return status, json.loads(body)

    async def test_health_endpoint(self):
        status, body = await self.request("/api/health")
        self.assertEqual(status, 200)
        self.assertEqual(body, {"status": "ok", "service": "pixelcraft-api"})

    async def test_unknown_route(self):
        status, _ = await self.request("/api/unknown")
        self.assertEqual(status, 404)

    async def test_health_rejects_post(self):
        status, _ = await self.request("/api/health", "POST")
        self.assertEqual(status, 405)


if __name__ == "__main__":
    unittest.main()
