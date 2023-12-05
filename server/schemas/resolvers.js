const {Tech, Matchup} = require('../models');

const resolvers = {
    Query:{
        tech: async ()=>{
            return Tech.find({});
        },
        matchup: async (parent, {matchId})=>{
            const params = matchId?{matchId}:{};
            return Matchup.find(params);
        }
    },
    Mutation:{
        createMatchup: async (parent, args)=>{
            const matchup = await Matchup.create(args)
            return matchup;
        },
        createVote: async (parent, {voteId, techNum})=>{
            return await Matchup.findOneAndUpdate({_id:voteId},{$inc: {[`tech${techNum}_votes`]:1}},{new:true});
        }
    }
};

module.exports = resolvers;