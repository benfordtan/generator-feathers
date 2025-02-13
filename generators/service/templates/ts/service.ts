// Initializes the `<%= name %>` service on path `/<%= path %>`
import { ServiceAddons } from '@feathersjs/feathers';
import { Application } from '<%= relativeRoot %>declarations';
import { <%= className %> } from './<%= kebabName %>.class';<% if(modelName) { %>
import createModel from './<%= modelName %>';<% } %>
import hooks from './<%= kebabName %>.hooks';

// Add this service to the service type index
declare module '<%= relativeRoot %>declarations' {
  interface ServiceTypes {
    '<%= path %>': <%= className %> & ServiceAddons<any>;
  }
}

export default function (app: Application): void {
  const options = {<% if (modelName) { %>
    Model: createModel(app),<% } %>
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/<%= path %>', new <%= className %>(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('<%= path %>');

  service.hooks(hooks);
}
