import React, { Component } from 'react'
import axios from 'axios'
import {Router} from '@reach/router'
import Home from './Home'
import car from  '../assets/car.png'
import logoi from '../assets/logo.png'
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'

import { Layout, Avatar } from 'antd';
import { Typography } from 'antd';
import { Row, Col, Divider } from 'antd';
import { Input } from 'antd';


const txt = {
    width  :"80%",
    padding : "3px",
    marginTop : "7px", 
}
const blow = {
    border : "none",
    width : "80%",
    background : "red",
    color : "white",
    padding  :"7px",
    borderRadius : "7px"
}

export default class Auth extends Component {

    constructor(props){
        super(props);
        this.state = {
            phone: "",
            password: "",
            auth: false,
            data :{}
        }
        this.login = this.login.bind(this)
    }
    


    login(){
            console.log("this.state:" + JSON.stringify(this.state,null,1))
            axios.post('http://localhost:3002/api/login', this.state)
            .then(res => {
                console.log(JSON.stringify(res.data.message,null,1))
                if( res.data.message == 'invalid'){
                    alert("Invalid login creentials")
                }else{
                    alert("Logged in successfully")
                    console.log("dataaa:",res)
                    this.setState({
                        auth: true,
                        data: res.data
                    })
                }
            })
            .catch(err => {
                console.log("err:",err)
            })
    }
    render() {
        return (
            this.state.auth === false ?
            (
            <div>
                <Layout style = {{padding: "1px"}}>
        
                <Row style = {{padding:"10px", width : "900px", height : "100%", marginLeft :"20%", marginTop : "5%"}}>
                    <Col span={9}>
                        <img src = {car} style = {{width : "100%", height : "554px"}}/>
                    </Col>
                    <Col span={15} style = {{background : "white",padding : "10px"}}>
                        <div style = {{marginLeft : "100px"}}>
                            <center><img src = {logoi}/></center>
                            <br/><br/>
                            <label>Username</label><br/>
                            <Input placeholder = "9999999999" style = {txt} type = "text" onChange = {(e) => {this.setState({phone : e.target.value})}}/> <br/>
                            <br/><br/>
                            <label>Password</label><br/>
                            <Input placeholder = "password" style = {txt} type = "text" onChange = {(e) => {this.setState({password : e.target.value})}}/><br />
                            <p style = {{color : "red", fontSize : "12px"}}>Forgot your password</p>
                            <br/>
                            <button style = {blow} onClick = {() => this.login()}>Login</button>
                            <p style = {{color : "grey"}}>Or if you need new account 
                                <span style = {{fontSize : "17px", fontWeight : "bold", color : "black"}}> Sign Up </span>
                                 here</p>
                            <p style = {{marginLeft : "30%"}}>Or Login with</p>
                            <span style = {{marginLeft : "24%"}}><img src = {google}/></span><span><img src = {facebook}/></span>
                            
                        </div>
                    </Col>
                </Row>
                
                </Layout>
                </div>)
                :
            (<div>
                <Router>
                    <Home path = "/" data = {this.state}/>
                </Router>
            </div>)
        )
    }
}
