import { gql } from "@apollo/client";

export const GET_PASSENGERS_BY_ID = gql`
  query MyQuery($id: Int!) {
    passengers(where: { id: { _eq: $id } }) {
      id
      name
      age
      gender
    }
  }
`;
