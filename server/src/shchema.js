"Schema.js - Defines the GraphQL schema for the application"
const gql = require('graphql-tag')

const typeDefs=gql `

    "Query to get track arrays for the homepage grid"
    type Query{
        tracksforHome:[Track!]!
    }
    "A track is a group of modules that teaches about a specific topic"
    type Track{
        id: ID!
        "The track's title"

        author: Author!
        "The track's main author"

        thumbnail: String
        "The tracks illustration to be displayed in the card"

        length: Int
        "The track's approx length to complete, in minutes"

        modulesCount: Int
        "The number of modules this track contains"
    }
    "Author of a complete track"
    type Author{
        id:ID!
        name:String!
        photo: String
        "The photo will be a string URL pointing to the image"
    }

`;

module.exports=typeDefs;

