// GAMES
db.games.drop()
db.createCollection("games", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["name", "description", "price", "about", "tags"],
            properties: {
                name: {
                    bsonType: "string"
                },
                description: {
                    bsonType: "string"
                },
                price: {
                    bsonType: "double",
                    minimum: new Double(0.00),
                    maximum: new Double(119.99)
                },
                about: {
                    bsonType: "object",
                    required: ["release_date", "developer", "publisher", "pegi_18"],
                    properties: {
                        release_date: {
                            bsonType: "date"
                        },
                        developer: {
                            bsonType: "string"
                        },
                        publisher: {
                            bsonType: "string"
                        },
                        pegi_18: {
                            bsonType: "bool"
                        }
                    }
                },
                tags: {
                    bsonType: "array",
                    uniqueItems: true,
                    minItems: 1,
                    items: {
                        bsonType: "string"
                    }
                },
                supported_languages: {
                    bsonType: "array",
                    uniqueItems: true,
                    minItems: 1,
                    items: {
                        bsonType: "string"
                    }
                },
                achievements: {
                    bsonType: "array",
                    required: ["name", "description", "completion_rate"],
                    uniqueItems: true,
                    minItems: 1,
                    items: {
                        bsonType: "object",
                        properties: {
                            name: {
                                bsonType: "string"
                            },
                            description: {
                                bsonType: "string"
                            },
                            completion_rate: {
                                bsonType: "double"
                            }
                        }
                    }
                }
            }
        }
    }
})

// USERS
db.users.drop()
db.createCollection("users", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["username", "password", "account_details", "wallet"],
            properties: {
                username: {
                    bsonType: "string"
                },
                password: {
                    bsonType: "string"
                },
                account_details: {
                    bsonType: "object",
                    required: ["mail", "phone"],
                    properties: {
                        mail: {
                            bsonType: "string",
                            pattern: "^(?=^.{5,50}$)(\\w+([\.-]?\\w+)*@\\w+([\.-]?\\w+)*(\\.\\w{2,3})+)$"
                        },
                        phone: {
                            bsonType: "string",
                            pattern: "^(?=^.{9,25}$)([+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\\s\\.0-9]*)$"
                        }
                    }
                },
                wallet: {
                    bsonType: "double",
                    minimum: new Double(0.00),
                    maximum: new Double(5000.00)
                },
                games: {
                    bsonType: "array",
                    uniqueItems: true,
                    minItems: 1,
                    items: {
                        bsonType: "string"
                    }
                },
                friends: {
                    bsonType: "array",
                    uniqueItems: true,
                    minItems: 1,
                    items: {
                        bsonType: "string"
                    }
                }
            }
        }
    }
})

// REVIEWS
db.reviews.drop()
db.createCollection("reviews", {
    validator: {
        $jsonSchema: {
            bsonType: "object",
            required: ["game", "user", "review"],
            properties: {
                game: {
                    bsonType: "string"
                },
                user: {
                    bsonType: "string"
                },
                review: {
                    bsonType: "string"
                },
                likes: {
                    bsonType: "array",
                    uniqueItems: true,
                    minItems: 1,
                    items: {
                        bsonType: "object",
                        required: ["reaction", "user"],
                        properties: {
                            reaction: {
                                enum: ["like", "love", "haha", "angry", "sad"]
                            },
                            user: {
                                bsonType: "string"
                            }
                        }
                    }
                }
            }
        }
    }
})