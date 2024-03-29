from flask import Flask, request
from flask_cors import CORS
import main

app = Flask(__name__)
CORS(app, origins="http://localhost:3000") #Allow requests from localhost:3000

# Members API Route
@app.route("/ip_list", methods=['POST'])
def get_ip_list():
    
    data = request.get_json()

    return (main.main(data))

if __name__ == "__main__":
    app.run(debug=True)