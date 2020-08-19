import React from 'react';
import '../public/style/components/header.css'
import {Row,Col,Menu,Affix} from 'antd'
import { HomeOutlined,YoutubeOutlined,SmileOutlined } from '@ant-design/icons';
const Header = ()=>(
    <Affix>
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} md={24} md={10} lg={10} xl={15} xxl={12}>
                    <span className="header-logo">mirror_Mx</span>
                    <span className="header-txt">加油加油加油加油，努力努力努力！！！</span>
                </Col>
                <Col xs={0} md={0} md={14} lg={8} xl={6} xxl={4}>
                    <Menu mode="horizontal">
                        <Menu.Item key="home">
                            <HomeOutlined />
                            首页
                        </Menu.Item>
                        <Menu.Item key="video">
                            <YoutubeOutlined />
                            视频
                        </Menu.Item>
                        <Menu.Item key="life">
                            <SmileOutlined />
                            生活
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    </Affix>

)


export default Header 