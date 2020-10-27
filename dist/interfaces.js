"use strict";
var tlou = {
    description: "Best game",
    title: "The last of us",
    platform: ["PS3", "PS4"],
    genre: "Action",
    getSimilars: function (title) {
        console.log("Similar games to " + title + ": Uncharted, A plague Tale, Metro");
    },
};
if (tlou.getSimilars)
    tlou.getSimilars(tlou.title);
var CreateGame = /** @class */ (function () {
    function CreateGame(t, d, g) {
        this.description = d;
        this.title = t;
        this.genre = g;
    }
    return CreateGame;
}());
