<script type="text/javascript" src="/LocalStorageDataBase.js"></script>

function Add(StorageName, object){
    var nextId = GetNextId(StorageName);
    object.Id = nextId;
    AddLocalStorage(StorageName, object);
}

function Get(StorageName, objectId){
    if(!ExistObjectId(StorageName, objectId)){
        return GetLocalStorage(StorageName);
    }
    return null;
}

function Delete(StorageName, objectId){
    if(!ExistObjectId(StorageName, objectId)){
        DeleteLocalStorage();
        return true;
    }
    return false;
}

function Update(StorageName, objectId, object){
    if(!ExistObjectId(StorageName, objectId)){
        UpdateLocalStorage(StorageName, object);
        return object;
    }
    return null;
}

function GetNextId(StorageName){
    
    var localStorage = GetLocalStorage(StorageName);
    if(localStorage == null){
        return 1;
    }

    var nextId = FindObjectWithMaxId(JSON.parse(localStorage));
    return nextId + 1;
}

function ExistObjectId(StorageName, objectId){
    var localStorage = GetLocalStorage(StorageName);
    return CheckIfIdExists(JSON.parse(localStorage), objectId);
}