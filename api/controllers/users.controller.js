
     module.exports.getUsers = (request, response) => {
       response.send('Get Users:' + request.url);
     };
     module.exports.getUsersById = (request, response) => {
       response.send('Get User By Id:' + request.url + request.params.userId);
     };
     module.exports.createUser = (request, response) => {
       response.send('Create Users:' + request.url);
     };
     module.exports.updateUser = (request, response) => {
       response.send('Update Users:' + request.url);
     };
       
     module.exports.deleteUser = (request, response) => {
       response.send('Delete Users:' + request.url);
     };

   
 
