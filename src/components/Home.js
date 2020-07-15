import React, { Component } from 'react'
import Modal from 'react-modal'
import {useState} from 'react'
import Select from 'react-select'
import homeie from '../assets/home1.png'
import pgo from '../assets/pgo.png'
import officer from '../assets/officer.png'
import bg1 from '../assets/bg4.png'
import add from  '../assets/add.png'


import { Layout, Avatar } from 'antd';
import { Typography } from 'antd';

import { Menu, Switch } from 'antd';
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
    DeleteOutlined
  } from '@ant-design/icons';
import { Row, Col, Divider } from 'antd';
import { Card } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;  
const { Header, Footer, Sider, Content } = Layout;
const { Title } = Typography;
const { SubMenu } = Menu;

// styles
const divStyle = {
    padding : "5px",
    borderRadius : "5px",
    background : "#D3D3D3"
}
const btnStyle = {
    borderRadius : "5px",
    padding: "2px",
    background : "white",
    border: "none",
    marginTop : "7px",
    marginLeft : "5%",
    width : "50%",   
}
const btnStyle2 = {
    borderRadius : "5px",
    padding: "2px",
    background : "white",
    border: "none",
    marginTop : "7px",
    marginLeft : "25%",
    width : "50%",
}
const input_txt = {
    width : "100%",
    border: "none",
    
}
const modal_style = 
    { content : {height  :"300px", width : "50%",marginLeft : "300px"} }

const modal_style2 = 
    { content : {height  :"150px", width : "40%",marginLeft : "400px"} }

const inComing = {
    float : "center",
    background : "#D3D3D3",
    borderRadius : "5px",
    width: "100%",
    height : "100%",
    cursor : "pointer"
}
const inside_image = {
    height : "40px",
    width : "40px",
    marginTop : "30px"
}
const conten  = 
{ background : "white", padding :"10px",borderRadius : "1px",marginTop : "7px", height :"100%"}


