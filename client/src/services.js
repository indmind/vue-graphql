import "cross-fetch/polyfill";
import ApolloClient, { gql } from "apollo-boost";

const ec2 = require("ec2-publicip");

function getIp() {
  return new Promise(resolve => {
    ec2.getPublicIP((error, ip) => {
      if (error) {
        return resolve("localhost");
      }
      resolve(ip);
    });
  });
}

class Client {
  apollo;

  async setup() {
    this.apollo = new ApolloClient({
      uri: `http://${await getIp()}:4000/graphql`
    });
  }

  async query(...params) {
    const { data } = await this.apollo.query(...params);

    return await data;
  }
}

export class CustomerServices extends Client {
  async getCustomer(id = 1) {
    const query = gql`
      {
        customer(no: ${id || 1}) {
          no
          nama
          kelamin
        }
      }
    `;

    return (await super.query({ query })).customer;
  }

  async getCustomers() {
    const query = gql`
      {
        customers {
          no
          nama
        }
      }
    `;

    return (await super.query({ query })).customers;
  }
}
