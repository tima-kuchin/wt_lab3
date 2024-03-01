import React, {useState} from 'react';
import './Main.css'
import Col from 'react-bootstrap/Col';
import Sidebar from '../Sidebar/Sidebar'
import Content from '../Content/Content.jsx';

function Main() {
    
    
    
    return (
        <>
            <Col md={12} lg={3}>
                <Sidebar/>
            </Col>
            <Col md={12} lg={9}>
                <Content>
                    
                </Content>
            </Col>
        </>
    );
  }
  
  export default Main;