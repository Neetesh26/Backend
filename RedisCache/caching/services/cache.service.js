// const Redis = require("ioredis");

// const cacheInstance = new Redis({
//   host: "redis-19283.crce263.ap-south-1-1.ec2.cloud.redislabs.com",
//   port: 19283,
//   password: "bjhdbsjhcbdksjvbkdsjvbk@2132SSS",
// });

// module.exports = cacheInstance;


const Redis = require("ioredis");

const cacheInstance = new Redis({
  host: "redis-19283.crce263.ap-south-1-1.ec2.cloud.redislabs.com",
  port: 19283,
  username: "Neetesh",          
  password: "Neetesh@26",
});

cacheInstance.on("connect", () => {
  console.log("Connected to Redis cache");
});

cacheInstance.on("error", (err) => {
  console.error("Redis error:", err);
});

module.exports = cacheInstance;
