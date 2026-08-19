const fs = require('fs');

const flattenKeys = (obj, prefix = '') => {
  return Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? prefix + '.' : '';
    if (typeof obj[k] === 'object' && obj[k] !== null && !Array.isArray(obj[k])) {
      Object.assign(acc, flattenKeys(obj[k], pre + k));
    } else {
      acc[pre + k] = true;
    }
    return acc;
  }, {});
};

const en = flattenKeys(JSON.parse(fs.readFileSync('/Users/scint/Desktop/main/al-muamalat/src/assets/Locales/En/common.json', 'utf8')));
const uz = flattenKeys(JSON.parse(fs.readFileSync('/Users/scint/Desktop/main/al-muamalat/src/assets/Locales/Uz/common.json', 'utf8')));
const ru = flattenKeys(JSON.parse(fs.readFileSync('/Users/scint/Desktop/main/al-muamalat/src/assets/Locales/Ru/common.json', 'utf8')));

const allKeys = new Set([...Object.keys(en), ...Object.keys(uz), ...Object.keys(ru)]);
let mismatch = false;

allKeys.forEach(key => {
  if (!en[key]) { console.log(`Missing in EN: ${key}`); mismatch = true; }
  if (!uz[key]) { console.log(`Missing in UZ: ${key}`); mismatch = true; }
  if (!ru[key]) { console.log(`Missing in RU: ${key}`); mismatch = true; }
});

if (!mismatch) {
  console.log("All JSON keys are perfectly synchronized!");
}
