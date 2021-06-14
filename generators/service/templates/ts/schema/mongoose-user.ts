export default {
  "type": "object",
  "properties": {<% if(authentication.strategies.indexOf('local') !== -1) { %>
    "email": { "type": ["string", "null"] },
    "password": { "type": "string" },<% } %><% authentication.oauthProviders.forEach(provider => { %>
    "<%= provider %>Id": { "type": "string" },<% }); %>
  },
  "required": ["password"]
}
