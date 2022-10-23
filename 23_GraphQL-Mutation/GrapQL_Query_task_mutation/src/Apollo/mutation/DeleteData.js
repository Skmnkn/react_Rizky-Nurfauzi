import { gql } from "@apollo/client";

export const DELETE_PASSENGERS = gql`
  mutation MyMutation($id: Int!) {
    delete_passengers_by_pk(id: $id) {
      id
    }
  }
`;
