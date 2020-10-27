// bolean (true | false)
let isOpen: boolean;
isOpen = false;

// string ('foo', "foo", `foo`)
let message: string;

message = `foo ${isOpen}`;

// number (int, float, hex, binary)
let total: number;
total = 1.53;

// array (type[])
let items: number[];
items = [1, 2, 3];

let items2: Array<number>;
items2 = [1, 2, 3];

// tuple (tamanho é predefinido e os valores tbm)
let title: [number, string];
title = [1, "foo"];

// enum
enum Colors {
  white = "#fff",
  black = "#000",
}

// any (recebe qualquer valor) Não é legal.
let coisa: any;
coisa = [1];

// void (vazio, sem retorno)
function logger(): void {
  console.log("foo");
}

// null | undefined
type Bla = string | undefined;

// never
function error(): never {
  throw new Error("error");
}

// object ()
let cart: object;

cart = {
  key: "foo",
};

// Type Inference
// reconhece o tipo automaticamente
let message2 = "mensagem definida";
message2 = "string nova";
