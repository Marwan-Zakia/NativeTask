import { gql } from "@apollo/client";

export const newQuery = gql`
{
  search(query: "is:public stars:>10000 ", type: REPOSITORY, first: 20) {
    repositoryCount
    edges {
      node {
        ... on Repository {
          name
          openGraphImageUrl
          description
          issues  {
                totalCount
          }
          languages (first:1) {
            edges {
              node {
                id
              }
            }
          } 
          stargazers {
            totalCount
          }
        }
      }
    }
  }
}
`;
export const Myqurey = gql`
{
  viewer {
    login
    name
    avatarUrl
    repositories {
      totalCount
    }
  }
}
	`;