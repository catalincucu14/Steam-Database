//// GAMES
db.games.insertOne(
    {
        "_id": "G1",
        "name": "Dead by Daylight",
        "description": "Dead by Daylight is a multiplayer (4vs1) horror game where one player takes on the role of the savage Killer, and the other four players play as Survivors, trying to escape the Killer and avoid being caught and killed.",
        "price": new Double(19.99),
        "about": {
            "release_date": new Date("14/06/2016"),
            "developer": "Behaviour Interactive",
            "publisher": "Behaviour Interactive",
            "pegi_18": false
        },
        "tags": [
            "Horror",
            "Survival Horror",
            "Multiplayer",
            "Online Co-Op"
        ],
        "supported_languages": [
            "English",
            "French",
            "German",
            "Italian",
            "Portuguese",
            "Spanish",
            "Japanese",
            "Korean"
        ],
        "achievements": [
            {
                "name": "It wakes",
                "description": "Raise a character level to 10.",
                "completion_rate": new Double(54.6)
            },
            {
                "name": "Zealous",
                "description": "In a public match, get more than 8K blood points in one scoring category.",
                "completion_rate": new Double(54.5)
            },
            {
                "name": "Getting the hang of it",
                "description": "Raise your grade for the first time.",
                "completion_rate": new Double(51.6)
            }
        ]
    }
)

