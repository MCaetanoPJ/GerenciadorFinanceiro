function ValidateObjNull(object){

}

function ShowMessage(text){
    alert(text);
}

function FindObjectWithMaxId(array) {
    var maxId = -1;
    var maxIdObject = null;
    for (var i = 0; i < array.length; i++) {
      if (array[i].Id > maxId) {
        maxId = array[i].Id;
        maxIdObject = array[i];
      }
    }
    return maxIdObject;
  }

  function CheckIfIdExists(array, objectId) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].Id === objectId) {
        return true;
      }
    }
    return false;
  }