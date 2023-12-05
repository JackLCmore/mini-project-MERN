const typeDefs = `
type tech {
    _id: ID
    name: String 
}

type matchup {
    _id: ID
    tech1: String
    tech2: String
    tech1_votes: Number
    tech2_votes: Number
}

type Query {
    tech: [Tech]!
    matchup(_id: ID!): Matchup
}

type Mutations {
    createMatchup(tech1: String!, tech2: String!): Matchup 
    createVote(_id: String!, techNum: Int!): 
}
`;

module.exports = typeDefs;