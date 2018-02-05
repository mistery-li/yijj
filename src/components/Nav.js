import React from 'react';
import { Menu, Icon, Layout, Button, Input } from 'antd';
import "./Car.css";

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const Search = Input.Search;


function NavSearch(props) {
    return (
        <div className="yijj-header">
            <a href="/">一jiajia-家居装修生活平台</a>
            <Search placeholder={props.text}
                style={{ width: 200 }}
                addonAfter="搜索"
                className="search"
            />
            <div className="login">
                <a href="#" target="blank">登录</a>
                <span> | </span>
                <a href="#" target="blank">注册</a>
            </div>
        </div>
    )
}

export default NavSearch;