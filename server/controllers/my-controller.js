'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('formzz')
      .service('myService')
      .getWelcomeMessage();
  },
});
