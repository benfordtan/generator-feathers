<% if (requiresValidation) { %>import { compileSchema as validate } from '../validation-hook';
  import schema from './<%= kebabName %>.schema';<% } %>
<% if (requiresAuth) { %>import * as authentication from '@feathersjs/authentication';
// Don't remove this comment. It's needed to format import lines nicely.

const { authenticate } = authentication.hooks;
<% } %>
export default {
  before: {
    all: [<% if (requiresAuth) { %> authenticate('jwt') <% } %><% if (requiresAuth && requiresValidation) { %>,<% } %><% if (requiresValidation) { %> validate() <% } %>],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
