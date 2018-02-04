import React from 'react';
import { Link } from 'react-router-dom';
import Navigate from '../components/Nav';
import { Car, LowerBlock } from '../components/Car';
import { Card, Tooltip, BackTop } from 'antd';
import './index.css';
import Router from 'react-router-dom/Router';
import Pagnel from './Pagnel';

class App extends React.Component {
    render() {
        const hot = ['美式', "北欧", "电视墙", "厨房", "客厅", "沙发", "榻榻米", "日式", "卧室", "阳台", "收纳", "家装经验", "购物攻略"];
        const house = ['单身公寓', '一居室', '两居室', '三居室', '四居室', '复式', '别墅', '其他'];
        return (
            <div className="app">
                <Navigate />
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
        )
    }
}



export default App;