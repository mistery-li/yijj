import React from 'react';
import { Link, Router, hashHistory, IndexRoute, Redirect, IndexLink, Route } from 'react-router-dom';

import { Car, LowerBlock } from '../components/Car';
import { Card, Tooltip, BackTop, Menu, Icon, Layout, Button, Input } from 'antd';
import './index.css';
import Pagnel from './Pagnel';
import Look from './Look';
import NavSearch from '../components/Nav';
import HashRouter from 'react-router-dom/HashRouter';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            current: 'index',
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (e) => {
        console.log('click', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (


            <HashRouter>
                <div className="header">
                    <NavSearch text="在此搜索你想看的宝贝" />
                    <Menu className="yijj-Nav"
                        onClick={this.handleClick}
                        selectedKeys={[this.state.current]}
                        mode="horizontal"
                    >
                        <Menu.Item key="index"><Link to="/"><Icon type="index" />首页</Link></Menu.Item>
                        <Menu.Item key="look-image"><Link to="/look"><Icon type="look-image" />看图</Link></Menu.Item>
                        <Menu.Item key="all-house"><Icon type="" />屋主展</Menu.Item>
                        <Menu.Item><Icon type="house-says" />屋主说</Menu.Item>
                        <Menu.Item key="all-test"><Icon type="all-test" />众测</Menu.Item>
                    </Menu>
                    <Route path="/" component={() => <Index />} />
                    <Route path="/look" component={() => <Look />} />
                </div>
            </HashRouter>



        );
    }
}



class Index extends React.Component {
    render() {
        const hot = ['美式', "北欧", "电视墙", "厨房", "客厅", "沙发", "榻榻米", "日式", "卧室", "阳台", "收纳", "家装经验", "购物攻略"];
        const house = ['单身公寓', '一居室', '两居室', '三居室', '四居室', '复式', '别墅', '其他'];
        return (
            <div className="app">
                <Car alt="auto-image" />
                <LowerBlock />
                <Card title="热门筛选" className="hot">
                    {
                        hot.map((item) => <a href="#" key={item}>{item}</a>)
                    }
                </Card>
                <Card title="户型筛选" className="house">
                    {
                        house.map((item) => <a href="#" key={item}>{item}</a>)
                    }
                </Card>
                <div className="block-title">
                    <div className="left-solid"></div>
                    <span className="block-text">精选</span>
                </div>
                <div>
                    <Pagnel />
                    <Pagnel />
                    <Pagnel />
                    <Pagnel />
                    <Pagnel />
                    <Pagnel />
                </div>
                <div className="back-top">
                    <BackTop />
                </div>
            </div>
        );
    }
}



export default App;