import { gql } from "@apollo/client";

export const CREATE_PASSENGERS = gql`
  mutation MyMutation($objects: [passengers_insert_input!] = {}) {
    insert_passengers(objects: $objects) {
      returning {
        id
      }
    }
  }
`;
