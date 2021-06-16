<% if (requiresValidation) { %>import validate from './<%= kebabName %>.validate';<% } %>
<% if (requiresAuth) { %>import * as authentication from '@feathersjs/authentication';
// Don't remove this comment. It's needed to format import lines nicely.
const { authenticate } = authentication.hooks;
<% } %>
export default {
  before: {
    all: [<% if (requiresAuth) { %> authenticate('jwt') <% } %>],
    find: [],
    get: [],
    create: [<% if (requiresValidation) { %> validate.validateCreate() <% } %>],
    update: [<% if (requiresValidation) { %> validate.validateUpdate() <% } %>],
    patch: [<% if (requiresValidation) { %> validate.validatePatch() <% } %>],
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
