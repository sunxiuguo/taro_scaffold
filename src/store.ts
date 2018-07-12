import * as dvaCore from './dva-core';
// import createLoading from './dva-loading';

const dvaApp = dvaCore.create();

// dvaApp.use(createLoading({
//   effects: true,
// }));

/* eslint-disable import/newline-after-import */
dvaApp.model(require('./models/student').default);
/* eslint-enable */

dvaApp.start();
const store = dvaApp._store;

export default store;
