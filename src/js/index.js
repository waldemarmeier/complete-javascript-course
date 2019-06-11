// Global app controller

import str from './models/Search';
import {testFunc as otherFunc} from './views/searchView';
import {testFunc} from './views/searchView';
import * as test from './views/searchView';



console.log(`using imported string: ${str}`);

otherFunc();
testFunc();
test.testFunc();