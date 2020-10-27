"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var todo = {
    description: "Andar 500 milhas",
    title: "Andar",
    done: false,
};
function updateTodo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
}
console.log(todo);
var todo2 = updateTodo(todo, { done: true });
console.log(todo2);
var todo3 = {
    title: "Helo",
    done: false,
};
var todo4 = {
    done: false,
    title: "Hello",
};
