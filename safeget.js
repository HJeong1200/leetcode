const safelyGet = (object, propertyString) => {
  let currentObject = object;
  const properties = propertyString.split(".");

  for (const property of properties) {
    currentObject = currentObject[property];
    if (currentObject === undefined) return undefined;
  }

  return currentObject;
};
