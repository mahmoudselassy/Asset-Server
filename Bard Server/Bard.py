from http.server import BaseHTTPRequestHandler, HTTPServer
import json
import bardapi
import os
os.environ['_BARD_API_KEY']="Vwg1ONHJqT3vK4w1XNkSFW86tk9ILkYrO-TElm2JdlzfuO0a42-cQfgPPlgVVCVVYaF1bA."

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_POST(self):
        # Read the content length from the request headers
        content_length = int(self.headers['Content-Length'])
        # Read the request body with the specified content length
        post_data = self.rfile.read(content_length)
        # Parse the JSON data
        json_request = json.loads(post_data.decode('utf-8'))
        # Print the JSON data
        message= "hello" + json.dumps(json_request)
        
        output=bardapi.core.Bard().get_answer(message)['content']
        # Send a response back to the client
        json_response={
            "response":output
        }

        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
        response_data = json.dumps(json_response)
        self.wfile.write(response_data.encode('utf-8'))

def run():
    server_address = ('localhost', 8000)
    httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
    print('Starting server...')
    httpd.timeout = 60
    httpd.serve_forever()

run()
