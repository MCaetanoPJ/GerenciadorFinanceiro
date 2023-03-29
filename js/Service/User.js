<script type="text/javascript" src="/DataBase.js"></script>
const storageName = 'storageUser';

function AddUser(objectUser){
    Add(storageName, objectUser.Id, objectUser);
}

function UpdateUser(id, objectUser){
    Update(storageName, objectUser.Id, objectUser);
}

function DeleteUser(id){
    Delete(storageName, id);
}

function GetUser(id){
    Get(storageName, id);
}

// function ExampleRegisterNewUser(){
//     var user = UserDto(0,'Marcos','123.321.123-56','marcos.@gmail.com','123456');
//     AddUser(user);
// }