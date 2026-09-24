"""Máy chủ tĩnh — Bé Gấu An Toàn (port mặc định 5177)."""

import socket
import sys
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class GameHandler(SimpleHTTPRequestHandler):
    extensions_map = {
        **SimpleHTTPRequestHandler.extensions_map,
        ".mjs": "text/javascript",
        ".webmanifest": "application/manifest+json",
    }


def lan_addresses(port):
    found = []
    try:
        for info in socket.getaddrinfo(socket.gethostname(), None, socket.AF_INET):
            address = info[4][0]
            if not address.startswith("127.") and address not in found:
                found.append(address)
    except OSError:
        pass
    return [f"http://{address}:{port}/" for address in found]


if __name__ == "__main__":
    host = sys.argv[1] if len(sys.argv) > 1 else "127.0.0.1"
    port = int(sys.argv[2]) if len(sys.argv) > 2 else 5177
    print(f"Be Gau An Toan tai http://{host}:{port}/", flush=True)
    for url in lan_addresses(port):
        print(f"  LAN: {url}", flush=True)
    ThreadingHTTPServer((host, port), GameHandler).serve_forever()
