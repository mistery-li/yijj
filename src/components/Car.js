import React from 'react';
import { Carousel } from 'antd';

function Car(props) {
    return (
        <Carousel autoplay>
            <img src="http://www.yidoutang.com/stat/go.html?type=2018_0129_ikea_1" style={{width: '160px'}}/>
            <img src="http://www.yidoutang.com/case-991164.html" style={{width: "160px"}}/>
            <img src="http://www.yidoutang.com/case-994445.html" style={{width: "160px"}} />
        </Carousel>
    );
}

export default Car;