var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
  var new_object = Object.assign({}, {key, value})
  return new_object
}

function destructivelyUpdateObjectWithKeyAndValue(object, key,value) {
  object[key] = value
  return object
}

 