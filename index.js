var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key,value) {
  object[key] = value
  return object
}

/**function updateObjectWithKeyAndValue(object, key, value) {
  var new_object = Object.assign({}, object)
  return new_object
}**/

function deleteFromObjectByKey(object, key) {
  var new_object = Object.assign({}, object)
  delete new_object[key]
  return new_object
}

