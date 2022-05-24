// MAP REDUCE FROM GAMES: THE NUMBER OF ACHIEVEMENTS OF PEGI 18 GAMES ORDERED DESGENDING
var map = function () {
    if (this.about.pegi_18) {
        for (var i in this.achievements) {
            emit(this.name, 1);
        }
    }

};

var reduce = function (keys, values) {
    return Array.sum(values);
};

db.games.mapReduce(
    map,
    reduce,
    {
        out: "no_achievements"
    }
);

db.no_achievements.find(
    {

    }
).sort({
    "value": -1
});