const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const shortid = require('shortid');
const adapter = new FileSync('./data/db/db.json');
const db = low(adapter);

// Set some defaults (required if your JSON file is empty)

// Add a post

exports.createRecord = (data, resource) => {
  console.log(data, resource);
  const results = db.get('posts')
  .push(Object.assign({ id: shortid.generate()}, data))
  .write();
  
  db.update(`${resource}.count`, n => n ? n + 1 : 1)
  .write();
  
  return results;
};

exports.getSingleRecord = (id, resource) => {
  
  db.get(resource)
  .find({ id })
  .value()
 
};


// Update a post.
exports.updateRecord = (id, resource, data) => {
  db.get(resource)
  .find({ id })
  .assign(data)
  .write();
};

// Remove posts.
exports.deleteRecord =  (id, resource) => {
  db.get(resource)
  .remove({ id })
  .write()
};



