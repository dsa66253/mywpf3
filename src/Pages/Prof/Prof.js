import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import defaultPortrait from "../../assets/portrait.png";

import { Card } from "antd";

const { Meta } = Card;
// TODO 開始做Forum跟個人profile更新資料 user 要新增graduated
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

const StyledPaper = styled(Paper)`
  padding: 4em;
`;

const Prof = () => {
  return (
    <>
  
    {/* <div style="height:50px"></div> */}
  
    <Wrapper>
      <StyledPaper elevation={3}>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img src={defaultPortrait}/>}
        >
          <Meta title="Instructor " description="DingDing" />
          <br/>
          <Meta title="Education" description="Ph.D. in Naval Architecture and Marine Engineering, U. of Michigan" />
          <br/>
          <Meta title="Reseach field" description="Machine learning, ocean wave, and image reccognition" />
        </Card>
      </StyledPaper>
    </Wrapper>
    </>
  );
};

export { Prof };
