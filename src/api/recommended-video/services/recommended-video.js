'use strict';

/**
 * recommended-video service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recommended-video.recommended-video');
