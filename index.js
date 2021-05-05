function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  dict = Object.assign({}, object)
  delete dict[key]
  return object
  } 
  
function destructivelyDeleteFromObjectByKey(object, key) {
  delete object[key]
  return object
}


var playlist = {"Meat Loaf": "Seize the Night"}
updateObjectWithKeyAndValue(playlist, "key", "value")
console.log(playlist)