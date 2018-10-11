import typeDefs from './types';
import resolvers from './resolvers'
import {
    makeExecutableSchema  
} from 'graphql-tools'



export const schema = makeExecutableSchema({ typeDefs, resolvers });