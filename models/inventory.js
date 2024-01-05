const mongoose = require('mongoose');

module.exports = (connection) => {
    const inventories = new mongoose.Schema({
        "groceryIds": [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'groceries'
        }],
        "name": { type: mongoose.Schema.Types.String },
    });

  return connection.model("inventories", inventories, "inventories");
}