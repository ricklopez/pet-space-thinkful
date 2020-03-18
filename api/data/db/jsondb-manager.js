const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({ posts: [], user: {}, count: 0 })
  .write();

// Add a post

function create(data, resource){
  db.get(resource)
  .push(data)
  .write(); 
  
  db.update(`${resource}.count`, n => n + 1)
  .write();
}

function getById(id, resource){
  
  db.get(resource)
  .find({ id })
  .value()
 
}


// Update a post.
function update(id, resource, data){
  db.get(resource)
  .find({ id })
  .assign(data)
  .write();
}

// Remove posts.
function remove(id, resource){
  db.get(resource)
  .remove({ id })
  .write()
}



