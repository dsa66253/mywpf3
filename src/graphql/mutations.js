import { gql } from "@apollo/client";
const CREATE_USER_MUTATION = gql`
  mutation createUser($username: String, $email: String, $password: String) {
    createUser(username: $username, email: $email, password: $password) {
      username
      success
      detail
    }
  }
`;
const CREATE_POST_MUTATION = gql`
  mutation createPost(
    $author: String
    $title: String
    $body: String
    $type: String
    $date: String
  ) {
    createPost(
      author: $author
      title: $title
      body: $body
      type: $type
      date: $date
    ) {
      id
      author {
        email
        picture
      }
      title
      body
      type
      date
    }
  }
`;

export { CREATE_USER_MUTATION, CREATE_POST_MUTATION };
