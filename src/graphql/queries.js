import { gql } from "@apollo/client";
//! 有參數跟沒參數的寫法要注意 格式不一樣
const USERLOGIN_QUERY = gql`
  query queryLoginUser($username: String, $password: String) 
  {
    queryLoginUser(username: $username, password: $password) {
      detail
      success
      admin
    }
  }
`;
const ALL_POSTS_QUERY= gql`
query queryAllPosts
{
  queryAllPosts {
    id
    author{
      username
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

const ALL_MEMBERS_QUERY= gql`
query {
  queryAllMembers{
    email
    username
    email
    picture
    interest
    skill
    graduate
    position
  }

  }
`;
export { USERLOGIN_QUERY, ALL_POSTS_QUERY, ALL_MEMBERS_QUERY };
