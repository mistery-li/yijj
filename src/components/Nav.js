import React from 'react';
import { Menu, Icon, Layout, Button, Input } from 'antd';
import "./Car.css";

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;

class Navigate extends React.Component {
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
            <div className="header">
                <NavSearch text="在此搜索你想看的宝贝" search="search" />
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                >
                    <Menu.Item key="index">
                        <Icon type="index" />首页
                    </Menu.Item>
                    <Menu.Item key="look-image">
                        <Icon type="look-image" />看图
                    </Menu.Item>
                    <Menu.Item key="all-house">
                        <Icon type="" />屋主展
                    </Menu.Item>
                    <Menu.Item>
                        <Icon type="house-says" />屋主说
                    </Menu.Item>
                    <Menu.Item key="all-test">
                        <Icon type="all-test" />众测
                    </Menu.Item>
                    <div className="login">
                        <a href="#" target="blank">登录</a>
                        <span> | </span>
                        <a href="#" target="blank">注册</a>
                    </div>
                </Menu>


            </div>

        );
    }
}

function NavSearch(props) {
    return (
        <div>
            <a href="/">一jiajia-家居装修生活平台</a>
            <Search placeholder={props.text}
                style={{ width: 200 }}
                addonAfter="搜索"
                className={props.search}
            />
        </div>
    )
}

export default Navigate;