import React from 'react'
import Head from 'next/head'
import {Row,Col,Breadcrumb,Affix} from 'antd'
import { CalendarOutlined,FireOutlined,FolderOutlined } from '@ant-design/icons';
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import 'markdown-navbar/dist/navbar.css'

import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'

import '../public/style/pages/detailed.css'

const Detailed = () => {
    let markdown=
    '\n# p01:课程介绍和环境搭建\n' +
    '> aaaaaaaaa\n\n' +
    '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
    '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
     '**这是加粗的文字**\n\n' +
    '*这是倾斜的文字*`\n\n' +
    '***这是斜体加粗的文字***\n\n' +
    '~~这是加删除线的文字~~ \n\n'+
    '\`console.log(111)\` \n\n'+
    '# p02:来个Hello World 初始Vue3.0\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n'+
    '***\n\n\n' +
    '# p03:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p04:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '#5 p05:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p06:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '# p07:Vue3.0基础知识讲解\n' +
    '> aaaaaaaaa\n' +
    '>> bbbbbbbbb\n' +
    '>>> cccccccccc\n\n'+
    '``` var a=11; ```'
    return (
        <>
          <Head>
            <title>Detailed</title>
          </Head>
          <Header />
          <Row className="comm-main" type="flex" justify="center">
            <Col className="comm-left" s={24} md={24} md={10} lg={10} xl={15} xxl={12}>
              <div>
                  <div className="bread-div">
                      <Breadcrumb>
                          <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                          <Breadcrumb.Item>视频列表</Breadcrumb.Item>
                          <Breadcrumb.Item>XXX</Breadcrumb.Item>
                      </Breadcrumb>
                  </div>
                  <div>
                      <div className="detailed-title">
                          React视频教程
                      </div>
                      <div className="list-icon center">
                          <span><CalendarOutlined /> 2020-5-25</span>
                          <span><FolderOutlined /> 教程</span>
                          <span><FireOutlined /> 5222</span>
                      </div>
                      <div className="detailed-content">
                          <ReactMarkdown source={markdown} escapeHtml={false} />
                      </div>
                  </div>
      
              </div>
            </Col>
            <Col className="comm-right" xs={0} md={0} md={14} lg={8} xl={6} xxl={4}>
                <Author />
                <Advert />
                <Affix offsetTop={55}>
                    <div className="detailed-nav comm-box">
                        <div className="nav-title">文章目录</div>
                        <MarkNav className="article-menu" source={markdown} ordered={false} />
                    </div>
                </Affix>
            </Col>
          </Row>
          <Footer />
       </>
      )
}

export default Detailed