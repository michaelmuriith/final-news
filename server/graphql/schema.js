const { gql } = require("apollo-server");

module.exports = gql`
  type Token {
    token: String!
  }

  type Note {
    _id: ID
    title: String!
    content: String!
    createdAt: String!
    updatedAt: String!
  }

  type User {
    _id: ID
    full_name: String!
    display_name: String!
    image: String
    email: String!
    password: String!
    token: String
  }

  type News {
    _id: ID
    headline:  String!
    coverImage:  String
    content:  String!    
    categoryId:  String!
    authorId: String!
    createdAt: String!
    updatedAt: String!
  }

  type Category {
    _id: ID
    name: String!
  }

  input CategoryInput {
      name: String!
  }

  input NewsData {
    headline:  String!
    coverImage:  String
    content:  String!    
    categoryId:  String!
    authorId: String!
  }

  input UserInputData {
    full_name: String!
    display_name: String!
    image: String
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  input NoteInputData {
    title: String!
    content: String!
  }

  type Query {
    getNotes: [Note!]!
    getNote(id: ID!): Note!

    getNews: [News!]!
    getSingleNews(id: ID!): News!

    getCategory(id: ID!): Category!
    getCategories: [Category!]!

    getUser(id: ID!): User!
  }

  type Mutation {
    createNote(noteInput: NoteInputData): Note!
    updateNote(id: ID!, noteInput: NoteInputData): Note!
    deleteNote(id: ID!): Boolean

    registerUser(userInput: UserInputData): User!
    login(loginData: LoginInput): User!

    createCategory(categoryInput: CategoryInput): Category!
    updateCategory(id: ID!, categoryInput: CategoryInput): Category!
    deleteCategory(id: ID!): Boolean

    addNews(newsData: NewsData): News!
  }

`;