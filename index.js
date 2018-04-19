var recipes = {}

function updateObjectWithKeyAndValue(object, key, value)
{
  var newObject = Object.assign({}, object, {[key] : value})
  return newObject
}

function deleteFromObjectByKey(object, key)
{
  var newObject = Object.assign({}, object)
  delete newObject[key]
  return newObject
}