/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import logo from '@/assets/logo.svg';
// import { connect } from 'dva';
// import { Row, Col, Icon, Menu, Dropdown } from 'antd';



class ServerRoom extends Component {
    state = {

    };

    render() {
        return (
            <div>
                <strong>this is ServerRoom component</strong>
                <div>
                    <img alt="logo" src={logo} />
                </div>
            </div>
        );
    }
}

export default ServerRoom;