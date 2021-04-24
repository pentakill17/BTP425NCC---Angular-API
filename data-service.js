let users = [{
  "userName" : "bob",
  "password" : "123",
  "fullname" : "rpbunag",
  "role" : "Admin"
}]



module.exports.getAllVehicles = function(){
    return new Promise(function(resolve,reject){
            resolve(vehicleData);
    });

};

module.exports.getAllUsers = function(){
  

  return new Promise(function(resolve,reject){
          resolve(users);
  });

};