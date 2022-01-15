
import './App.css';
import { Home } from "./Pages/Home/Home"
import {Member} from "./Pages/Member/Member"
import {Prof} from "./Pages/Prof/Prof"
import {Forum} from "./Pages/Forum/Forum"
import {Message} from "./Pages/Message/Message"

import {  Layout, Menu, Breadcrumb, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import MyNavbar from './Components/Navbar/';
import {BrowserRouter, Router, Routes, Route, Navigate } from 'react-router-dom';

const { Header, Content, Footer } = Layout;


function App() {
  const navItem = ["Home", "Prof", "Forum", "Chat", "Members"]
  const menu = (
    <Menu>
      <Menu.Item key="0">
        <a href="https://www.youtube.com">youtube</a>
      </Menu.Item>
      <Menu.Item key="1">
        <a href="https://www.yahoo.com">yahoo</a>
      </Menu.Item>
      
      <Menu.Item key="3">3rd menu item</Menu.Item>
    </Menu>
  );

  return (
    <>

        {/* <div>helo</div> */}
        <BrowserRouter>
        
          <MyNavbar />
          <div style={{"height" : "100px"}}></div>
          <Routes>
            <Route path="/" >
              <Route path="/home" element={<Home />} />
              <Route path="/prof" element={<Prof />} />
              <Route path="/forum" element={<Forum />} />
              <Route path="/message" element={<Message />} />
              <Route path="/members" element={<Member />} />
              <Route path="*" element={<Navigate to="/" />}/>
            </Route>
          </Routes>
          {
            // Routes 就是以前的switch
          }

        </BrowserRouter>
    </>
    




  );
}

export default App;
