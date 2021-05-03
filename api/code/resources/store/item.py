from flask import request
from flask_restful import Resource
from models.store.item import ItemModel
from schemas.store.item import ItemSchema
from cdhandler import CloudinaryHandler
from flask_jwt_extended import jwt_required, fresh_jwt_required, get_jwt_identity
from flask_babel import gettext

# errors
from errors.not_found import NotFoundError

item_schema = ItemSchema()


class Item(Resource):

    @jwt_required
    def get(self, id):

        item = ItemModel.find_by_id(id)

        if item:
            return item_schema.dump(item)

        raise NotFoundError()

    @fresh_jwt_required
    def delete(self, id):
        item = ItemModel.find_by_id(id)

        if item:
            item.delete_from_db()
            return {'message':  gettext('Item deleted')}

        raise NotFoundError()

    @fresh_jwt_required
    def put(self, id):

        item_json = request.get_json()["itemData"]
        item = ItemModel.find_by_id(id)

        if "image" in item_json:
            if item_json["image"]:
                image = CloudinaryHandler.LoadImage(item_json["image"])
            else:
                image = None

            item_json["image"] = image

        if item:
            item.name = item_json["name"]
            item.description = item_json["description"]
            item.price = item_json["price"]

            if "image" in item_json:
                item.image = item_json["image"]

        else:
            item = item_schema.load(item_json)

        item.save_to_db()

        return {'item': item_schema.dump(item)}, 200


class ItemCreation(Resource):
    @jwt_required
    def post(self):

        item_json = request.get_json()["itemData"]

        if "image" in item_json:
            image = CloudinaryHandler.LoadImage(item_json["image"])
            item_json["image"] = image

        item = item_schema.load(item_json)

        item.save_to_db()

        return {'item': item_schema.dump(item)}, 200
