const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

const newState = {};

const seedDb = () => {
  
  db.setState(newState);
console.log("Clear DB");

// Set some defaults (required if your JSON file is empty)
db.defaults({ posts: [], user: {}, count: 0 })
  .write();
console.log("DB Created");
  
}

exports.seedDb = seedDb;
