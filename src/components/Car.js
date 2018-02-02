import React from 'react';
import { Carousel } from 'antd';
import "./Nav.css";

function Car(props) {
    return (
        <div className="auto-image">
            <Carousel autoplay className="auto-image" alt={props.alt}>
                <img src="http://img.yidoutang.com/upload/bannel/5a6937098dc2f.jpg" />
                <img src="http://img.yidoutang.com/upload/bannel/5a6e1b34468b2.jpg" />
                <img src="http://img.yidoutang.com/upload/bannel/5a72764303668.jpg" />
            </Carousel>
        </div>

    );
}

function LowerBlock(props) {
    return (
        <div className="block">
            <a className="block-item">
                <div className="block-item-left">
                    <img src="//qstatic.yidoutang.com/themes/150226/img/module/block/crown.png" className="crowm" />
                    <div className="avatar">
                        <img src="http://img.yidoutang.com/upload/user/default-pic.png!s95" />
                    </div>
                </div>
                <h3 className="title">今日屋主</h3>
                <p className="abstract">她家衣柜能换100种内部设计！</p>
                <span className="name">by 晚晚与迟到</span>
            </a>
            <a className="block-item">
                <div className="block-item-left">
                    <img src="//qstatic.yidoutang.com/themes/150226/img/module/block/crown.png" className="crowm" />
                    <div className="avatar">
                        <img src="http://img.yidoutang.com/upload/user/default-pic.png!s95" />
                    </div>
                </div>
                <h3 className="title">今日屋主</h3>
                <p className="abstract">她家衣柜能换100种内部设计！</p>
                <span className="name">by 晚晚与迟到</span>
            </a>
            <a className="block-item">
                <div className="block-item-left">
                    <img src="//qstatic.yidoutang.com/themes/150226/img/module/block/crown.png" className="crowm" />
                    <div className="avatar">
                        <img src="http://img.yidoutang.com/upload/user/default-pic.png!s95" />
                    </div>
                </div>
                <h3 className="title">今日屋主</h3>
                <p className="abstract">她家衣柜能换100种内部设计！</p>
                <span className="name">by 晚晚与迟到</span>
            </a>
        </div>

    )
}

export { Car, LowerBlock };