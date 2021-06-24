import { Service, MongooseServiceOptions } from 'feathers-mongoose';
import { Application } from '<%= relativeRoot %>declarations';
import schema from './<%= kebabName %>.schema';
import { ServiceSwaggerOptions } from 'feathers-swagger';

export class <%= className %> extends Service {
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  docs: ServiceSwaggerOptions = {
    definitions: {
      '<%= kebabName %>': schema,
      '<%= kebabName %>_list': {
        type: 'array',
        items: schema
      }
    }
  };
  constructor(options: Partial<MongooseServiceOptions>, app: Application) {
    super(options);
  }
}
