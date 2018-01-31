import React from 'react';
import { Carousel } from 'antd';

function Car(props) {
    return (
        <Carousel autoplay>
            <img src="http://img.yidoutang.com/upload/bannel/5a694572c6221.jpg" />
            <img src="http://img.yidoutang.com/upload/bannel/5a6e1b34468b2.jpg"/>
        </Carousel>
    );
}

export default Car;