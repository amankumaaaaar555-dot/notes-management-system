
const mongoose = require("mongoose");
const dns = require("dns");

require("dotenv").config();

// Use Google DNS for MongoDB Atlas SRV lookup
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connection = mongoose.connect(process.env.mongourl);

module.exports = { connection };
