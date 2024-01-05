const mongoose = require('mongoose');

module.exports = (connection) => {
    const groceries = new mongoose.Schema({
        "name": { type: mongoose.Schema.Types.String },
    });

  return connection.model("groceries", groceries, "groceries");
}