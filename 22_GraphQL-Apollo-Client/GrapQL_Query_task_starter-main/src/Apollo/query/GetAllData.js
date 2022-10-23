import { gql } from "@apollo/client";

export const GET_PASSENGERS = gql`
  query MyQuery {
    passengers {
      id
      name
      age
      gender
    }
  }
`;
