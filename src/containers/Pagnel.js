import React from 'react';
import { Link } from 'react-router-dom';

import './Pagnel.css';

class Pagnel extends React.Component {
    render() {
        return (
            <div className="article">
                <a href="" target="_blank" className="article-pic">
                    <img src="http://img.yidoutang.com/upload/match/normal/201802/01/5a7271eef29161676.jpg!home320" />
                </a>
                <h2 className="article-title">
                    <a href="" target="_bliank">零散收纳专家：小户型根本不用[ 克制 ] ！</a>
                </h2>
                <p className="article-desc">我是jerry，坐标上海的室内设计师，为工作室设计的这套loft，层高4.5米，套内使用面积30平，另搭阁楼18平；改造后集合办公及居…</p>
                <div className="avatar-wrap">
                    <a href="" className="avatar"><img src="http://img.yidoutang.com/upload/user//201801/08/2018012718167408.jpg!s95"/></a>
                    <span>by</span>
                    <span><a href="">Jerry lu</a></span>
                </div>
                <div className="record-wrap">
                    <span><i></i>7848</span>
                    <span><i></i>87</span>
                </div>
            </div>
        )
    }
}

export default Pagnel;