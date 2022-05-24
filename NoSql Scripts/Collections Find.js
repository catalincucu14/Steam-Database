// SELECT FROM GAMES: ALL ORDERED ASCENDING
db.games.find(
    {

    },
    {
        "_id": 1,
        "name": 1,
        "price": 1
    }
).sort(
    {
        "price": 1
    }
)

// SELECT FROM GAMES: TAG "SHOOTER", PRICE ABOVE "15.00" AND WITH ACHIEVEMENTS
db.games.find(
    {
        $and: [
            {
                "tags": "Shooter"
            },
            {
                "price": {
                    $gte: new Double(14.99)
                }
            },
            {
                "achievements":
                {
                    $exists: true
                }
            }
        ]
    },
    {
        "_id": 1,
        "name": 1,
        "price": 1,
        "tags": 1,
        "achievements": 1
    }
)

// SELECT FROM USERS: WALLET ABOVE "10" OR WITH AT LEAST 3 GAMES
db.users.find(
    {
        $or: [
            {
                "wallet": {
                    $gte: new Double(10.00)
                }
            },
            {
                "games.3":
                {
                    $exists: true
                }
            }
        ]
    },
    {
        "_id": 1,
        "username": 1,
        "wallet": 1,
        "games": 1
    }
)

// SELECT FROM REVIEWS: NO LIKES
db.reviews.find(
    {
        "likes": {
            $exists: false
        }
    },
    {
        "_id": 0
    }
)

// SELECT FROM GAMES: PRICE ABOVE "10" ORDERED DESCENDING
db.games.find(
    {
        "price": {
            $gte: new Double(9.99)
        }
    },
    {
        "name": 1,
        "price": 1,
        "about.release_date": 1
    }
).sort(
    {
        "price": -1
    }
)

// SELECT WITH INDEX FROM REVIEWS: REVIEW WITH "DECENT", "BAD", "GOOD" OR "DECENT" IN IT
db.reviews.createIndex(
    {
        review: "text"
    }
)
db.reviews.find(
    {
        $text: {
            $search: "decent bad good decent"
        }
    },
    {
        "_id": 0
    }
)
db.reviews.explain().find(
    {
        $text: {
            $search: "decent bad good decent"
        }
    },
    {
        "_id": 0
    }
);

// SELECT AND SKIP FROM GAMES: ALL
db.games.find(
    {

    },
    {
        "_id": 1,
        "name": 1,
        "price": 1
    }
).skip(2).limit(3);