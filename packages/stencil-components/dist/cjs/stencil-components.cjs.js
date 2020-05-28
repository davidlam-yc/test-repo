'use strict';

const index = require('./index-d5cb7b5a.js');

index.patchBrowser().then(options => {
  return index.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]]], options);
});
