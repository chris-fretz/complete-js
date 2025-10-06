'use strict';

let hasDriversLicense = true;
const passTest = true;

/* Note that hasDriverLicense is actually singular, introducing a bug.
   This will actually throw an error if we use strict mode, instead of failing silently. */
if (passTest) hasDriverLicense = true;
if (hasDriversLicense) console.log('I can drive');