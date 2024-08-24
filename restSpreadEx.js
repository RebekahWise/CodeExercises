const filterOutOdds = (...arg) => arg.filter((num) => num % 2 === 0);

const findMin = (...args) => Math.min(...args);

const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

const doubleAndReturnArgs = (arr, ...vals) => [
  arr,
  ...vals.map((val) => val * 2),
];

const removeRandom = (items) => {
  let idx = Math.floor(Math.random() * items.length);
  return [...items.slice(0, idx), ...items.slice(idx + 1, items.length)];
};

const extend = (arr1, arr2) => [...arr1, ...arr2];

const addKeyVal = (arr, key, val) => {
  let obj = { ...arr };
  obj[key] = val;
  return obj;
};

const removeKey = (obj, key) => {
  let newObj = { ...obj };
  delete newObj[key];
  return newObj;
};

const combine = (obj1, obj2) => {
  let newObj = { ...obj1, ...obj2 };
  return newObj;
};

const update = (obj, key, val) => {
  let newObj = { ...obj };
  newObj[key] = val;
  return newObj;
};
