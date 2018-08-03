
var storeNum = require("./store-nums");
var input = process.argv[2];
var log = console.log;


storeNum.add(5);
storeNum.add(10);
storeNum.add(3);
storeNum.sort();
log(storeNum.list);
