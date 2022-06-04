import { gql} from '@apollo/client';

export const ADD_NEWS = gql`
mutation AddNews($newsData: NewsData) {
  addNews(newsData: $newsData) {
    _id
  }
}
`;

export const REGISTER = gql`
mutation Mutation($userInput: UserInputData) {
  registerUser(userInput: $userInput) {
    token
  }
}
`
export const LOGIN = gql`
mutation Login($loginData: LoginInput) {
  login(loginData: $loginData) {
    token
  }
}
`
