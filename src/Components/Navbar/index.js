import { Menu, Dropdown, Modal, Button, Steps } from 'antd';
import React, { useState, useEffect } from 'react';
import { DownOutlined } from '@ant-design/icons';
import yt from "./yt.png"
import {Nav,NavLink,Bars,NavMenu,NavBtn,NavBtnLink,} from "./NavbarElements";
import {useProfile} from "../../Hooks/useProfile"
import { TextField } from '@mui/material';
import {CREATE_USER_MUTATION, USERLOGIN_QUERY} from "../../graphql/index"
import  { Navigate } from 'react-router-dom'
import { useMutation, useQuery } from '@apollo/client';
// import bcrypt from "bcryptjs"; 
const saltRounds = 10; // used for bcrypt
// todo useQuery 確認sign in  //look up document 



const MyNavbar = () => {
  const [isLogInModalVisible, setIsLogInModalVisible] = useState(false);
  const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false);
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const {signIn, setSignIn, setUsername, username} = useProfile();
  const [createUser] = useMutation(CREATE_USER_MUTATION);
  
 
  const {loading, data, refetch}= useQuery(USERLOGIN_QUERY);

  // handle modal
  const showLogInModal = () => {
    setIsLogInModalVisible(true);
  };
  const handleLogInOk = async () => {
    let {data:{queryLoginUser:{success, detail, admin}}} = await refetch({
      username:username,
      password:password
    })
    // setUsername("");
    // setPassword("");
    setSignIn(success)
    console.log(success, detail, admin)
    setIsLogInModalVisible(false);
  };
  const handleLogInCancel = () => {
    setIsLogInModalVisible(false);
  };

  const showSignUpModal = () => {
    setIsSignUpModalVisible(true);
  };
  const handleSignUpOk = async () => {
    console.log("handleSignUpOk called", CREATE_USER_MUTATION)
    // let passwordHash = await bcrypt.hash(password, saltRounds);
    // todo 改成axios https比較安全
    let tmp = await createUser({
      variables:{
        username:username,
        password:password,
        email:email
      }
    })
    console.log("tmp", tmp)
    setUsername("");
    setEmail("");
    setPassword("");
    setIsSignUpModalVisible(false);
  };
  const handleSignUpCancel = () => {
    setIsSignUpModalVisible(false);
  };
  const handleLogOut = ()=>{
    setSignIn(false);
    console.log("handleLogOut")
    return <Navigate to='/home'  />
  }

  const menu = (
    <Menu>
      {signIn ? (
        <>
          <Menu.Item key="1">
            <a onClick={handleLogOut}>Log out</a>
          </Menu.Item>
          <Menu.Item key="2">
            <a href="https://www.yahoo.com">Profile</a>
          </Menu.Item>
        </>
      ) : (
        <>
          <Menu.Item key="3">
            <a onClick={showLogInModal}>Log in</a>
          </Menu.Item>
          <Menu.Item key="4">
            <a onClick={showSignUpModal}>Sign up</a>
          </Menu.Item>
        </>

      )}
    </Menu>
  );
  return (
    <>
      <Nav>
      
        <NavLink to='/'>
        <a href="https://homepage.ntu.edu.tw/~ntuesoe/tw/Default.html"><img src={yt} alt='logo' style={{maxHeight:100, left:0}}/></a>
        </NavLink>
        <Bars />
        <NavMenu>

          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/prof' activeStyle>
            Prof
          </NavLink>
          <NavLink to='/forum' activeStyle>
            Forum
          </NavLink>
          <NavLink to='/message' activeStyle>
            Message
          </NavLink>
          <NavLink to='/members' activeStyle>
            Members
          </NavLink>
        </NavMenu>
        <NavBtn>
        <Dropdown overlay={menu} trigger={['hover']}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Account <DownOutlined />
          </a>
        </Dropdown>
        </NavBtn>

      </Nav>
      <Modal title="Log In" visible={isLogInModalVisible} onOk={handleLogInOk} onCancel={handleLogInCancel}>
        <div><TextField value={username} id="username" label="username" variant="outlined" onChange={(e)=>setUsername(e.target.value)}/></div>
        {/* <div><TextField value={email} id="email" label="email" variant="outlined" onChange={(e)=>setEmail(e.target.value)}/></div> */}
        <div><TextField value={password} id="password" label="password" variant="outlined" onChange={(e)=>setPassword(e.target.value)}/></div>
      </Modal>
      <Modal title="Sign up" visible={isSignUpModalVisible} onOk={handleSignUpOk} onCancel={handleSignUpCancel}>
        <div><TextField value={username} id="username" label="username" variant="outlined" onChange={(e)=>setUsername(e.target.value)}/></div>
        <div><TextField value={email} id="email" label="email" variant="outlined" onChange={(e)=>setEmail(e.target.value)}/></div>
        <div><TextField value={password} id="password" label="password" variant="outlined" onChange={(e)=>setPassword(e.target.value)}/></div>
      </Modal>
    </>
  )
};

export default MyNavbar;