db.games.insertMany(
    [
        {
            "_id": "G2",
            "name": "Team Fortress 2",
            "description": "Nine distinct classes provide a broad range of tactical abilities and personalities. Constantly updated with new game modes, maps, equipment and, most importantly, hats!",
            "price": new Double(0.0),
            "about": {
                "release_date": new Date("10/10/2007"),
                "developer": "Valve",
                "publisher": "Valve",
                "pegi_18": false
            },
            "tags": [
                "Free to Play",
                "Hero Shooter",
                "Multiplayer",
                "FPS"
            ],
            "supported_languages": [
                "English",
                "French",
                "German",
                "Italian",
                "Portuguese",
                "Spanish",
                "Japanese",
                "Korean"
            ],
            "achievements": [
                {
                    "name": "Race for the Pennant",
                    "description": "Run 25 kilometers.",
                    "completion_rate": new Double(53.6)
                },
                {
                    "name": "Iron Kurtain",
                    "description": "Take 1000 points of damage in a single life.",
                    "completion_rate": new Double(43.9)
                },
                {
                    "name": "Hard to Kill",
                    "description": "Get five kills in a row without dying.",
                    "completion_rate": new Double(40.3)
                },
                {
                    "name": "Camp Fire",
                    "description": "Kill 3 enemies in a row, all within the same area.",
                    "completion_rate": new Double(33.3)
                }
            ]
        },
        {
            "_id": "G3",
            "name": "The Elder Scrolls Online",
            "description": "Join over 20 million players in the award-winning online multiplayer RPG and experience limitless adventure in a persistent Elder Scrolls world. Battle, craft, steal, or explore, and combine different types of equipment and abilities to create your own style of play. No game subscription required.",
            "price": new Double(19.99),
            "about": {
                "release_date": new Date("04/04/2014"),
                "developer": "Zenimax Online Studios",
                "publisher": "Bethesda Softworks",
                "pegi_18": false
            },
            "tags": [
                "RPG",
                "MMORPG",
                "Adventure",
                "Exploration",
                "PvP"
            ],
            "supported_languages": [
                "English",
                "French",
                "German",
                "Italian",
                "Portuguese",
                "Spanish"
            ]
        },
        {
            "_id": "G4",
            "name": "Battlefield V",
            "description": "This is the ultimate Battlefield V experience. Enter mankind’s greatest conflict with the complete arsenal of weapons, vehicles, and gadgets plus the best customization content of Year 1 and 2.",
            "price": new Double(49.99),
            "about": {
                "release_date": new Date("9/11/2018"),
                "developer": "DICE",
                "publisher": "Electronics Arts",
                "pegi_18": false
            },
            "tags": [
                "FPS",
                "World War II",
                "Shooter",
                "Multiplayer"
            ],
            "supported_languages": [
                "English",
                "French",
                "German",
                "Italian",
                "Portuguese",
                "Spanish"
            ],
            "achievements": [
                {
                    "name": "Last Man Standing",
                    "description": "In Multiplayer, have 3 squad members spawn on you",
                    "completion_rate": new Double(72.0)
                },
                {
                    "name": "Grim Reaper",
                    "description": "In Multiplayer, kill 30 enemies",
                    "completion_rate": new Double(54.2)
                },
                {
                    "name": "Enemy Attrition",
                    "description": "In Multiplayer, get 10 kills in a round",
                    "completion_rate": new Double(53.9)
                },
                {
                    "name": "Heads Down",
                    "description": "In Multiplayer, fully suppress 5 enemies",
                    "completion_rate": new Double(50.7)
                },
                {
                    "name": "Not On My Watch",
                    "description": "In Multiplayer, perform 10 squad revives",
                    "completion_rate": new Double(48.9)
                }
            ]
        },
        {
            "_id": "G5",
            "name": "Tom Clancy's Rainbow Six Siege",
            "description": "Tom Clancy's Rainbow Six Siege is the latest installment of the acclaimed first-person shooter franchise developed by the renowned Ubisoft Montreal studio.",
            "price": new Double(19.99),
            "about": {
                "release_date": new Date("1/12/2015"),
                "developer": "Ubisoft",
                "publisher": "Ubisoft",
                "pegi_18": false
            },
            "tags": [
                "FPS",
                "Hero Shooter",
                "Multiplayer",
                "Tactical",
                "Action"
            ],
            "supported_languages": [
                "English",
                "French",
                "German",
                "Italian",
                "Spanish",
                "Japanese",
                "Korean"
            ],
        },
        {
            "_id": "G6",
            "name": "Terraria",
            "description": "Dig, fight, explore, build! Nothing is impossible in this action-packed adventure game. Four Pack also available!",
            "price": new Double(9.99),
            "about": {
                "release_date": new Date("16/05/2011"),
                "developer": "Re-Logic",
                "publisher": "Re-Logic",
                "pegi_18": false
            },
            "tags": [
                "Open World Survival Craft",
                "Sandbox",
                "Survival",
                "2D"
            ],
            "supported_languages": [
                "English",
                "French",
                "German",
                "Italian",
                "Portuguese",
                "Spanish"
            ],
            "achievements": [
                {
                    "name": "Timber!!",
                    "description": "Chop down your first tree.",
                    "completion_rate": new Double(85.8)
                },
                {
                    "name": "You Can Do It!",
                    "description": "Survive your character's first full night.",
                    "completion_rate": new Double(78.6)
                },
                {
                    "name": "Ooo! Shiny!",
                    "description": "Mine your first nugget of ore with a pickaxe.",
                    "completion_rate": new Double(78.5)
                },
                {
                    "name": "No Hobo",
                    "description": "Build a house suitable enough for your first town NPC, such as the guide, to move into.",
                    "completion_rate": new Double(72.2)
                },
                {
                    "name": "Stop! Hammer Time!",
                    "description": "Obtain your first hammer via crafting or otherwise.",
                    "completion_rate": new Double(70.0)
                },
                {
                    "name": "Matching Attire",
                    "description": "Equip armor in all three armor slots: head, chest, and feet.",
                    "completion_rate": new Double(69.8)
                },
                {
                    "name": "I Am Loot!",
                    "description": "Discover a golden chest underground and take a peek at its contents.",
                    "completion_rate": new Double(66.5)
                }
            ]
        },
        {
            "_id": "G7",
            "name": "Far Cry 3",
            "description": "Discover the dark secrets of a lawless island ruled by violence and take the fight to the enemy as you try to escape. You’ll need more than luck to escape alive!",
            "price": new Double(19.99),
            "about": {
                "release_date": new Date("29/11/2012"),
                "developer": "Ubisoft",
                "publisher": "Ubisoft",
                "pegi_18": false
            },
            "tags": [
                "Shooter",
                "Multiplayer",
                "Open World"
            ],
            "supported_languages": [
                "English",
                "French",
                "German",
                "Italian",
                "Portuguese",
                "Spanish",
                "Japanese",
                "Korean"
            ]
        },
        {
            "_id": "G8",
            "name": "Counter-Strike:Global Offensive",
            "description": "Counter-Strike: Global Offensive (CS:GO) expands upon the team-based action gameplay that it pioneered when it was launched 19 years ago. CS: GO features new maps, characters, weapons, and game modes, and delivers updated versions of the classic CS content.",
            "price": new Double(12.75),
            "about": {
                "release_date": new Date("21/08/2012"),
                "developer": "Valve",
                "publisher": "Valve",
                "pegi_18": false
            },
            "tags": [
                "FPS",
                "Shooter",
                "Multiplayer",
                "Competitive",
                "Action"
            ],
            "supported_languages": [
                "English",
                "Romanian",
                "French",
                "German",
                "Italian",
                "Portuguese",
                "Spanish",
                "Japanese",
                "Korean"
            ],
            "achievements": [
                {
                    "name": "Points in Your Favor",
                    "description": "Inflict 2,500 total points of damage to enemies",
                    "completion_rate": new Double(67.0)
                },
                {
                    "name": "Shot With Their Pants Down",
                    "description": "Kill an enemy while they are reloading",
                    "completion_rate": new Double(66.4)
                },
                {
                    "name": "The Unstoppable Force",
                    "description": "Kill four enemies within a single round",
                    "completion_rate": new Double(66.2)
                },
                {
                    "name": "Body Bagger",
                    "description": "Kill 25 enemies",
                    "completion_rate": new Double(64.7)
                },
                {
                    "name": "Newb World Order",
                    "description": "Win ten rounds",
                    "completion_rate": new Double(63.9)
                }
            ]
        }
    ]
)

