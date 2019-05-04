import "cross-fetch/polyfill";
import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});

export class CustomerServices {
  static async getCustomer(id = 1) {
    const query = gql`
      {
        customer(no: ${id || 1}) {
          no
          nama
          kelamin
        }
      }
    `;

    const data = await client.query({ query });
    return (await data.data).customer;
  }

  static async getCustomers() {
    const query = gql`
      {
        customers {
          no
          nama
        }
      }
    `;

    const data = await client.query({ query });
    return (await data.data).customers;
  }
}
