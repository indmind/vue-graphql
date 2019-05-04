const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNoneNull
} = require("graphql");

const customers = require("./murid.json")

const CustomerType = new GraphQLObjectType({
    name: "Customer",
    fields: {
        no: { type: GraphQLInt },
        nama: { type: GraphQLString },
        kelamin: { type: GraphQLString }
    }
})

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        customer: {
            type: CustomerType,
            args: {
                no: {type: GraphQLInt}
            },
            resolve(parentValue, { no }) {
                for(let customer of customers) {
                    if(customer.no == no) return customer
                }
            }
        },
        customers: {
            type: new  GraphQLList(CustomerType),
            resolve() {
                return customers
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
