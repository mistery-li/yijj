import React from 'react';
import { Menu, Icon, Layout, Button } from 'antd';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Navigate extends React.Component {
    state = {
        current: 'mail',
    }
    handleClick = (e) => {
        console.log('click', e);
        this.setState({
            current: e.key,
        });
    }
    render() {
        return (
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
                    <a href="#" target="_blank">登录</a>
                    <span> | </span>
                    <a href="#" target="_blank">注册</a>
                </div>
            </Menu>
        );
    }
}

export default Navigate;