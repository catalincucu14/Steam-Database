// UPDATE THE GAMES THAT CONTAINS THE TAGS "Shooter" OR "World War II" TO BE PEGI 18
db.games.updateMany(
    {
        $or: [
            {
                "tags": "Shooter"
            },
            {
                "tags": "World War II"
            },
            {
                "tags": "Gore"
            }
        ]
    },
    {
        $set: {
            "about.pegi_18": true
        }
    }
)

// UPDATE THE GAME WITH ID "G3" AND INCREASE THE PRICE WITH 20%
db.games.updateOne(
    {
        "_id": "G3"
    },
    {
        $mul: {
            "price": 1.2
        }
    }
)

// DELETE THE USER WITH THE PHONE NUMBER "074257855"
db.users.deleteOne(
    {
        "account_details.phone": "074257855"
    }
)

// DELETE THE REVIEWS WITH LESS THAN 2 LIK
db.reviews.deleteMany(
    {
        "likes.2": {
            $exists: false
        }
    }
)

// BLUK WRITE WITH ALL 3 OPERATIONS
db.games.bulkWrite(
    [
        {
            insertOne: {
                "document": {
                    "name": "Killing Floor 2",
                    "description": "6-player co-op Zed-slaughtering mayhem. And now, 12-player Versus Survival mode, too - now you can BE the Zeds!",
                    "price": new Double(26.99),
                    "about": {
                        "release_date": new Date("18/11/2016"),
                        "developer": "Tripwire Interactive",
                        "publisher": "Tripwire Interactive",
                        "pegi_18": true
                    },
                    "tags": [
                        "Zombiens",
                        "Co-Op",
                        "Gore",
                        "FPS"
                    ],
                    "supported_languages": [
                        "English",
                        "Italian",
                        "French",
                        "German",
                    ],
                    "achievements": [
                        {
                            "name": "It's Only a Flesh Wound",
                            "description": "Kill Your First Fleshpound",
                            "completion_rate": new Double(66.3)
                        },
                        {
                            "name": "Hack and Slash",
                            "description": "Kill Your First Scrake",
                            "completion_rate": new Double(65.8)
                        },
                        {
                            "name": "Dead Silence",
                            "description": "Kill a Siren Before She Screams",
                            "completion_rate": new Double(64.3)
                        }
                    ]
                }
            }
        },
        {
            updateMany: {
                "filter": {
                    $and: [
                        {
                            "price": {
                                $gte: 9.99
                            }
                        },
                        {
                            "tags": "FPS"
                        },
                        {
                            "supported_languages.6": {
                                $exists: true
                            }
                        }
                    ]
                },
                "update": {
                    $mul: {
                        "price": 1.4
                    }
                }
            }
        },
        {
            deleteOne: {
                "filter": {
                    "_id": "G1"
                }
            }
        }
    ]
)