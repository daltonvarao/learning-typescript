"use strict";
// bolean (true | false)
var isOpen;
isOpen = false;
// string ('foo', "foo", `foo`)
var message;
message = "foo " + isOpen;
// number (int, float, hex, binary)
var total;
total = 1.53;
// array (type[])
var items;
items = [1, 2, 3];
var items2;
items2 = [1, 2, 3];
// tuple (tamanho é predefinido e os valores tbm)
var title;
title = [1, "foo"];
// enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
// any (recebe qualquer valor) Não é legal.
var coisa;
coisa = [1];
// void (vazio, sem retorno)
function logger() {
    console.log("foo");
}
// never
function error() {
    throw new Error("error");
}
// object ()
var cart;
cart = {
    key: "foo",
};
// Type Inference
// reconhece o tipo automaticamente
var message2 = "mensagem definida";
message2 = "string nova";
