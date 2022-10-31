import { gql } from "@apollo/client";

export const GET_SUBSCRIPTION = gql`
  subscription MySubscription {
    passengers {
      id
      name
      age
      gender
    }
  }
`;
