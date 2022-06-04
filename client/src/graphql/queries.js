import { gql } from "@apollo/client";

export const LOAD_NEWS = gql`
  query {
    getNews {
      _id
      headline
      coverImage
      content
      categoryId
      authorId
      createdAt
    },
  }
`

export const LOAD_SINGLE = gql`
  query GetSingleNews($getSingleNewsId: ID!) {
    getSingleNews(id: $getSingleNewsId) {
      _id
      headline
      coverImage
      content
      categoryId
      authorId
      createdAt
    }
  }
`