#!/usr/bin/env node
var child_process = require("child_process");

var child = child_process.fork("./child");

child.on("message", function (msg) {
    console.log(msg);

    setTimeout(function () {
        child.send({ message: "from parent" });
    }, 1000);
});

child.send({ message: "from parent" });
