'use strict';

const CACHE_STRING = '-cache';

function entitiesReducer(payload) {
  const cachedValues = Object.keys(payload).filter(key => key.includes(CACHE_STRING)).reduce((acc, value) => {
    acc[value.replace(CACHE_STRING, '')] = payload[value];

    return acc;
  }, {}),
    nonCachedValues = Object.keys(payload).filter(key => !key.includes(CACHE_STRING)).reduce((acc, value) => {
      if (payload[value]) {
        acc[value] = payload[value];
      }

      return acc;
    }, {});

    return Object.assign(cachedValues, nonCachedValues);
}

module.exports = entitiesReducer;
