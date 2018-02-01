import React from 'react';
import Navigate from '../components/Nav';
import Carousel from '../components/Car';
import { Card } from 'antd';
import './index.css';

class App extends React.Component {
    render() {
        const list = ['美式',"北欧","电视墙","厨房","客厅","沙发","榻榻米"];
        return (
            <div>
                <Navigate />
                <Carousel />
                <Card title="热点推荐" className="card">
                {list.map((item) =>
                    <a href="#" key={item}>{item}</a>
                )}
                </Card>
            </div>
        )
    }
}

export default App;