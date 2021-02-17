const userRepository = require('./../repositories/user.repository');
     module.exports.getUsers = (request, response) => {
       response.send('Get Users:' + request.url);
     };
     module.exports.getUsersById = (request, response) => {
       response.send('Get User By Id:' + request.url + request.params.userId);
     };
     module.exports.createUser = (request, response) => {
       console.log(request.body);
       const result = userRepository.createUser(request.body);
       console.log(result);
       response.send(result);
     };
     module.exports.updateUser = (request, response) => {
       response.send('Update Users:' + request.url);
     };
       
     module.exports.deleteUser = (request, response) => {
       response.send('Delete Users:' + request.url);
     };

   
 
