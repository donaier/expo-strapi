'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async findOneByHandle(ctx) {
    const { handle } = ctx.params;

    const entity = await strapi.services['expo-item'].findOne({ handle });
    return sanitizeEntity(entity, { model: strapi.models['expo-item'] });
  },
};
