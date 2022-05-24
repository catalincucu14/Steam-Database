// DISTINCT FROM GAMES: SPORTED_LANGUAGES
db.games.distinct("supported_languages");

// DISTINCT FROM GAMES: PUBLISHER
db.games.distinct("about.publisher");

// AGGREGATE FROM USERS: THE TOTAL PRICE OF USER'S GAMES ORDERED DESCENDING
db.users.aggregate(
    [
        {
            $unwind: "$games"
        },
        {
            $lookup: {
                from: "games",
                localField: "games",
                foreignField: "_id",
                as: "game"
            }
        },
        {
            $unwind: "$game"
        },
        {
            $project: {
                "username": 1,
                "price": "$game.price"
            }
        },
        {
            $group: {
                "_id": "$username",
                "total": {
                    $sum: "$price"
                }
            }
        },
        {
            $sort: {
                "total": -1
            }
        }
    ]
);

// AGGREGATE FROM USERS: THE TOTAL PRICE OF USER'S GAMES AND WALLET ORDERED ASCCENDING
db.users.aggregate(
    [
        {
            $unwind: "$games"
        },
        {
            $lookup: {
                from: "games",
                localField: "games",
                foreignField: "_id",
                as: "game"
            }
        },
        {
            $unwind: "$game"
        },
        {
            $project: {
                "username": 1,
                "wallet": 1,
                "price": "$game.price"
            }
        },
        {
            $group: {
                "_id": "$username",
                "total": {
                    $sum: {
                        $add: [
                            "$price",
                            "$wallet"
                        ]
                    }
                }
            }
        },
        {
            $sort: {
                "total": 1
            }
        }
    ]
);

// AGGREGATE FROM GAMES: THE NUMBER OF ACHIEVEMENTS OF PEGI 18 GAMES ORDERED DESGENDING
db.games.aggregate(
    [
        {
            $match: {
                "about.pegi_18": true
            }
        },
        {
            $unwind: "$achievements"
        },
        {
            $project: {
                "name": 1,
                "achievements": 1
            }
        },
        {
            $group: {
                "_id": "$name",
                "no_achievements": {
                    $sum: 1
                }
            }
        },
        {
            $sort: {
                "no_achievements": -1
            }
        }
    ]
);