function Home(props){

    function bawda(sel){
        console.log("selected:",sel)
    }
        
    const options = [
        { value: 'home', label: 'Home' },
        { value: 'pg', label: 'PG' },
        { value: 'office', label: 'Office' }
      ];
    const [modalIsopen, setModalIsOpen] = useState(false)
    const [modalPwd, setModalPwdOpen] = useState(false)
    const [modalPassword, setModalPassword] = useState(props.data.data.data.password)


    const [modalHome, setHomeOpen] = useState(false)
    const [modalOffice, setOfficeOpen] = useState(false)
    const [modalPg, setPgOpen] = useState(false)
    

    
    const [homi, setHomi] = useState(false);
    const [officei, setOffice] = useState(false);
    const [pgi, setPg] = useState(false);
    

    const [office, setOffie]            = useState({o: ""})
    const [home, setHome]               = useState({h: ""})
    const [pg, setOPg]                  = useState({p: ""})

    const [showAddress, setAddress]  = useState(false)
    const [showProfile, setProfile]  = useState(true)
    const [showPassword, setPwd]  = useState(false)
    
    
    
    return(
    <div>
        <Layout style = {{padding: "1px"}}>
        <Sider style = {{background : 'white', height : "680px", width:"500px",padding : "7px"}}>
        <Title level = {4} style = {{marginTop : "10px"}}><Avatar icon = "user" /> 
            <span style = {{marginLeft : "5px"}}></span>Hi {props.data.data.data.name}</Title>
            
            <Menu
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
            >
          <Menu.Item key="1" icon={<PieChartOutlined />}
                onClick = {() => setAddress(false)}>
            My profile
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />} 
            onClick = {() => setAddress(true)} >
            Manage Address
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />} 
            onClick = {() => {setModalPwdOpen(true)}}>
            Change Password
          </Menu.Item>
        </Menu>
        </Sider>
        <Layout style = {{padding: "5px"}}>

            {showAddress ? (<Header style = {{background : 'white'}}><b>My Addresses</b><span style = 
                    {{float : 'right', background:'white', cursor: "pointer"}} 
                    onClick = {() => {setModalIsOpen(true)}}>+ Add address</span></Header>) : 
            (<Header style = {{background : 'white'}}>Profile</Header>)}
            
            {showAddress ? (<Content style = {conten}>
                
                {/* Address cards */}
            {home.h == "" && office.o == "" && pg.p == "" ? (
                <div><center><img src = {bg1} style = {{width : "50%", height : "530px", padding:"10px"}}/></center></div>
            ) : (
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} style = {{padding: "5px"}}>
                <Col className="gutter-row" span={8}>
                
                
            {home.h!="" ? (
                <Card
                style={{ width: "100%" }}
                actions={[
                <EditOutlined key="setting" onClick = {() => setHomeOpen(true)}/>,
                <DeleteOutlined  key="edit" onClick = {() => {setHome({...home, h: ""})}}/>
                ]}
            >
                <Meta
                avatar={<img src = {homeie} style = {{width : "30px", height : "30px"}}/>}
                title="Home Address"
                description={home.h}
                />
            </Card>
                ) :(<div onClick = {() => setHomeOpen(true)} style = {inComing}>
                        <center>
                            <img src = {add} style = {inside_image}/><br/>
                            <b style = {{marginBottom : "20px"}}>Add home Address</b>
                        </center>
                        </div>) }
                
                <Modal isOpen = {modalHome} style = {modal_style2}>
                <div style = {divStyle}>
            
                    <div>
                        Edit home address<br/>
                        <input type = "text" value = {home.h} style = {input_txt}
                            onChange = {e => setHome({...home, h:e.target.value})}/>
                        <br/>
                        <button style = {btnStyle2} onClick = {() => setHomeOpen(false)}>Ok</button>
                    </div>
                    </div>
                </Modal>
                </Col>

                <Col className="gutter-row" span={8}> 
                
                    {office.o!="" ? (
                        <Card
                        style={{ width: "100%" }}
                        actions={[
                        <EditOutlined key="setting" onClick = {() => setOfficeOpen(true)}/>,
                        <DeleteOutlined key="edit" onClick = {() => {setOffie({...office, o: ""})}}/>
                        
                        ]}
                    >
                        <Meta
                        avatar={<img src = {officer} style = {{width : "30px", height : "30px"}}/>}
                        title="Office Address"
                        description={office.o}
                        />
                    </Card>
                        ) :(<div onClick = {() => setOfficeOpen(true)} style = {inComing}>
                            <center>
                             <img src = {add} style = {inside_image}/><br/>
                            <b style = {{marginBottom : "20px"}}>Add Office Address</b>
                        </center>
                        </div>) }
                
                <Modal isOpen = {modalOffice} style = {modal_style2}>
                    <div style = {divStyle}>
                        Edit office address<br/>
                        <input type = "text" value = {office.o} style = {input_txt}
                            onChange = {e => setOffie({...office, o:e.target.value})}/>
                        <br/>
                        <button style = {btnStyle2} onClick = {() => setOfficeOpen(false)}>Ok</button>
                    </div>
                </Modal>
                </Col>

                <Col className="gutter-row" span={8}>
                 
                    {pg.p!="" ? (

                        <Card
                            style={{ width: "100%" }}
                            actions={[
                            <EditOutlined key="edit" onClick = {() => setPgOpen(true)}/>,
                            <DeleteOutlined key="delet" onClick = {() => {setOPg({...pg, p: ""})}}/>,
                            ]}
                            >
                            <Meta
                            avatar={<img src = {pgo} style = {{width : "30px", height : "30px"}}/>}
                            title="Pg Address"
                            description={pg.p}
                            />
                        </Card>
                        
                        ) :(<div onClick = {() => setPgOpen(true)} style = {inComing}>
                            <center>
                             <img src = {add} style = {inside_image}/><br/>
                            <b style = {{marginBottom : "20px"}}>Add PG Address</b>
                        </center>
                        </div>) }
                
                <Modal isOpen = {modalPg} style = {modal_style2}>
                <div style = {divStyle}>
            
                    <div>
                        Edit pg address<br/>
                        <input type = "text" value = {pg.p} style = {input_txt}
                            onChange = {e => setOPg({...pg, p:e.target.value})}/>
                        <br/>
                        <button onClick = {() => setPgOpen(false)} style = {btnStyle2}>Ok</button>
                    </div>
                    </div>
                </Modal>

                </Col>
                </Row>

            )}                

            
            </Content>):(<Content>
                <div style = {conten}>
            <p><b>Hello</b> {props.data.data.data.name} {console.log(props.data.data)}</p>
            <p><b>Phone</b> : {props.data.data.data.phone}</p>
            </div>

            </Content>)}

            <Footer>Done by Tanmay</Footer>
        </Layout>
        </Layout>


        

        <Modal isOpen = {modalPwd} style = {modal_style2}>
        <div style = {divStyle}>
            
            <div>Change pwd: </div>
            <input type = "text" value = {modalPassword} 
                    onChange = {e => setModalPassword(e.target.value)}/>
            <br/>
            <button style = {btnStyle2} onClick = {() => {setModalPwdOpen(false)}}>Ok</button>
            </div>
        </Modal>

        <Modal isOpen = {modalIsopen} style = {modal_style}>
            <div style = {divStyle}>
            <div>
                <div onClick = {() => setHomi(true)} style = {{cursor : "pointer"}} ><b>+ Home</b></div>
                {homi ? (<div><input type = "text" value = {home.h} style = {input_txt}
                    onChange = {e => setHome({...home, h:e.target.value})}/></div>):
                    (<div></div>)}
            </div>
            <br/>
            <div>
                <div onClick = {() => setOffice(true)} style = {{cursor : "pointer"}}><b>+ Office</b></div>
                {officei ? (<div><input type = "text" value = {office.o} style = {input_txt}
                    onChange = {e => setOffie({...office, o:e.target.value})}/></div>):(<div></div>)}
            </div>
            <br/>
            <div>
                <div onClick = {() => setPg(true)} style = {{cursor : "pointer"}}><b>+ Pg</b></div>
                {pgi ? (<div><input type = "text" value = {pg.p} style = {input_txt}
                    onChange = {e => setOPg({...pg, p: e.target.value})}/></div>):(<div></div>)}
            </div>
            <div>
                <br/>
                <center><button onClick = {() => setModalIsOpen(false)} style = {btnStyle}>Ok</button></center>
            </div>
            </div>

            
        </Modal>

            </div>
    )
}

export default Home