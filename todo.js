"use strict";
exports.__esModule = true;
var readline = require("readline-sync");
var items = [];
var input;
do {
    input = String(readline.question('enter command: ')).trim();
    if (input.indexOf('add ') === 0) {
        var space = input.indexOf(' ');
        var item = input.substring(space).trim().toLowerCase();
        if (items.indexOf(item) >= 0) {
            console.log("".concat(item, " is already existed"));
        }
        else {
            console.log("adding \"".concat(item, "\""));
            items.push(item);
        }
    }
    if (input.indexOf('list') === 0) {
        for (var i = 0; i < items.length; i++) {
            console.log("".concat(i, ". ").concat(items[i]));
        }
    }
    if (input.indexOf("remove") === 0) {
        var space = input.indexOf(' ');
        var item = input.substring(space).trim().toLowerCase();
        var itemIdx = items.indexOf(item);
        if (itemIdx >= 0) {
            console.log("removing ".concat(item));
            items.splice(itemIdx, 1);
        }
        else {
            console.log("".concat(item, " is not found."));
        }
    }
} while (input !== 'exit');
