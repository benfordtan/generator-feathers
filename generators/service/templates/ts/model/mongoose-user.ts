// <%= name %>-model.ts - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
import { Application } from '../declarations';
import { Model, Mongoose } from 'mongoose';
import {createMongooseSchema} from "convert-json-schema-to-mongoose/index";

const refs = {};
const schema = {
  type: 'object',
  required: ['password'],

  properties: { 
    <% if(authentication.strategies.indexOf('local') !== -1) { %>
      email: { type: ['string', 'null'] },
      password: { type: 'string' },
    <% } %>
    <% authentication.oauthProviders.forEach(provider => { %>
      <%= provider %>Id: { type: 'string' },
    <% }); %>
  }
};

export default function (app: Application): Model<any> {
  const modelName = '<%= camelName %>';
  const mongooseClient: Mongoose = app.get('mongooseClient');
  const translatedSchema = createMongooseSchema(refs, schema);
  const mongooseSchema = new mongooseClient.Schema(translatedSchema, {
    timestamps: true
  });

  // This is necessary to avoid model compilation errors in watch mode
  // see https://mongoosejs.com/docs/api/connection.html#connection_Connection-deleteModel
  if (mongooseClient.modelNames().includes(modelName)) {
    (mongooseClient as any).deleteModel(modelName);
  }
  return mongooseClient.model<any>(modelName, mongooseSchema);
}
