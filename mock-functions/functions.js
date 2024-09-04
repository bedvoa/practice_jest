const add = (a, b) => a + b;

class Database {
  constructor() {}

  connect() {
    return true;
  }

  disconnect() {
    return true;
  }

  query(query) {
    return query;
  }
}

module.exports = {
  add,
  Database,
};