//// USERS
db.users.insertOne(
    {
        "_id": "U1",
        "username": "shaulest",
        "password": "ad8ac17bb7f47e35820e6debfceaa4b53476fb73805ab936330a6288e3514308",
        "account_details": {
            "mail": "alexandru.dragan@gmail.com",
            "phone": "0711357885"
        },
        "wallet": new Double(0.00),
        "games": [
            "G2",
            "G3"
        ],
        "friends": [
            "627fc8197b0f209d2aef7a3f"
        ]
    }
)

db.users.insertMany(
    [
        {
            "_id": "U2",
            "username": "fulskraq14",
            "password": "2e9e735d39dd7af1410a722d427cfc245c6203a6e2dfcf9683db68400c89a119",
            "account_details": {
                "mail": "madalin.mirea@gmail.com",
                "phone": "0715003687"
            },
            "wallet": new Double(5.00),
            "games": [
                "G3",
                "G4",
                "G7"
            ],
            "friends": [
                "U1"
            ]
        },
        {
            "_id": "U3",
            "username": "barambambam23",
            "password": "b1218b81e6c6ce5913b79f96a074443335362ebef8afa0d9b7c9a60e72add9af",
            "account_details": {
                "mail": "stefan.andrei@gmail.com",
                "phone": "0704503778"
            },
            "wallet": new Double(13.01),
            "friends": [
                "U2",
                "U1"
            ]
        },
        {
            "_id": "U4",
            "username": "sleyder67",
            "password": "953635668e96c7857d87bb90c682f9879616b9b012deae882a686bf29310120a",
            "account_details": {
                "mail": "mircea.mihai@gmail.com",
                "phone": "0740533218"
            },
            "wallet": new Double(141.22),
            "games": [
                "G2",
                "G3",
                "G6",
                "G8"
            ],
            "friends": [
                "U2",
                "U3"
            ]
        },
        {
            "_id": "U5",
            "username": "reigu44",
            "password": "7bf5907336add591fd35752b437021e822a1a7f61105aaec6d64d25cdd3b664c",
            "account_details": {
                "mail": "robert.marian@gmail.com",
                "phone": "074257855"
            },
            "wallet": new Double(10.00),
            "games": [
                "G1",
                "G2",
                "G7"
            ]
        },
        {
            "_id": "U6",
            "username": "osamanana",
            "password": "d43ff0dbfc091ec0d819404241f688926399a8ad900bd314379828fb609d59ee",
            "account_details": {
                "mail": "andrei.mircea@gmail.com",
                "phone": "0714359975"
            },
            "wallet": new Double(7.38)
        },
        {
            "_id": "U7",
            "username": "minay34",
            "password": "f491eb675f4a2cbdfd03c4e79776576a7a0ba9e38992909f36c723ee2ed81f95",
            "account_details": {
                "mail": "mirel.radoi@gmail.com",
                "phone": "0714456332"
            },
            "wallet": new Double(13.77),
            "friends": [
                "U5",
                "U7"
            ]
        },
        {
            "_id": "U8",
            "username": "mrlelePOG420",
            "password": "c3ac04ad7f58855a82f753487f0f2e3cdd29655c830ce5f2bf0c13328aa46f9f",
            "account_details": {
                "mail": "popovici.mireloi@gmail.com",
                "phone": "0714657310"
            },
            "wallet": new Double(0),
            "games": [
                "G1",
                "G4",
                "G8"
            ],
            "friends": [
                "U1",
                "U2",
                "U6",
                "U5"
            ]
        }
    ]
)

