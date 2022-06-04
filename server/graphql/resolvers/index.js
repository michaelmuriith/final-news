const userResolvers = require('./userResolver');
const postsResolvers = require('./resovers')
const newsResolver = require('./newsResolver')
const categoryResolver =require('./categoryResolver')

module.exports = {
    Query: {
        ...postsResolvers.Query,
        ...userResolvers.Query,
        ...newsResolver.Query,
        ...categoryResolver.Query
    },
    Mutation: {
        ...postsResolvers.Mutation,
        ...userResolvers.Mutation,
        ...newsResolver.Mutation,
        ...categoryResolver.Mutation
    }
} 