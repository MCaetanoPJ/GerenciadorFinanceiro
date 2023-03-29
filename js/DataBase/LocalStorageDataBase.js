function AddLocalStorage(idLocalStorage, object){
    localStorage.setItem(idLocalStorage, JSON.stringify(object));
}

function GetLocalStorage(idLocalStorage){
    localStorage.getItem(idLocalStorage);
}

function DeleteLocalStorage(idLocalStorage){
    localStorage.setItem(idLocalStorage, '');
}

function UpdateLocalStorage(idLocalStorage, object){
    localStorage.setItem(idLocalStorage, JSON.stringify(object));
}

