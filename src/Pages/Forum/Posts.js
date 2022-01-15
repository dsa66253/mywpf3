import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useProfile } from "../../Hooks/useProfile.js";
import defaultPortrait from "../../assets/portrait.png";
import { Card, Divider, Row, Col, Layout } from "antd";
import {ALL_POSTS_QUERY} from "../../graphql/index.js"
import { useQuery, useMutation } from '@apollo/react-hooks';
import {defaultPostArray} from "./defaultPostArray.js";

const { Content } = Layout;
const { Meta } = Card;

//todo 看有沒有需要改用antd's card 

const Wrapper = styled.div`
  margin: 10px;
  margin-top: 10px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Posts = () => {
  const [postsArray, setPostArray] = useState(defaultPostArray);
  const {loading, data} = useQuery(ALL_POSTS_QUERY);

  useEffect(()=>{
      let a=null;
      if(!loading){
    // console.log("data ", data.queryAllPosts)
        setPostArray(data.queryAllPosts);
      }

  }, [loading])

  return (
    <>
      {postsArray.map((post) => {
        return (
          <Layout>
            <Content>
              <Row wrap={true}>
                <Col span={5}>
                  <Card
                    style={{ width: 240 }}
                    cover={<img src={defaultPortrait} />}
                  >
                      <>{post.author.username||"an author"}</>
                  </Card>
                  
                </Col>
                <Col span={19}>
                  <Divider orientation="left" orientationMargin="1">
                    {post.title}{" "}
                  </Divider>
                  <Meta title="" description={post.body} />
                  <br />
                  {/* <Meta title="date" description={post.date} /> */}
                  <Divider orientation="right" plain>
                    {post.date}
                  </Divider>
                </Col>
              </Row>
            </Content>
          </Layout>
        );
      })}
    </>
  );
};

export { Posts };
