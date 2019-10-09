#!/user/bin/python3

"""
@author: Boston
"""


from flask import Flask, request
from flask_restful import Resource, Api
from flask import Flask
from flask_cors import CORS



app = Flask(__name__)
api = Api(app)
CORS(app)
history=[]


class Calculate(Resource):
    def get(self):
        return {"result":history}

    def post(self):

        print("\n[Request received : ",request.json,"]")
        try:
            expression = request.json['expression']
            user_id = request.json['user_id']

            res = eval(expression)
            history.append(expression+" = "+str(res))

            return {'result':history}
        except:
            return {'error':'Please enter a valid mathematical expression'}

api.add_resource(Calculate, '/calculate') 


if __name__ == '__main__':
    app.run()