// REVIEWS
db.reviews.insertOne(
    {
        "game": "G3",
        "user": "U1",
        "review": "Great for casual gamers. Recommend!",
        "likes": [
            {
                "reaction": "like",
                "user": "U2"
            },
            {
                "reaction": "love",
                "user": "U4"
            }
        ]
    }
)

db.reviews.insertMany(
    [
        {
            "game": "G4",
            "user": "U4",
            "review": "I have played this game quite some bit. I recently decided to knock it down to one night a week. Getting burned out.",
            "likes": [
                {
                    "reaction": "sad",
                    "user": "U2"
                }
            ]
        },
        {
            "game": "G2",
            "user": "U3",
            "review": "Could've been worse!",
            "likes": [
                {
                    "reaction": "love",
                    "user": "U1"
                },
                {
                    "reaction": "angry",
                    "user": "U3"
                },
                {
                    "reaction": "angry",
                    "user": "U5"
                },
                {
                    "reaction": "love",
                    "user": "U6"
                },
                {
                    "reaction": "like",
                    "user": "U7"
                }
            ]
        },
        {
            "game": "G3",
            "user": "U1",
            "review": "Fun game, decent gameplay, nice community :)."
        },
        {
            "game": "G1",
            "user": "U2",
            "review": "Cool but repetitive and somehow boring if you play without friends and just fast travel along the map.",
            "likes": [
                {
                    "reaction": "angry",
                    "user": "U1"
                },
                {
                    "reaction": "love",
                    "user": "U6"
                }
            ]
        },
        {
            "game": "G2",
            "user": "U1",
            "review": "Ain't that bad if I'm honest but is very frustrating at times."
        },
        {
            "game": "G2",
            "user": "U4",
            "review": "I lost my life to this game.",
            "likes": [
                {
                    "reaction": "angry",
                    "user": "U1"
                },
                {
                    "reaction": "angry",
                    "user": "U3"
                }
            ]
        },
        {
            "game": "G1",
            "user": "U3",
            "review": "Their last privacy agreement update (January 1st, 2021) states they will 'sell' users information, including name, email and billing address to third party companies (including social media and advertising). There is no other way of playing the game without accepting those terms, very sad practices for a paid game really.",
            "likes": [
                {
                    "reaction": "sad",
                    "user": "U3"
                },
                {
                    "reaction": "sad",
                    "user": "U7"
                },
                {
                    "reaction": "sad",
                    "user": "U8"
                }
            ]
        }
    ]
)
